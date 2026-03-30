interface RateLimitEntry {
  count: number;
  timestamp: number;
}

class RateLimiter {
  private attempts: Map<string, RateLimitEntry> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 3, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  check(identifier: string): { allowed: boolean; remainingTime?: number } {
    const now = Date.now();
    const entry = this.attempts.get(identifier);

    if (!entry) {
      this.attempts.set(identifier, { count: 1, timestamp: now });
      return { allowed: true };
    }

    const timeSinceFirst = now - entry.timestamp;

    if (timeSinceFirst > this.windowMs) {
      this.attempts.set(identifier, { count: 1, timestamp: now });
      return { allowed: true };
    }

    if (entry.count >= this.maxAttempts) {
      const remainingTime = Math.ceil((this.windowMs - timeSinceFirst) / 1000);
      return { allowed: false, remainingTime };
    }

    entry.count++;
    this.attempts.set(identifier, entry);
    return { allowed: true };
  }

  reset(identifier: string): void {
    this.attempts.delete(identifier);
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.attempts.entries()) {
      if (now - entry.timestamp > this.windowMs) {
        this.attempts.delete(key);
      }
    }
  }
}

export const formRateLimiter = new RateLimiter(3, 60000);

setInterval(() => {
  formRateLimiter.cleanup();
}, 60000);

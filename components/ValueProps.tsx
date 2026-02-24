import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 space-y-32 py-32 relative z-10">

        {/* Section 1: Research & Strategy */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of Strategy/Research */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400 text-sm">Operations Audit</span>
                  <span className="text-green-400 text-sm">Completed</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">Manual Processes</span>
                    <span className="text-red-400 text-xs">42 identified</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500/50 w-3/4" />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-500 text-xs">Response Delays</span>
                    <span className="text-yellow-400 text-xs">8.2h avg</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500/50 w-1/2" />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-500 text-xs">Data Fragmentation</span>
                    <span className="text-orange-400 text-xs">12 systems</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500/50 w-5/6" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <div className="text-2xl font-bold text-white mb-1">340h</div>
                    <div className="text-xs text-blue-200">Time Wasted Monthly</div>
                  </div>
                  <div className="bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
                    <div className="text-2xl font-bold text-white mb-1">87%</div>
                    <div className="text-xs text-cyan-200">Can Be Automated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
              01. Systems Diagnosis
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Most Companies Don't Have<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">A Talent Problem.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              They have a systems problem. Manual processes, repetitive admin work, delayed responses, human error, and data scattered across tools. Every inefficiency compounds. And every delay costs money. We identify exactly where your operations are bleeding time and resources.
            </p>
          </div>
        </div>

        {/* Section 2: Daily Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium uppercase tracking-wider">
              02. AI Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              We Build AI Systems<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">That Work 24/7.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Not chatbots for show. Not generic automation. We engineer intelligent workflows that automatically qualify and route leads, process internal requests instantly, reduce response time from hours to seconds, and eliminate repetitive administrative tasks. Your team focuses on growth. AI handles execution.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of AI Workflow */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400 text-sm">Automation Status</span>
                  <span className="text-green-400 text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Active
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">Lead Qualification</div>
                      <div className="text-gray-500 text-xs">248 processed today</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">Auto Responses</div>
                      <div className="text-gray-500 text-xs">87 sent in &lt;2 sec</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">Data Processing</div>
                      <div className="text-gray-500 text-xs">1.2k tasks automated</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Indicator */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl p-4 rounded-xl border border-cyan-500/30 shadow-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-white text-sm font-medium">AI Processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Funnel Optimization */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of Revenue/Funnel */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Cost Savings</p>
                    <h3 className="text-4xl font-bold text-white">$84,200</h3>
                  </div>
                  <div className="text-green-400 flex items-center gap-1 text-sm font-medium bg-green-500/10 px-2 py-1 rounded-lg">
                    +187%
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                {/* Simple Chart Visualization */}
                <div className="flex items-end gap-2 h-32 pt-4 border-b border-white/5">
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[30%]" />
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[45%]" />
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[40%]" />
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[65%]" />
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[55%]" />
                  <div className="w-full bg-green-500 rounded-t shadow-[0_0_20px_rgba(34,197,94,0.3)] h-[90%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wider">
              03. Measurable ROI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Real Results,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Not Buzzwords.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We don't just deploy AI for show. Every automation we implement is measured against clear performance metrics: reduced costs, faster response times, increased throughput, and fewer errors. You get a complete performance dashboard showing exactly how much time and money your AI systems are saving every single day.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueProps;


import React, { useState, useEffect, useRef } from 'react';

interface FormData {
  firstName: string;
  businessName: string;
  email: string;
  phone?: string;
  businessType: string;
  bottleneck: string;
  weeklyRequests: string;
  currentProcess: string;
}

interface AutomationResult {
  score: number;
  estimatedWeeklyHoursLost: string;
  estimatedMonthlyValue: string;
  recommendations: string[];
}

interface MultiStepFormProps {
  onComplete: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    bottleneck: '',
    weeklyRequests: '',
    currentProcess: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [automationResult, setAutomationResult] = useState<AutomationResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const webhookUrl = '';

  const businessTypeOptions = [
    { label: 'Restaurant', icon: '🍽️' },
    { label: 'Clinic / Healthcare', icon: '🏥' },
    { label: 'Real Estate', icon: '🏠' },
    { label: 'Hospitality / Guesthouse', icon: '🏨' },
    { label: 'Local Service Business', icon: '🔧' },
    { label: 'Other', icon: '💼' }
  ];

  const bottleneckOptions = [
    { label: 'Answering customer messages', icon: '💬' },
    { label: 'Booking & scheduling', icon: '📅' },
    { label: 'Following up leads', icon: '📞' },
    { label: 'Admin / paperwork', icon: '📋' },
    { label: 'Customer support questions', icon: '❓' },
    { label: 'Team coordination', icon: '👥' }
  ];

  const volumeOptions = [
    { label: '0 – 10', icon: '📊' },
    { label: '10 – 25', icon: '📈' },
    { label: '25 – 50', icon: '📊' },
    { label: '50 – 100', icon: '🚀' },
    { label: '100+', icon: '⚡' }
  ];

  const processOptions = [
    { label: 'Fully manual', icon: '✍️' },
    { label: 'Manual + WhatsApp', icon: '💬' },
    { label: 'Several disconnected tools', icon: '🔗' },
    { label: 'Some automation already', icon: '⚙️' }
  ];


  useEffect(() => {
    if (inputRef.current && currentStep === 1) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const calculateTimeLoss = (weeklyRequests: string): string => {
    const timeLossMap: { [key: string]: string } = {
      '0 – 10': '2–4 hours',
      '10 – 25': '4–8 hours',
      '25 – 50': '8–12 hours',
      '50 – 100': '12–20 hours',
      '100+': '20–30 hours'
    };
    return timeLossMap[weeklyRequests] || '4–8 hours';
  };

  const calculateMonthlyValue = (weeklyHoursLost: string): string => {
    const hoursRange = weeklyHoursLost.match(/(\d+)–(\d+)/);
    if (hoursRange) {
      const minHours = parseInt(hoursRange[1]);
      const maxHours = parseInt(hoursRange[2]);
      const minValue = minHours * 4 * 30;
      const maxValue = maxHours * 4 * 30;
      return `€${minValue.toLocaleString()}–€${maxValue.toLocaleString()}`;
    }
    return '€960–€1,440';
  };

  const getIndustryRecommendations = (businessType: string): string[] => {
    const recommendationsMap: { [key: string]: string[] } = {
      'Restaurant': [
        'Reservation automation',
        'WhatsApp booking assistant',
        'Review automation'
      ],
      'Clinic / Healthcare': [
        'Appointment automation',
        'Reminder system',
        'Intake forms'
      ],
      'Real Estate': [
        'Lead qualification',
        'Property inquiry automation',
        'CRM follow-up'
      ],
      'Hospitality / Guesthouse': [
        'Guest messaging automation',
        'Booking workflows',
        'Review automation'
      ],
      'Local Service Business': [
        'Quote automation',
        'Lead follow-up',
        'Scheduling automation'
      ],
      'Other': [
        'Lead automation',
        'Support automation',
        'Workflow automation'
      ]
    };
    return recommendationsMap[businessType] || recommendationsMap['Other'];
  };

  const calculateAutomationScore = (data: FormData): AutomationResult => {
    let score = 0;

    if (data.currentProcess === 'Fully manual') score += 30;
    else if (data.currentProcess === 'Manual + WhatsApp') score += 20;
    else if (data.currentProcess === 'Several disconnected tools') score += 15;
    else if (data.currentProcess === 'Some automation already') score += 5;

    if (data.weeklyRequests === '0 – 10') score += 5;
    else if (data.weeklyRequests === '10 – 25') score += 10;
    else if (data.weeklyRequests === '25 – 50') score += 15;
    else if (data.weeklyRequests === '50 – 100') score += 20;
    else if (data.weeklyRequests === '100+') score += 30;

    if (data.bottleneck === 'Following up leads') score += 20;
    else if (data.bottleneck === 'Admin / paperwork') score += 18;
    else if (data.bottleneck === 'Booking & scheduling') score += 15;
    else if (data.bottleneck === 'Answering customer messages') score += 15;
    else if (data.bottleneck === 'Customer support questions') score += 12;
    else if (data.bottleneck === 'Team coordination') score += 10;

    const weeklyHoursLost = calculateTimeLoss(data.weeklyRequests);
    const monthlyValue = calculateMonthlyValue(weeklyHoursLost);
    const recommendations = getIndustryRecommendations(data.businessType);

    return {
      score: Math.min(score, 100),
      estimatedWeeklyHoursLost: weeklyHoursLost,
      estimatedMonthlyValue: monthlyValue,
      recommendations
    };
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Please complete this required field.';
      if (!formData.businessName.trim()) newErrors.businessName = 'Please complete this required field.';
      if (!formData.email.trim()) newErrors.email = 'Please complete this required field.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        handleSubmit();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleAutoAdvance = (field: keyof FormData, value: string) => {
    updateField(field, value);
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 300);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const result = calculateAutomationScore(formData);
    setAutomationResult(result);

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formData,
            automationScore: result.score,
            estimatedWeeklyHoursLost: result.estimatedWeeklyHoursLost,
            estimatedMonthlyValue: result.estimatedMonthlyValue,
            recommendations: result.recommendations,
            timestamp: new Date().toISOString()
          }),
        });
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setShowResults(true);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  if (showResults && automationResult) {
    return (
      <div className="relative w-full fade-in-up">
        <div className="space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Your Automation Opportunity Report</h3>
            <p className="text-gray-400 text-sm">Generated for {formData.firstName} at {formData.businessName}</p>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-8 space-y-6">
            <div className="text-center pb-6 border-b border-white/10">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Automation Score</p>
              <div className="relative max-w-xs mx-auto mb-4">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {automationResult.score}
                </div>
                <p className="text-gray-500 text-sm mt-1">out of 100</p>
              </div>
              <div className="max-w-xs mx-auto bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out"
                  style={{ width: `${automationResult.score}%` }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Estimated Time Lost</p>
                    <p className="text-2xl font-bold text-white">{automationResult.estimatedWeeklyHoursLost}</p>
                    <p className="text-gray-500 text-xs mt-1">per week</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Monthly Efficiency Value</p>
                    <p className="text-2xl font-bold text-white">{automationResult.estimatedMonthlyValue}</p>
                    <p className="text-gray-500 text-xs mt-1">potential savings</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Top 3 Automation Opportunities</p>
              <div className="space-y-2">
                {automationResult.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-white font-medium">{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm leading-relaxed">
                Based on your answers, your business may be losing <span className="text-white font-semibold">{automationResult.estimatedWeeklyHoursLost}</span> per week on manual processes. Your biggest bottleneck is <span className="text-white font-semibold">{formData.bottleneck.toLowerCase()}</span>, which represents a significant opportunity for improvement.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Recommended Next Step</p>
                <p className="text-xl font-bold text-white">Automation Strategy Call</p>
                <p className="text-gray-400 text-sm mt-1">30-minute consultation to map your automation roadmap</p>
              </div>
            </div>
            <button
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white px-8 py-4 text-base font-bold hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 transition-all rounded-xl cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Book My Free Automation Strategy Call
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div className="text-center mb-6">
        <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Takes under 60 seconds
          </span>
          <span className="text-gray-700">•</span>
          <span>No spam</span>
          <span className="text-gray-700">•</span>
          <span>Personalized automation insights</span>
        </p>
      </div>

      <div className="absolute top-16 left-0 h-2 bg-gray-800 rounded-full w-full overflow-hidden mb-8">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / 5) * 100}%` }}
        />
      </div>

      <div className="pt-24">
        {currentStep === 1 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Tell us about you</h3>
              <p className="text-gray-500 text-sm">Step 1 of 5</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">First Name</label>
                <input
                  ref={inputRef}
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  placeholder="John"
                  className={`w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 ${errors.firstName ? 'border-red-500/50' : ''}`}
                />
                {errors.firstName && <p className="text-red-400 text-xs pl-2">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Business Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  placeholder="Acme Inc."
                  className={`w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 ${errors.businessName ? 'border-red-500/50' : ''}`}
                />
                {errors.businessName && <p className="text-red-400 text-xs pl-2">{errors.businessName}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Work Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="john@acme.com"
                  className={`w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 ${errors.email ? 'border-red-500/50' : ''}`}
                />
                {errors.email && <p className="text-red-400 text-xs pl-2">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Mobile Phone (Optional)</label>
                <input
                  type="tel"
                  value={formData.phone || ''}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600"
                />
                <p className="text-gray-500 text-xs pl-2">Optional if you'd like us to contact you.</p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              Continue
            </button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">What type of business do you run?</h3>
              <p className="text-gray-500 text-sm">Step 2 of 5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {businessTypeOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => handleAutoAdvance('businessType', opt.label)}
                  className={`p-5 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                    formData.businessType === opt.label
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-medium">{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleBack}
              className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">What is your biggest operational bottleneck?</h3>
              <p className="text-gray-500 text-sm">Step 3 of 5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {bottleneckOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => handleAutoAdvance('bottleneck', opt.label)}
                  className={`p-5 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                    formData.bottleneck === opt.label
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-medium">{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleBack}
              className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">How many customer requests do you handle per week?</h3>
              <p className="text-gray-500 text-sm">Step 4 of 5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {volumeOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => handleAutoAdvance('weeklyRequests', opt.label)}
                  className={`p-5 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                    formData.weeklyRequests === opt.label
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-medium text-xl">{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleBack}
              className="w-full flex items-center justify-center gap-2 py-3 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-8 fade-in-up">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">How are you currently handling this?</h3>
              <p className="text-gray-500 text-sm">Step 5 of 5</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {processOptions.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => {
                    updateField('currentProcess', opt.label);
                  }}
                  className={`p-5 rounded-xl border text-left transition-all hover:scale-[1.02] ${
                    formData.currentProcess === opt.label
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-medium">{opt.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={isSubmitting || !formData.currentProcess}
                className="flex-1 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing automation opportunities...
                  </span>
                ) : (
                  'Generate My Automation Report'
                )}
              </button>
            </div>
          </div>
        )}

      </div>

      <style>{`
        .fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MultiStepForm;

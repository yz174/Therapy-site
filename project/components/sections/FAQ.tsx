'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission. Many clients find they can receive partial reimbursement from their insurance company by submitting the superbill directly to their provider. I'm happy to help you understand this process during our consultation.",
      category: "Payment"
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom. I offer virtual sessions on Monday, Wednesday, and Friday from 1 PM to 5 PM. Virtual therapy can be just as effective as in-person sessions and offers the convenience of receiving care from the comfort of your own space.",
      category: "Sessions"
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations. This allows me to offer the time slot to other clients who may need it. Cancellations made less than 24 hours in advance will be charged the full session fee, except in cases of emergency or illness.",
      category: "Policy"
    },
    {
      question: "How long are therapy sessions?",
      answer: "Each therapy session is 50 minutes long. This provides adequate time to explore your concerns, work through challenges, and develop strategies for positive change while maintaining clear boundaries and structure.",
      category: "Sessions"
    },
    {
      question: "How often should I attend therapy sessions?",
      answer: "Most clients benefit from weekly sessions, especially when starting therapy. As you progress, we may adjust the frequency based on your needs and goals. Some clients prefer bi-weekly sessions, while others benefit from more intensive weekly work initially.",
      category: "Treatment"
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, current challenges, and relevant background information. This helps me tailor our approach to your specific needs and creates a foundation for our work together.",
      category: "Getting Started"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-emerald-50/60 via-green-50/40 to-emerald-100/30 relative overflow-hidden">
      {/* Floating calming elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-200/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-green-200/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-emerald-300/10 rounded-full blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-full shadow-lg">
              <HelpCircle className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-emerald-100/50 group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-emerald-50/50 transition-all duration-200 group-hover:bg-emerald-50/30"
              >
                <div className="flex items-center flex-1">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-emerald-600 font-medium mb-1">{faq.category}</div>
                    <span className="text-lg font-semibold text-slate-800 pr-4">
                      {faq.question}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className={`transition-all duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className={`${openIndex === index ? 'text-emerald-600' : 'text-slate-400'} transition-colors duration-200`} size={24} />
                  </div>
                </div>
              </button>
              
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border-l-4 border-emerald-500">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100/50 inline-block">
            <p className="text-slate-600 mb-4">
              Have more questions? I'm here to help.
            </p>
            <a
              href="mailto:serena@blakepsychology.com"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-full"
            >
              <HelpCircle className="mr-2" size={16} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
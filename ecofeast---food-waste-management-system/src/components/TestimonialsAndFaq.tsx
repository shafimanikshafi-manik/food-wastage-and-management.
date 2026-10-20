import React, { useState } from 'react';
import { 
  Quote, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  HeartHandshake 
} from 'lucide-react';
import { FAQS, TESTIMONIALS } from '../data/initialData';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white dark:bg-slate-950 border-t border-stone-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
              <span>Community Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Voices from the Ground
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              How EcoFeast transforms food rescue operations across university campuses, banquets, and shelters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#fcfbf9] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-slate-800 text-emerald-600 flex items-center justify-center mb-4">
                    <Quote className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200 dark:border-slate-800">
                  <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {t.author}
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Campus Logistics & Food Safety FAQ
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Clear protocols regarding edible surplus redistribution, hygiene compliance, and volunteer fleet handling.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-emerald-50/60 dark:bg-slate-900 border-emerald-300 dark:border-emerald-800 shadow-xs' 
                      : 'bg-white dark:bg-slate-900 border-stone-200 dark:border-slate-800 hover:border-emerald-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-emerald-600 dark:text-emerald-400">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-emerald-100 dark:border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

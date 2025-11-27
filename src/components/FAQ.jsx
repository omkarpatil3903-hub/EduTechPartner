import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            नेहमी विचारले जाणारे प्रश्न
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "मला टेक्निकल नॉलेज असणे आवश्यक आहे का?",
              a: "अजिबात नाही. आमची टेक्निकल टीम सर्व काही सांभाळते. तुम्हाला फक्त विद्यार्थी जोडायचे आहेत.",
            },
            {
              q: "गुंतवणूक परत मिळायला किती वेळ लागतो?",
              a: "सरासरी ३-४ महिन्यात गुंतवणूक परत मिळते. जर तुम्ही ५०-६० विद्यार्थी जोडले तर लगेच ब्रेक-इव्हन होते.",
            },
            {
              q: "मी हे पार्ट-टाइम करू शकतो का?",
              a: "होय, १००% शिक्षक हे पार्ट-टाइमच करतात. तुम्ही तुमच्या सोयीनुसार काम करू शकता.",
            },
            {
              q: "करार किती वर्षांचा असतो?",
              a: "स्टार्टर प्लॅनसाठी १ वर्ष आणि व्हिजनरी प्लॅनसाठी ५ वर्षांचा करार असतो. त्यानंतर तुम्ही रिन्यू करू शकता.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                {faq.q}
                {openFaq === index ? (
                  <ChevronUp className="text-indigo-600" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

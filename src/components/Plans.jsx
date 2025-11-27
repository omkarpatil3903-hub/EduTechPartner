import React from "react";
import { Check, Star } from "lucide-react";

const Plans = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">
            गुंतवणूक
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">
            योग्य बिझनेस प्लॅन निवडा
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            कोणत्याही छुपे शुल्क नाहीत. एकरकमी गुंतवणूक करा आणि आयुष्यभर कमवा.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all hover:shadow-xl flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                स्टार्टर फ्रँचायझी
              </h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold text-slate-900">
                  ₹५०,०००
                </span>
                <span className="text-slate-500">/ १ वर्ष</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "९०% नफा वाटा",
                "बेसिक मार्केटिंग साहित्य",
                "डेडिकेटेड अकाऊंट मॅनेजर",
                "१ वर्ष व्हॅलिडिटी",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Check size={12} className="text-indigo-600" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onSelectPlan("50000")}
              className="w-full py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
            >
              हा प्लॅन निवडा
            </button>
          </div>

          {/* Visionary Plan */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl shadow-indigo-500/20 flex flex-col relative overflow-hidden transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              POPULAR
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                व्हिजनरी पार्टनर{" "}
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
              </h3>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-4xl font-bold text-white">₹१,००,०००</span>
                <span className="text-slate-400">/ ५ वर्षे</span>
              </div>
              <p className="text-green-400 text-sm mt-2 font-medium">
                ✨ ₹१.५ लाखांची बचत
              </p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "९०% नफा वाटा",
                "५ वर्षे व्हॅलिडिटी",
                "प्रायोरिटी २४/७ सपोर्ट",
                "प्रीमियम मार्केटिंग किट + स्ट्रॅटेजी",

              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Check size={12} className="text-indigo-400" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onSelectPlan("100000")}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              हा बेस्ट प्लॅन निवडा
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

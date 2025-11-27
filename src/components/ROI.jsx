import React, { useState } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Lightbulb, TrendingUp, Users } from "lucide-react";

const ROI = () => {
  const [studentCount, setStudentCount] = useState(50);
  const profitPerStudent = 900;
  const monthlyProfit = studentCount * profitPerStudent;
  const annualProfit = monthlyProfit * 12;

  return (
    <section
      id="roi"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm flex items-center gap-2 mb-4">
              <IndianRupee size={16} /> हमखास कमाई
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              गणिताने समजून घ्या <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                तुमचा फायदा
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              सरासरी ॲप फी ₹१,००० गृहीत धरली आहे. यामध्ये तुमचा वाटा ९०% म्हणजे
              ₹९०० असेल.
            </p>

            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm shadow-xl">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-slate-300 font-medium flex items-center gap-2">
                    <Users size={18} className="text-indigo-400" /> शिक्षक
                    संख्या
                  </label>
                  <span className="text-4xl font-bold text-white">
                    {studentCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="500"
                  value={studentCount}
                  onChange={(e) => setStudentCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-3 font-medium">
                  <span>१ शिक्षक</span>
                  <span>५०० शिक्षक</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-lg transform transition-all hover:scale-[1.02] border border-indigo-500/30">
                  <p className="text-indigo-100 text-sm font-medium mb-1 opacity-90">
                    मासिक नफा
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    ₹{monthlyProfit.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="p-5 bg-slate-700/50 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
                  <p className="text-slate-400 text-sm font-medium mb-1 flex items-center gap-1">
                    वार्षिक नफा <TrendingUp size={14} />
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-green-400">
                    ₹{annualProfit.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 text-sm text-blue-200 bg-blue-900/20 p-5 rounded-2xl border border-blue-500/20">
              <div className="bg-blue-500/20 p-2 rounded-lg h-fit">
                <Lightbulb
                  className="flex-shrink-0 text-yellow-400"
                  size={20}
                />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Break-Even Point</p>
                <p className="opacity-80 leading-relaxed">
                  फक्त ५५-६० शिक्षक जोडले की तुमची गुंतवणूक परत! त्यानंतरचा
                  प्रत्येक रुपया हा तुमचा शुद्ध नफा.
                </p>
              </div>
            </div>
          </div>

          {/* Revenue Share Visual */}
          <div className="bg-white text-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(#4f46e5 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-2 rounded-bl-2xl rounded-tr-[2.5rem] uppercase z-10 shadow-sm tracking-wide">
              Best in Market
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-10 text-center text-slate-800">
                नफा विभागणी (Revenue Split)
              </h3>

              <div className="relative w-72 h-72 mb-10">
                {/* SVG Donut Chart */}
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full transform -rotate-90"
                >
                  {/* Background Circle (Company Share) */}
                  <path
                    className="text-slate-100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  {/* Foreground Circle (Your Share) */}
                  <motion.path
                    className="text-indigo-600 drop-shadow-2xl"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.9 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-6xl font-black text-indigo-600 tracking-tighter">
                    ९०%
                  </span>
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-2">
                    तुमचा वाटा
                  </span>
                </div>

                {/* Floating Label for Company */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute top-4 right-0 bg-white border border-slate-100 shadow-xl rounded-full px-4 py-2 text-xs font-bold text-slate-500 flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  १०% कंपनी
                </motion.div>
              </div>

              {/* Comparison Bars */}
              <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">
                  Market Comparison
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                      <span>इतर कंपन्या</span>
                      <span>१५-२०%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-[20%] h-full bg-slate-400 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-indigo-700 mb-1">
                      <span>EdTech Partner</span>
                      <span>९०%</span>
                    </div>
                    <div className="w-full h-3 bg-indigo-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-indigo-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;

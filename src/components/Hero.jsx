import React from "react";
import { motion } from "framer-motion";
import { Rocket, IndianRupee, CheckCircle } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Styling */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Replaced external image with CSS pattern for performance */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-900/90"></div>
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs md:text-sm font-medium tracking-wider uppercase backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            शिक्षकांसाठी मर्यादित संधी
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight text-balance"
          >
            फक्त ॲप वापरू नका,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-400">
              स्वतःचा एड-टेक बिझनेस
            </span>{" "}
            सुरू करा.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            आमचे अधिकृत 'बिझनेस पार्टनर' बना आणि प्रत्येक विक्रीवर{" "}
            <span className="text-white font-semibold border-b-2 border-indigo-500">
              ९०% नफा (Profit)
            </span>{" "}
            मिळवा. <br className="hidden md:block" />
            टेक्नॉलॉजी आमची, ब्रँड तुमचा!
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#apply"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <Rocket size={20} />
              आताच अर्ज करा
            </a>
            <a
              href="#roi"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group"
            >
              <IndianRupee
                size={20}
                className="text-green-400 group-hover:scale-110 transition-transform"
              />
              नफा समजून घ्या
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center justify-center gap-8 text-slate-400 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> १ तालुका १ शिक्षक
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> २४/७ सपोर्ट
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

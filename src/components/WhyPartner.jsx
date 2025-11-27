import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Server, PieChart, Shield, Zap, Globe } from "lucide-react";

const WhyPartner = () => {
  const features = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "मालक बना",
      desc: "तुम्ही आमचे एजंट नाही, तर बिझनेस पार्टनर असाल. स्वतःच्या शहरात/तालुक्यात, स्वतःच्या अटींवर काम करा.",
      color: "bg-blue-500",
      colSpan: "md:col-span-2",
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: "झिरो टेक्निकल टेन्शन",
      desc: "ॲप डेव्हलपमेंट, सर्व्हर, अपडेट्सची जबाबदारी आमची.",
      color: "bg-indigo-500",
      colSpan: "md:col-span-1",
    },
    {
      icon: <PieChart className="w-6 h-6 text-white" />,
      title: "९०% नफा वाटा",
      desc: "इतर कंपन्या २०% देतात. आम्ही तुम्हाला ९०% देतो कारण इतर शिक्षक तुमच्यावर विश्वास ठेवतात.",
      color: "bg-purple-500",
      colSpan: "md:col-span-1",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "सुरक्षित गुंतवणूक",
      desc: "तुमची गुंतवणूक सुरक्षित आहे. कायदेशीर करारासह पूर्ण पारदर्शकता.",
      color: "bg-emerald-500",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section id="why" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">
            फायदे
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">
            ही संधी का घ्यावी?
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${item.colSpan} bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "संदीप पाटील",
      role: "गणित शिक्षक, पुणे",
      text: "मी गेल्या १० वर्षांपासून शिकवत आहे, पण स्वतःचा ब्रँड कधीच बनवू शकलो नाही. EdTech Partner मुळे आज माझे स्वतःचे ॲप आहे आणि मी महिन्याला १ लाखापेक्षा जास्त कमवत आहे.",
      rating: 5,
    },
    {
      name: "प्रिया देशमुख",
      role: "क्लास ओनर, नाशिक",
      text: "सुरुवातीला मला वाटले हे कठीण असेल, पण यांची टीम खूप मदत करते. मार्केटिंग मटेरियल आणि टेक्निकल सपोर्टमुळे मला फक्त शिकवण्यावर लक्ष द्यावे लागते.",
      rating: 5,
    },
    {
      name: "अमित जोशी",
      role: "फ्रीलान्स शिक्षक, मुंबई",
      text: "९०% नफा वाटा हे मार्केटमध्ये कुठेच मिळत नाही. मी ३ महिन्यात माझी गुंतवणूक परत मिळवली आणि आता पूर्ण नफा कमवत आहे.",
      rating: 5,
    },
    {
      name: "राहुल शिंदे",
      role: "सायन्स टीचर, सातारा",
      text: "माझ्या विद्यार्थ्यांसाठी हे ॲप खूप उपयुक्त ठरले आहे. पालकांचा प्रतिसाद खूप चांगला आहे.",
      rating: 5,
    },
    {
      name: "स्नेहा कुलकर्णी",
      role: "कोचिंग क्लासेस, औरंगाबाद",
      text: "टेक्निकल सपोर्ट टीम खूप चांगली आहे. मला कधीच काही अडचण आली नाही.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">
            यशस्वी कथा
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">
            आमचे पार्टनर काय म्हणतात?
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 relative flex-shrink-0 hover:border-indigo-200 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-indigo-100 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Server,
  IndianRupee,
  CheckCircle,
  Award,
  Briefcase,
  ArrowRight,
  Star,
  ShieldCheck,
  Rocket,
  Lightbulb,
  PieChart,
  Menu,
  X,
  PhoneCall,
  Check,
  Quote,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const ModernLandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    profession: "शिक्षक",
    plan: "100000", // Default to higher plan as per marketing psychology
    readyToInvest: "yes",
  });

  const [errors, setErrors] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  // Sticky Navbar Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "नाव आवश्यक आहे";
    if (!formData.phone.trim()) {
      newErrors.phone = "मोबाईल नंबर आवश्यक आहे";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "कृपया वैध १० अंकी मोबाईल नंबर टाका";
    }
    if (!formData.city.trim()) newErrors.city = "शहर आवश्यक आहे";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after 3 seconds or keep success message
      // setFormData({ ...formData, name: '', phone: '', city: '' });
    }, 1500);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Animation Variants
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Rocket size={24} />
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              EdTech<span className="text-indigo-500">Partner</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#why"
              className={`text-sm font-medium hover:text-indigo-500 transition-colors ${
                isScrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              फायदे
            </a>
            <a
              href="#plans"
              className={`text-sm font-medium hover:text-indigo-500 transition-colors ${
                isScrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              प्लॅन्स
            </a>
            <a
              href="#roi"
              className={`text-sm font-medium hover:text-indigo-500 transition-colors ${
                isScrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              नफा (ROI)
            </a>
            <a
              href="#apply"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5"
            >
              भागीदार बना
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu
                size={28}
                className={isScrolled ? "text-slate-900" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <a
                  href="#why"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
                >
                  फायदे
                </a>
                <a
                  href="#plans"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
                >
                  प्लॅन्स
                </a>
                <a
                  href="#roi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 font-medium py-2 px-4 hover:bg-slate-50 rounded-lg"
                >
                  नफा (ROI)
                </a>
                <a
                  href="#apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30"
                >
                  भागीदार बना
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
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
                <CheckCircle size={16} className="text-green-500" /> ५००+ शिक्षक
                जोडले
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" /> २४/७ सपोर्ट
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section id="why" className="py-24 bg-white relative">
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-white" />,
                title: "स्वतःचे मालक बना",
                desc: "तुम्ही आमचे एजंट नाही, तर बिझनेस पार्टनर असाल. स्वतःच्या शहरात, स्वतःच्या अटींवर काम करा.",
                color: "bg-blue-500",
              },
              {
                icon: <Server className="w-8 h-8 text-white" />,
                title: "झिरो टेक्निकल टेन्शन",
                desc: "ॲप डेव्हलपमेंट, सर्व्हर, अपडेट्सची जबाबदारी आमची. तुम्ही फक्त व्यवसायावर लक्ष केंद्रित करा.",
                color: "bg-indigo-500",
              },
              {
                icon: <PieChart className="w-8 h-8 text-white" />,
                title: "९०% नफा वाटा",
                desc: "इतर कंपन्या २०% देतात. आम्ही तुम्हाला ९०% देतो कारण विद्यार्थी आणि पालक तुमच्यावर विश्वास ठेवतात.",
                color: "bg-purple-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section
        id="roi"
        className="py-24 bg-slate-900 text-white relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-400 font-bold tracking-wider uppercase text-sm flex items-center gap-2">
                <IndianRupee size={16} /> हमखास कमाई
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
                गणिताने समजून घ्या <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                  तुमचा फायदा
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                सरासरी ॲप फी ₹१,००० गृहीत धरली आहे. यामध्ये तुमचा वाटा ९०%
                म्हणजे ₹९०० असेल.
              </p>

              <div className="space-y-4">
                {[
                  { count: 1, profit: "९००", label: "सुरुवात" },
                  { count: 10, profit: "९,०००", label: "चांगली सुरुवात" },
                  {
                    count: 100,
                    profit: "९०,०००",
                    label: "व्यावसायिक",
                    highlight: true,
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-5 rounded-xl border ${
                      stat.highlight
                        ? "bg-gradient-to-r from-indigo-600 to-blue-600 border-transparent shadow-lg transform scale-105"
                        : "bg-slate-800 border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          stat.highlight
                            ? "bg-white text-indigo-600"
                            : "bg-slate-700 text-slate-300"
                        }`}
                      >
                        {stat.count}
                      </div>
                      <div>
                        <p
                          className={`text-xs uppercase font-bold ${
                            stat.highlight
                              ? "text-indigo-100"
                              : "text-slate-500"
                          }`}
                        >
                          {stat.label}
                        </p>
                        <p
                          className={`font-medium ${
                            stat.highlight ? "text-white" : "text-slate-300"
                          }`}
                        >
                          विक्री (Sales)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-2xl font-bold ${
                          stat.highlight ? "text-white" : "text-green-400"
                        }`}
                      >
                        ₹{stat.profit}
                      </p>
                      <p
                        className={`text-xs ${
                          stat.highlight ? "text-indigo-100" : "text-slate-500"
                        }`}
                      >
                        नफा
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3 text-sm text-blue-200 bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
                <Lightbulb
                  className="flex-shrink-0 text-yellow-400"
                  size={20}
                />
                <p>
                  <strong>Break-Even:</strong> फक्त ५५-६० विद्यार्थी जोडले की
                  तुमची गुंतवणूक परत! त्यानंतरचा प्रत्येक रुपया हा तुमचा शुद्ध
                  नफा.
                </p>
              </div>
            </div>

            {/* Revenue Share Visual */}
            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(#4f46e5 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase z-10 shadow-sm">
                Best in Market
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-8 text-center text-slate-800">
                  नफा विभागणी (Revenue Split)
                </h3>

                <div className="relative w-64 h-64 mb-8">
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
                      strokeWidth="4"
                    />
                    {/* Foreground Circle (Your Share) */}
                    <motion.path
                      className="text-indigo-600 drop-shadow-xl"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.9 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-extrabold text-indigo-600 tracking-tight">
                      ९०%
                    </span>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider mt-1">
                      तुमचा वाटा
                    </span>
                  </div>

                  {/* Floating Label for Company */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="absolute top-0 right-0 bg-white border border-slate-100 shadow-lg rounded-lg px-3 py-2 text-xs font-bold text-slate-500 flex items-center gap-2"
                  >
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    १०% कंपनी
                  </motion.div>
                </div>

                <p className="text-center text-slate-600 text-sm max-w-xs leading-relaxed">
                  इतर कंपन्यांमध्ये तुम्हाला फक्त १०-२०% मिळतात, पण इथे{" "}
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-1 rounded">
                    संपूर्ण ९०%
                  </span>{" "}
                  तुमचे आहेत!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
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
              कोणत्याही छुपे शुल्क नाहीत. एकरकमी गुंतवणूक करा आणि वर्षभर कमवा.
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
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Check size={12} className="text-indigo-600" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, plan: "50000" }));
                  window.location.href = "#apply";
                }}
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
                  <span className="text-4xl font-bold text-white">
                    ₹१,००,०००
                  </span>
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
                  "३ महिन्यांचे एक्स्ट्रा एक्सटेन्शन",
                ].map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <Check size={12} className="text-indigo-400" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setFormData((prev) => ({ ...prev, plan: "100000" }));
                  window.location.href = "#apply";
                }}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                हा बेस्ट प्लॅन निवडा
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">
              यशस्वी कथा
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900">
              आमचे पार्टनर काय म्हणतात?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
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
                <p className="text-slate-600 mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Application Form Section */}
      <section id="apply" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-5 h-full">
              {/* Form Side Info */}
              <div className="md:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">भागीदार बना</h3>
                  <p className="text-slate-400 mb-8">
                    आम्ही निवडक लोकांशीच काम करतो. अर्ज भरल्यास आमची टीम तुमची
                    पात्रता तपासेल.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <PhoneCall className="text-indigo-400 mt-1" />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">
                          Call Us
                        </p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="text-indigo-400 mt-1" />
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-bold">
                          Secure
                        </p>
                        <p className="font-medium">कायदेशीर करारासह सुरक्षित</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex -space-x-3 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-indigo-${
                          i * 100
                        } flex items-center justify-center text-xs font-bold bg-slate-700`}
                      ></div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-400">
                    ५००+ लोकांनी विश्वास दाखवला आहे
                  </p>
                </div>
              </div>

              {/* Actual Form */}
              <div className="md:col-span-3 p-10">
                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      अभिनंदन!
                    </h3>
                    <p className="text-slate-600 mb-8">
                      तुमचा अर्ज यशस्वीरित्या स्वीकारला गेला आहे. आमची टीम २४
                      तासात तुमच्याशी संपर्क करेल.
                    </p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
                    >
                      दुसरा अर्ज भरा
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          पूर्ण नाव
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${
                            errors.name
                              ? "border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
                          } focus:ring-2 outline-none transition-all`}
                          placeholder="उदा. राहुल पाटील"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          मोबाईल नंबर
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
                          } focus:ring-2 outline-none transition-all`}
                          placeholder="98765 43210"
                          maxLength={10}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          शहर / जिल्हा
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg bg-slate-50 border ${
                            errors.city
                              ? "border-red-500 focus:ring-red-200"
                              : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
                          } focus:ring-2 outline-none transition-all`}
                          placeholder="उदा. पुणे"
                        />
                        {errors.city && (
                          <p className="text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.city}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          सध्याचा व्यवसाय
                        </label>
                        <select
                          name="profession"
                          value={formData.profession}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        >
                          <option value="शिक्षक">शिक्षक</option>
                          <option value="क्लास ओनर्स">क्लास ओनर्स</option>
                          <option value="प्राचार्य">प्राचार्य</option>
                          <option value="इतर">इतर</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-slate-700">
                        गुंतवणुकीची तयारी आहे का?
                      </label>
                      <div className="flex gap-4">
                        <label
                          className={`flex-1 flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                            formData.readyToInvest === "yes"
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500"
                              : "border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="readyToInvest"
                            value="yes"
                            checked={formData.readyToInvest === "yes"}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">
                            होय, मी तयार आहे
                          </span>
                        </label>
                        <label
                          className={`flex-1 flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all ${
                            formData.readyToInvest === "questions"
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500"
                              : "border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="readyToInvest"
                            value="questions"
                            checked={formData.readyToInvest === "questions"}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">
                            प्रश्न विचारायचे आहेत
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all transform hover:-translate-y-1 mt-4 flex items-center justify-center gap-2"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          सबमिट करत आहे...
                        </>
                      ) : (
                        <>
                          अर्ज सबमिट करा <ArrowRight size={20} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Rocket size={20} className="text-indigo-500" />
            <span className="text-lg font-bold text-slate-200">
              EdTech Partner
            </span>
          </div>
          <p className="text-sm">
            © 2025 EdTech Partner Program. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernLandingPage;

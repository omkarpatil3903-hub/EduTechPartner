import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  IndianRupee,
} from "lucide-react";

const ApplicationForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  errors,
  resetForm,
  formStatus,
  setFormStatus,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextStep = () => {
    // Basic validation before moving to next step
    if (currentStep === 1) {
      if (!formData.name || !formData.phone) return;
    }
    if (currentStep === 2) {
      if (!formData.city || !formData.district || !formData.taluka) return;
    }

    setIsTransitioning(true);
    setCurrentStep((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    { id: 1, title: "वैयक्तिक माहिती", icon: <User size={18} /> },
    { id: 2, title: "संपर्क माहिती", icon: <Briefcase size={18} /> },
    { id: 3, title: "गुंतवणूक तयारी", icon: <IndianRupee size={18} /> },
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const payload = {
      name: formData.name,
      phone: formData.phone,
      city: formData.city,
      district: formData.district,
      taluka: formData.taluka,
      profession: formData.profession,
      readyToInvest: formData.readyToInvest,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxoLG6sld6B9tRLC5Ih5axVuI4hfW8va4EMcP-lgqirHCirYldrg0ju5bOss2U2Zl6U/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      setFormStatus("success");
    } catch (error) {
      console.error("API Error:", error);
      alert("Network error");
      setFormStatus("idle");
    }
  };

  return (
    <section id="apply" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-5 h-full min-h-[600px]">
            {/* Form Side Info */}
            <div className="hidden md:flex md:col-span-2 bg-slate-900 text-white p-10 flex-col justify-between relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">भागीदार बना</h3>
                <p className="text-slate-400 mb-8">
                  फक्त ३ सोप्या स्टेप्समध्ये अर्ज भरा आणि स्वतःचा एड-टेक बिझनेस
                  सुरू करा.
                </p>

                {/* Steps Indicator */}
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                          currentStep >= step.id
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "border-slate-700 text-slate-500"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          step.icon
                        )}
                      </div>
                      <div>
                        <p
                          className={`text-sm font-bold uppercase ${
                            currentStep >= step.id
                              ? "text-white"
                              : "text-slate-500"
                          }`}
                        >
                          STEP {step.id}
                        </p>
                        <p className="text-xs text-slate-400">{step.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <div className="flex items-center gap-3 text-sm text-slate-400 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <ShieldCheck className="text-green-400 flex-shrink-0" />
                  <p>तुमचा डेटा १००% सुरक्षित आहे.</p>
                </div>
              </div>
            </div>

            {/* Actual Form */}
            <div className="md:col-span-3 flex flex-col md:p-10 md:justify-center">
              {/* Mobile Header */}
              <div className="md:hidden bg-slate-900 p-6 pb-16">
                <h3 className="text-2xl font-bold text-white mb-2">
                  भागीदार बना
                </h3>
                <p className="text-slate-400 text-sm mb-6">
                  फक्त ३ सोप्या स्टेप्समध्ये अर्ज भरा
                </p>
                {/* Mobile Steps Indicator */}
                <div className="flex items-center justify-between relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 -z-10"></div>
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-500 -z-10 transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                  ></div>
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className="flex flex-col items-center gap-2 bg-slate-900 px-2"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                          currentStep >= step.id
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "border-slate-700 text-slate-500 bg-slate-900"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <span className="text-xs font-bold">{step.id}</span>
                        )}
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase ${
                          currentStep >= step.id
                            ? "text-indigo-400"
                            : "text-slate-600"
                        }`}
                      >
                        {step.title.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-white rounded-t-3xl -mt-8 p-6 md:p-0 md:mt-0 md:rounded-none relative z-10">
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
                      onClick={() => {
                        setFormStatus("idle");
                        setCurrentStep(1);
                        resetForm();
                      }}
                      className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
                    >
                      दुसरा अर्ज भरा
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleFormSubmit}
                    className="h-full flex flex-col"
                  >
                    <div className="flex-1">
                      <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <h4 className="text-xl font-bold text-slate-800 mb-6">
                              तुमची ओळख सांगा
                            </h4>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">
                                पूर्ण नाव
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
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
                                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
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
                          </motion.div>
                        )}

                        {currentStep === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <h4 className="text-xl font-bold text-slate-800 mb-6">
                              कामाबद्दल माहिती
                            </h4>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">
                                शहर
                              </label>
                              <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
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
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">
                                  जिल्हा
                                </label>
                                <input
                                  type="text"
                                  name="district"
                                  value={formData.district}
                                  onChange={handleInputChange}
                                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                                    errors.district
                                      ? "border-red-500 focus:ring-red-200"
                                      : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
                                  } focus:ring-2 outline-none transition-all`}
                                  placeholder="उदा. पुणे"
                                />
                                {errors.district && (
                                  <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.district}
                                  </p>
                                )}
                              </div>
                              <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">
                                  तालुका
                                </label>
                                <input
                                  type="text"
                                  name="taluka"
                                  value={formData.taluka}
                                  onChange={handleInputChange}
                                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                                    errors.taluka
                                      ? "border-red-500 focus:ring-red-200"
                                      : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-200"
                                  } focus:ring-2 outline-none transition-all`}
                                  placeholder="उदा. हवेली"
                                />
                                {errors.taluka && (
                                  <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.taluka}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-slate-700">
                                सध्याचा व्यवसाय
                              </label>
                              <select
                                name="profession"
                                value={formData.profession}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                              >
                                <option value="शिक्षक">शिक्षक</option>
                                <option value="क्लास ओनर्स">क्लास ओनर्स</option>
                                <option value="प्राचार्य">प्राचार्य</option>
                                <option value="इतर">इतर</option>
                              </select>
                            </div>
                          </motion.div>
                        )}

                        {currentStep === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                          >
                            <h4 className="text-xl font-bold text-slate-800 mb-6">
                              अंतिम टप्पा
                            </h4>
                            <div className="space-y-3">
                              <label className="text-sm font-semibold text-slate-700">
                                गुंतवणुकीची तयारी आहे का?
                              </label>
                              <div className="flex flex-col gap-3">
                                <label
                                  className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
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
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                        formData.readyToInvest === "yes"
                                          ? "border-indigo-600 bg-indigo-600"
                                          : "border-slate-400"
                                      }`}
                                    >
                                      {formData.readyToInvest === "yes" && (
                                        <CheckCircle2
                                          size={12}
                                          className="text-white"
                                        />
                                      )}
                                    </div>
                                    <span className="font-medium">
                                      होय, मी तयार आहे
                                    </span>
                                  </div>
                                </label>
                                <label
                                  className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                                    formData.readyToInvest === "questions"
                                      ? "border-indigo-500 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500"
                                      : "border-slate-200 hover:bg-slate-50"
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name="readyToInvest"
                                    value="questions"
                                    checked={
                                      formData.readyToInvest === "questions"
                                    }
                                    onChange={handleInputChange}
                                    className="sr-only"
                                  />
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                        formData.readyToInvest === "questions"
                                          ? "border-indigo-600 bg-indigo-600"
                                          : "border-slate-400"
                                      }`}
                                    >
                                      {formData.readyToInvest ===
                                        "questions" && (
                                        <CheckCircle2
                                          size={12}
                                          className="text-white"
                                        />
                                      )}
                                    </div>
                                    <span className="font-medium">
                                      मला काही प्रश्न विचारायचे आहेत
                                    </span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
                        >
                          <ArrowLeft size={20} /> मागे
                        </button>
                      )}

                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 ml-auto"
                        >
                          पुढील स्टेप <ArrowRight size={20} />
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={
                            formStatus === "submitting" || isTransitioning
                          }
                          className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all flex items-center justify-center gap-2 ml-auto"
                        >
                          {formStatus === "submitting" ? (
                            <>
                              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                              सबमिट करत आहे...
                            </>
                          ) : (
                            <>
                              अर्ज सबमिट करा <CheckCircle2 size={20} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;

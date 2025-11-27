import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.city ||
      !formData.district ||
      !formData.taluka
    ) {
      alert("कृपया सर्व माहिती भरा.");
      return;
    }

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
          <div className="grid md:grid-cols-5 h-full">
            {/* Form Side Info */}
            <div className="hidden md:flex md:col-span-2 bg-slate-900 text-white p-10 flex-col justify-between relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">भागीदार बना</h3>
                <p className="text-slate-400 mb-8">
                  फक्त काही मिनिटांत अर्ज भरा आणि स्वतःचा एड-टेक बिझनेस सुरू करा.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white">वैयक्तिक माहिती</p>
                      <p className="text-xs text-slate-400">तुमची ओळख</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white">कामाची माहिती</p>
                      <p className="text-xs text-slate-400">तुमचा अनुभव</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                      <IndianRupee size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white">गुंतवणूक</p>
                      <p className="text-xs text-slate-400">तुमची तयारी</p>
                    </div>
                  </div>
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
            <div className="md:col-span-3 flex flex-col md:p-10">
              {/* Mobile Header */}
              <div className="md:hidden bg-slate-900 p-6 pb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  भागीदार बना
                </h3>
                <p className="text-slate-400 text-sm">
                  स्वतःचा एड-टेक बिझनेस सुरू करण्यासाठी अर्ज करा
                </p>
              </div>

              <div className="flex-1 bg-white rounded-t-3xl -mt-6 p-6 md:p-0 md:mt-0 md:rounded-none relative z-10">
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
                        resetForm();
                      }}
                      className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors"
                    >
                      दुसरा अर्ज भरा
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    {/* Section 1: Personal Info */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <User size={18} className="text-indigo-600" /> वैयक्तिक
                        माहिती
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            पूर्ण नाव <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.name
                              ? "border-red-500"
                              : "border-slate-200 focus:border-indigo-500"
                              } outline-none transition-all`}
                            placeholder="उदा. राहुल पाटील"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            मोबाईल नंबर <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            maxLength={10}
                            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.phone
                              ? "border-red-500"
                              : "border-slate-200 focus:border-indigo-500"
                              } outline-none transition-all`}
                            placeholder="98765 43210"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Work Info */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <Briefcase size={18} className="text-indigo-600" />{" "}
                        कामाची माहिती
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            शहर <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-all"
                            placeholder="उदा. पुणे"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            जिल्हा <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-all"
                            placeholder="उदा. पुणे"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            तालुका <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="taluka"
                            value={formData.taluka}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-all"
                            placeholder="उदा. हवेली"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">
                            सध्याचा व्यवसाय
                          </label>
                          <select
                            name="profession"
                            value={formData.profession}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 outline-none transition-all"
                          >
                            <option value="शिक्षक">शिक्षक</option>
                            <option value="क्लास ओनर्स">क्लास ओनर्स</option>
                            <option value="प्राचार्य">प्राचार्य</option>
                            <option value="इतर">इतर</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Investment */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2">
                        <IndianRupee size={18} className="text-indigo-600" />{" "}
                        गुंतवणूक
                      </h4>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          गुंतवणुकीची तयारी आहे का?
                        </label>
                        <div className="grid md:grid-cols-2 gap-3">
                          <label
                            className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${formData.readyToInvest === "yes"
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700"
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
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.readyToInvest === "yes"
                                  ? "border-indigo-600 bg-indigo-600"
                                  : "border-slate-400"
                                  }`}
                              >
                                {formData.readyToInvest === "yes" && (
                                  <CheckCircle2
                                    size={10}
                                    className="text-white"
                                  />
                                )}
                              </div>
                              <span className="text-sm font-medium">
                                होय, मी तयार आहे
                              </span>
                            </div>
                          </label>
                          <label
                            className={`flex items-center p-3 border rounded-xl cursor-pointer transition-all ${formData.readyToInvest === "questions"
                              ? "border-indigo-500 bg-indigo-50 text-indigo-700"
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
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.readyToInvest === "questions"
                                  ? "border-indigo-600 bg-indigo-600"
                                  : "border-slate-400"
                                  }`}
                              >
                                {formData.readyToInvest === "questions" && (
                                  <CheckCircle2
                                    size={10}
                                    className="text-white"
                                  />
                                )}
                              </div>
                              <span className="text-sm font-medium">
                                काही प्रश्न आहेत
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
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

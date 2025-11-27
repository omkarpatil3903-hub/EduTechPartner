import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyPartner from "./components/WhyPartner";
import ROI from "./components/ROI";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";

const ModernLandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    taluka: "",
    profession: "शिक्षक",
    plan: "100000", // Default to higher plan as per marketing psychology
    readyToInvest: "yes",
  });
  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      city: "",
      district: "",
      taluka: "",
      profession: "शिक्षक",
      plan: "100000",
      readyToInvest: "yes",
    });
  };

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "नाव आवश्यक आहे";
    if (!formData.phone.trim()) {
      newErrors.phone = "मोबाईल नंबर आवश्यक आहे";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "कृपया वैध १० अंकी मोबाईल नंबर टाका";
    }
    if (!formData.city.trim()) newErrors.city = "शहर आवश्यक आहे";
    if (!formData.district.trim()) newErrors.district = "जिल्हा आवश्यक आहे";
    if (!formData.taluka.trim()) newErrors.taluka = "तालुका आवश्यक आहे";

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
      resetForm();
    }, 1500);
  };

  const handlePlanSelect = (planValue) => {
    setFormData((prev) => ({ ...prev, plan: planValue }));
    window.location.href = "#apply";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyPartner />
      <ROI />
      <Plans onSelectPlan={handlePlanSelect} />
      <Testimonials />
      <FAQ />
      <ApplicationForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errors={errors}
        formStatus={formStatus}
        setFormStatus={setFormStatus}
        resetForm={resetForm}
      />
      <Footer />
    </div>
  );
};

export default ModernLandingPage;

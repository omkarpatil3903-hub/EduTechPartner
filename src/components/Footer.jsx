import React from "react";
import logo from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Expert Guruji" className="h-8 w-auto" />
          <span className="text-lg font-bold text-slate-200">
            Expert Guruji Partner
          </span>
        </div>
        <p className="text-sm">
          © 2025 Expert Guruji Partner Program. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

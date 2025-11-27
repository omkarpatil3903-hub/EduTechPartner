import React from "react";
import { Rocket } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

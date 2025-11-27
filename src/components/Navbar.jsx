import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "top-4 mx-auto max-w-5xl bg-slate-900/85 backdrop-blur-md shadow-xl shadow-slate-900/30 rounded-full py-3 px-6 border border-slate-800/60"
        : "top-0 w-full bg-transparent py-6"
        }`}
    >
      <div
        className={`flex justify-between items-center ${isScrolled ? "" : "container mx-auto px-4"
          }`}
      >
        <div className="flex items-center gap-3">
          <a href="#top" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="Expert Guruji"
              className={`h-10 md:h-10 w-auto ${isScrolled ? "drop-shadow" : "drop-shadow"
                }`}
            />
            <span
              className={`text-2xl md:text-2xl font-bold tracking-wide leading-none ${isScrolled ? "text-white" : "text-white"
                }`}
            >
              Expert Guruji Partner
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#why"
            className={`text-sm font-medium transition-colors ${isScrolled
              ? "text-slate-200 hover:text-white"
              : "text-slate-200 hover:text-indigo-400"
              }`}
          >
            फायदे
          </a>
          <a
            href="#roi"
            className={`text-sm font-medium transition-colors ${isScrolled
              ? "text-slate-200 hover:text-white"
              : "text-slate-200 hover:text-indigo-400"
              }`}
          >
            नफा (ROI)
          </a>
          <a
            href="#plans"
            className={`text-sm font-medium transition-colors ${isScrolled
              ? "text-slate-200 hover:text-white"
              : "text-slate-200 hover:text-indigo-400"
              }`}
          >
            प्लॅन्स
          </a>

          <a
            href="#apply"
            className={`px-6 py-2.5 text-sm font-semibold rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 ${isScrolled
              ? "bg-indigo-500 hover:bg-indigo-400 text-white shadow-indigo-900/30"
              : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/30"
              }`}
          >
            भागीदार बना
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1 ${isScrolled ? "text-slate-200" : "text-slate-500"
            }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu
              size={28}
              className={isScrolled ? "text-slate-200" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-2xl shadow-2xl border border-slate-100 md:hidden mx-4"
          >
            <div className="flex flex-col space-y-2">
              <a
                href="#why"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-3 px-4 hover:bg-slate-50 rounded-xl transition-colors"
              >
                फायदे
              </a>
              <a
                href="#roi"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-3 px-4 hover:bg-slate-50 rounded-xl transition-colors"
              >
                नफा (ROI)
              </a>
              <a
                href="#plans"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-600 font-medium py-3 px-4 hover:bg-slate-50 rounded-xl transition-colors"
              >
                प्लॅन्स
              </a>

              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 mt-2"
              >
                भागीदार बना
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

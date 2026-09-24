import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-[#24271f] bg-[#050605]">
      <div className="mx-auto w-[calc(100%-32px)] max-w-[1180px] flex min-h-28 flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <img src={logo.src} alt="FitLog logo" className="h-7 w-7" />
          <div className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-lg">FITLOG</div>
        </div>
        <p className="text-xs text-[#777c70]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;

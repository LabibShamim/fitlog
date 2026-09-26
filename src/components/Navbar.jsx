"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "../context/FitLogContext";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#1d201b] bg-[#090a08]">

      <nav className="mx-auto w-[calc(100%-32px)] max-w-[1180px] flex h-[86px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            className="h-8 w-8 object-contain"
          />

          <div className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[20px] font-bold tracking-wide text-[#d9ddd2]">
            FITLOG
          </div>
        </Link>

        <div className="hidden items-center gap-1 rounded-[12px] bg-[#0d0f0c] p-1 md:flex">
          <Link
            href="/#library"
            className={`rounded-[10px] px-4 py-2 text-sm font-bold transition ${
              pathname === "/"
                ? "bg-[#171a13] text-[#ccff00]"
                : "text-[#92978b] hover:text-[#ccff00]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-[10px] px-4 py-2 text-sm font-bold transition ${
              pathname.startsWith("/my-plan")
                ? "bg-[#171a13] text-[#ccff00]"
                : "text-[#92978b] hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>

        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold text-[#c7cbc0]"
          >
            Plan
            <div className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-xs font-black text-black">
              {plan.length}
            </div>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold text-[#c7cbc0]"
          >
            Saved
            <div className="flex h-7 min-w-7 items-center justify-center rounded-full border border-[#686d62] px-2 text-xs font-bold text-[#d7dbd1]">
              {saved.length}
            </div>
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;
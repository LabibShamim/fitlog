import React from "react";
import Link from "next/link";

const NotFoundPage = () => (
  <div className="mx-auto w-[calc(100%-32px)] flex min-h-[65vh] flex-col items-center justify-center text-center">
    <p className="text-xs font-black tracking-[.3em] text-[#ccff00]">404 / PAGE NOT FOUND</p>
    <h1 className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] mt-3 text-7xl">WRONG TURN.</h1>
    <p className="mt-4 max-w-md text-[#858a7e]">That route does not exist. Head back to the workout library.</p>
    <Link href="/" className="mt-7 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black text-black">GO TO WORKOUTS</Link>
  </div>
);

export default NotFoundPage;

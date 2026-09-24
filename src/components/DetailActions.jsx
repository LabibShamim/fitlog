"use client";

import React from "react";
import { useFitLog } from "../context/FitLogContext";

const DetailActions = ({ workout }) => {
  const { plan, saved, addToPlan, saveForLater } = useFitLog();
  const inPlan = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      <button
        onClick={() => addToPlan(workout)}
        className={`rounded-[10px] px-5 py-3 text-sm font-black text-black ${
          inPlan ? "cursor-pointer bg-[#ccff00]/70" : "bg-[#ccff00]"
        }`}
      >
        ✓ {inPlan ? "ALREADY ADDED" : "ADD TO TODAY'S PLAN"}
      </button>
      <button onClick={() => saveForLater(workout)} disabled={isSaved} className="rounded-[10px] border border-[#3a3e35] px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40">
        ☆ {isSaved ? "SAVED" : "SAVE FOR LATER"}
      </button>
    </div>
  );
};
export default DetailActions;

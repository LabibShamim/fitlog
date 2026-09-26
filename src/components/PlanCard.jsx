"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useFitLog } from "../context/FitLogContext";

const PlanCard = ({ workout, savedMode = false }) => {
  const { removeFromPlan, markDone, removeSaved } = useFitLog();
  const remove = savedMode ? removeSaved : removeFromPlan;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#282c24] bg-[#11130f] p-4 sm:flex-row sm:items-center">
      <Image src={workout.image} alt={workout.name} width={128} height={96} className="h-24 w-full rounded-xl object-cover sm:h-24 sm:w-32" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => <div key={group} className="text-[10px] font-black uppercase text-[#ccff00]">{group}</div>)}
        </div>
        <h3 className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] mt-1 text-xl uppercase">{workout.name}</h3>
        <p className="text-sm text-[#858a7e]">{workout.equipment}</p>
        <div className="mt-2 flex flex-wrap gap-4 text-xs text-[#a2a69c]">
          <div>⏱ {workout.duration} min</div><div>🔥 {workout.caloriesBurned} kcal</div><div>★ {workout.rating}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:justify-end">
        <Link href={`/workout/${workout.id}`} className="rounded-full border border-[#3a3e35] px-3 py-2 text-xs font-black">VIEW DETAILS</Link>
        {!savedMode && <button onClick={() => markDone(workout.id)} disabled={workout.done} className="rounded-full bg-white px-3 py-2 text-xs font-black text-black disabled:opacity-40">{workout.done ? "DONE" : "✓ MARK AS DONE"}</button>}
        <button onClick={() => remove(workout.id)} aria-label={`Remove ${workout.name}`} className="rounded-full border border-red-500/40 px-3 py-2 text-xs font-black text-red-300">×</button>
      </div>
    </article>
  );
};

export default PlanCard;

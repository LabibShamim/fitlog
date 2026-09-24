"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import PlanCard from "../../components/PlanCard";
import { useFitLog } from "../../context/FitLogContext";

const MyPlanPage = () => {
  const { plan, saved } = useFitLog();
  const [tab, setTab] = useState("plan");
  const [sort, setSort] = useState("duration");

  const items = tab === "plan" ? plan : saved;

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      if (sort === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return a.duration - b.duration;
    });
  }, [items, sort]);

  const metrics = useMemo(
    () => ({
      exercises: plan.length,
      minutes: plan.reduce((sum, item) => sum + item.duration, 0),
      calories: plan.reduce((sum, item) => sum + item.caloriesBurned, 0),
    }),
    [plan]
  );

  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1180px] py-10 lg:py-16">
      <p className="text-xs font-black tracking-[.25em] text-[#ccff00]">
        02 / THE LOG
      </p>

      <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h1 className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-6xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-[#858a7e]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
      </div>

      <div className="mt-9 grid gap-3 sm:grid-cols-3">
        {[
          ["EXERCISES", metrics.exercises],
          ["MINUTES", metrics.minutes],
          ["CALORIES", metrics.calories],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-[#282c24] bg-[#11130f] p-5"
          >
            <p className="text-xs font-black text-[#72786b]">{label}</p>

            <p className="mt-2 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-4xl">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-9 flex items-center justify-between gap-4 border-b border-[#282c24] pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setTab("plan")}
            className={`rounded-[10px] px-4 py-2 text-sm font-black ${
              tab === "plan"
                ? "bg-[#222320c9] text-white"
                : "text-[#858a7e]"
            }`}
          >
            TODAY&apos;S PLAN
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`rounded-[10px] px-4 py-2 text-sm font-black ${
              tab === "saved"
                ? "bg-[#222320c9] text-white"
                : "text-[#858a7e]"
            }`}
          >
            SAVED
          </button>
        </div>

        <label className="flex items-center gap-2 text-xs text-[#858a7e]">
          <span>Sort By</span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-[120px] rounded-xl border border-[#292d24] bg-[#11130f] px-3 py-2 text-xs text-white outline-none focus:border-[#ccff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      <div className="mt-6 space-y-3">
        {items.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#35392f] px-6 py-20 text-center">
            <p className="text-3xl font-black">NOTHING HERE YET</p>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#858a7e]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-6 inline-flex rounded-full bg-[#ccff00] px-5 py-3 text-sm font-black text-black"
            >
              GO TO WORKOUTS
            </Link>
          </div>
        )}

        {sortedItems.map((workout) => (
          <PlanCard
            key={workout.id}
            workout={workout}
            savedMode={tab === "saved"}
          />
        ))}
      </div>
    </section>
  );
};

export default MyPlanPage;
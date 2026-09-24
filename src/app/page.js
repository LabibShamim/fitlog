"use client";

import { useEffect, useState } from "react";
import WorkoutList from "../components/WorkoutList";
import Loading from "../components/Loading";
import { getWorkouts } from "../lib/api";
import banner from "../assets/banner.png";
import Image from "next/image";

const HomePage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getWorkouts()
      .then((data) => {
        if (active) setWorkouts(data);
      })
      .catch(() => {
        if (active) {
          setError("Could not load the workout library. Please refresh and try again.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div>
      <section className="mx-auto mt-[110px] grid w-[calc(100%-32px)] max-w-[1180px] overflow-hidden rounded-[14px] border border-[#242832] bg-[#15171d] px-8 py-10 sm:px-10 lg:min-h-[337px] lg:grid-cols-[1fr_420px] lg:items-center lg:px-11 lg:py-8">
        <div className="relative z-10 max-w-[620px]">
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.18em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-[610px] font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-[44px] font-black uppercase leading-[0.94] tracking-[0.01em] text-[#f5f5f5] sm:text-[54px] lg:text-[50px] xl:text-[56px]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-[510px] text-[14px] leading-6 text-[#969ba5] sm:text-[15px]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-6 inline-flex items-center justify-center rounded-[5px] bg-[#ccff00] px-5 py-3 text-[11px] font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff33]"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="relative flex h-[260px] items-center justify-center lg:h-full">
          <Image
            src={banner}
            alt="Workout illustration"
            width={330}
            height={310}
            className="h-full max-h-[285px] w-full max-w-[330px] object-contain object-center lg:max-h-[310px]"
           />
        </div>
      </section>

      <section
        id="library"
        className="mx-auto w-[calc(100%-32px)] max-w-[1180px] scroll-mt-8 py-12 lg:py-14"
      >
        <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mt-2 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-4xl uppercase leading-none tracking-[0.02em] text-[#f2f3ec] sm:text-6xl">
              THE LIBRARY
            </h2>
            <p className="mt-2 text-[#858a7e]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
        </div>

        {loading && <Loading />}
        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 text-sm text-red-200">
            {error}
          </div>
        )}
        {!loading && !error && <WorkoutList workouts={workouts} />}
      </section>
    </div>
  );
};

export default HomePage;

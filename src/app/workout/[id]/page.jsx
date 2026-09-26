import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkout } from "../../../lib/api";
import DetailActions from "../../../components/DetailActions";

const WorkoutDetailsPage = async ({ params }) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1180px] py-10 lg:py-16">
      <Link
        href="/#library"
        className="text-xs font-black text-[#8d9285] hover:text-[#ccff00]"
      >
        ← BACK TO LIBRARY
      </Link>

      <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-[#282c24] bg-[#11130f]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="py-2 lg:py-6">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <div
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-black"
              >
                {group}
              </div>
            ))}
          </div>

          <h1 className="mt-5 font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-5xl leading-[.92] sm:text-6xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-[#92978b]">
            {workout.description}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#282c24]">
            {[
              ["EQUIPMENT", workout.equipment],
              ["DIFFICULTY", workout.difficulty],
              ["SETS", workout.sets],
              ["REPS", workout.reps],
              ["DURATION", `${workout.duration} min`],
              ["CALORIES", `${workout.caloriesBurned} kcal`],
              ["RATING", workout.rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-2 border-b border-[#282c24] px-4 py-3 last:border-0"
              >
                <div className="text-xs font-black text-[#72786b]">
                  {label}
                </div>

                <div className="text-right text-sm font-bold">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <h2 className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-2xl">
              INSTRUCTIONS
            </h2>

            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 text-sm leading-6 text-[#a1a69a]"
                >
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1b1e18] text-xs font-black text-[#ccff00]">
                    {index+1}
                  </div>

                  <div>{step}</div>
                </li>
              ))}
            </ol>
          </div>

          <DetailActions workout={workout} />
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;

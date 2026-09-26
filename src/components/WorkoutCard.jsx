import React from "react";
import Link from "next/link";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#282c24] bg-[#11130f] transition hover:-translate-y-1 hover:border-[#ccff00]/60"
    >
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#171a14]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => (
            <div
              key={group}
              className="rounded-full bg-[#090a08]/85 px-2.5 py-1 text-[10px] font-black uppercase text-[#ccff00]"
            >
              {group}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-[Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] text-xl uppercase leading-none">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-[#92978b]">
          {workout.equipment}
        </p>

        <div className="mt-5 grid grid-cols-3 border-t border-[#292d24] pt-3 text-xs text-[#a2a69c]">
          <div>⏱ {workout.duration} min</div>
          <div>🔥 {workout.caloriesBurned} kcal</div>
          <div>★ {workout.rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
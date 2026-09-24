"use client";

import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
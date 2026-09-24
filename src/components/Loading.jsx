import React from "react";

const Loading = ({text = "Loading workouts…"}) => {
  return (
    <div className="flex min-h-64 items-center justify-center gap-3 text-sm font-bold text-[#8f9488]">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#34382f] border-t-[#ccff00]" />
      {text}
    </div>
  );
};

export default Loading;

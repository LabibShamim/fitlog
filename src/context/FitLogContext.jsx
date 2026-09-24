"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

const FitLogContext = createContext(null);

export const FitLogProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState(null);

  const notify = (message) => {
    setToast({ id: Date.now(), message });
    setTimeout(() => setToast(null), 2600);
  };

  const addToPlan = (workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      notify("Already added");
      return false;
    }
    setPlan((items) => [...items, { ...workout, done: false }]);
    notify("Added to today's plan");
    return true;
  };

  const removeFromPlan = (id) => {
    setPlan((items) => items.filter((item) => item.id !== id));
    notify("Removed from today's plan");
  };

  const markDone = (id) => {
    setPlan((items) => items.map((item) => item.id === id ? { ...item, done: true } : item));
    notify("Workout marked as done");
  };

  const saveForLater = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      notify("Already saved");
      return false;
    }
    setSaved((items) => [...items, workout]);
    notify("Saved for later");
    return true;
  };

  const removeSaved = (id) => {
    setSaved((items) => items.filter((item) => item.id !== id));
    notify("Removed from saved");
  };

  const value = useMemo(() => ({
    plan,
    saved,
    addToPlan,
    removeFromPlan,
    markDone,
    saveForLater,
    removeSaved
  }), [plan, saved]);

  return (
    <FitLogContext.Provider value={value}>
      {children}
      {toast && (
        <div className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg border border-[#2b3037] bg-[#171a14] px-3 py-2.5 text-sm font-medium text-white shadow-2xl sm:right-5 sm:top-5">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#55d96b] text-[12px] font-black text-white">✓</div>
          <div>{toast.message}</div>
        </div>
      )}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => useContext(FitLogContext);

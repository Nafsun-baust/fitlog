
"use client";

import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import type { Workout } from "../types";

interface PlanWorkout extends Workout {
  isDone: boolean;
}

interface PlanContextType {
  plan: PlanWorkout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<PlanWorkout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  function addToPlan(workout: Workout) {
    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Plan is full");
      return;
    }

    setPlan([...plan, { ...workout, isDone: false }]);
    toast.success("Added to today's plan");
  }

  function addToSaved(workout: Workout) {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Saved for later");
  }

  function removeFromPlan(id: number) {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Removed from plan");
  }

  function removeFromSaved(id: number) {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  }

  function markAsDone(id: number) {
    setPlan(
      plan.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
    toast.success("Workout completed");
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("PlanProvider is missing");
  }

  return context;
}

const API_URL = "/api/workouts";

export const getWorkouts = async () => {
  const response = await fetch(API_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Failed to load workouts");
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid workout data");
  }

  return data;
};

export const getWorkout = async (id) => {
  const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
    cache: "no-store",
  });

  if (!response.ok) return null;

  return response.json();
};

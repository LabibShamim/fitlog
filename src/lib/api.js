export const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async () => {
  const response = await fetch(API_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to load workouts");
  return response.json();
};

export const getWorkout = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, { cache: "no-store" });
  if (!response.ok) return null;
  return response.json();
};

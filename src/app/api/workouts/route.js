import { NextResponse } from "next/server";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function GET() {
  try {
    const response = await fetch(API_URL, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to load workouts" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Workout API error:", error);
    return NextResponse.json(
      { error: "Workout API is unavailable" },
      { status: 503 }
    );
  }
}

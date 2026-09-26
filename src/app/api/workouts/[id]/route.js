import { NextResponse } from "next/server";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Workout not found" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Workout detail API error:", error);
    return NextResponse.json(
      { error: "Workout API is unavailable" },
      { status: 503 }
    );
  }
}

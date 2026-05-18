import { NextResponse } from "next/server";

// Import translations directly
import enTranslations from "@/app/data/translations/en.json";

export async function GET() {
  try {
    return NextResponse.json(enTranslations);
  } catch (error) {
    console.error("Error reading English translations:", error);
    return NextResponse.json({}, { status: 500 });
  }
}

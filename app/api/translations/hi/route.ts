import { NextResponse } from "next/server";

// Import translations directly
import hiTranslations from "@/app/data/translations/hi.json";

export async function GET() {
  try {
    return NextResponse.json(hiTranslations);
  } catch (error) {
    console.error("Error reading Hindi translations:", error);
    return NextResponse.json({}, { status: 500 });
  }
}


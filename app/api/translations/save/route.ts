import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

interface SaveTranslationRequest {
  text: string;
  translation: string;
  language: "en" | "hi";
}

export async function POST(request: NextRequest) {
  try {
    const body: SaveTranslationRequest = await request.json();
    const { text, translation, language } = body;

    if (!text || !translation || !language) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Read current translations
    const filePath = path.join(
      process.cwd(),
      `app/data/translations/${language}.json`
    );
    
    let translations: Record<string, any> = {};
    
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      translations = JSON.parse(fileData);
    } catch (error) {
      // File doesn't exist or is invalid, start fresh
      translations = {};
    }

    // Add new translation at root level
    translations[text] = translation;

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(translations, null, 2));

    return NextResponse.json({
      success: true,
      message: "Translation saved successfully",
    });
  } catch (error) {
    console.error("Error saving translation:", error);
    return NextResponse.json(
      { error: "Failed to save translation" },
      { status: 500 }
    );
  }
}

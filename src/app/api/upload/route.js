import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");
    const updateFileName = file?.name.trim().toLowerCase().replace(/\s+/g, "-");

    if (
      file?.type === "image/jpeg" ||
      file?.type === "image/jpg" ||
      file?.type === "image/png"
    ) {
      if (!file) {
        return NextResponse.json(
          {
            message: "No image found",
            status: "bad",
          },
          { status: 401 }
        );
      }

      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Create the correct path to save the file
      const filePath = "./public/profile/" + updateFileName;

      // Ensure the directory exists (create if not)
      await writeFile(filePath, buffer);

      return NextResponse.json(
        {
          message: "File uploaded successfully",
          status: "ok",
          fileName: updateFileName,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Invalid File Type",
          status: "bad",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({
      message: "Failed to upload file",
      status: "error",
    });
  }
}

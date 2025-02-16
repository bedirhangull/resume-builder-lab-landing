import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_KEY;

if (!AUDIENCE_ID) {
  console.error("RESEND_AUDIENCE_KEY is not defined in environment variables");
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!AUDIENCE_ID) {
      return NextResponse.json(
        { error: "Audience ID is not configured" },
        { status: 500 }
      );
    }

    // Split email to get first part as firstName
    const [firstName] = email.split("@");

    // Create contact with Resend
    const result = await resend.contacts.create({
      email,
      firstName,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    console.log("Resend API response:", result);

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      {
        error: "Failed to subscribe",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

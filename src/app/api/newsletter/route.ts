import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Add contact to Resend audience
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID not configured");
      return NextResponse.json(
        { error: "Newsletter signup is not configured" },
        { status: 500 }
      );
    }

    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);

    // Handle duplicate email error from Resend
    if (error instanceof Error && error.message.includes("already exists")) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  if (!validateString(senderEmail, 500))
    return { error: "Invalid sender email" };
  if (!validateString(message, 5000)) return { error: "Invalid message" };
  if (!validateString(firstName, 50)) return { error: "Invalid first name" };
  if (!validateString(lastName, 50)) return { error: "Invalid last name" };

  try {
    const { data, error } = await resend.emails.send({
      from: `Contact Porfolio <noreply@email.azeddine.xyz>`,
      to: [senderEmail as string],
      subject: "request for contact",
      react: React.createElement(ContactFormEmail, {
        firstName: firstName as string,
        lastName: lastName as string,
        senderEmail: senderEmail as string,
        message: message as string,
      }),
    });
    console.error("resend-error:", error);
    return {
      error: error ? getErrorMessage(error) : undefined,
      data,
    }
  } catch (error) {
    console.error("resend-exception:", error);
    return {
      error: getErrorMessage(error),
    };
  }
}

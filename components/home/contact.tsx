"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "../ui/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact" });

  const sendEmailHandler = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);
    console.log("data", data);
    console.log("error", error);
    if (error) {
      toast.error(error);
      return;
    } else {
      toast.success("Email sent successfully!");
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%, 38rem)] mb-20 scroll-mt-28 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          href="mailto:azeddine.hmd@gmail.com"
          className="underline underline-offset-1"
        >
          azeddine.hmd@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col gap-2 dark:text-black"
        action={sendEmailHandler}
      >
        {" "}
        <input
          name="senderEmail"
          type="email"
          className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          placeholder="Your email"
          required
          maxLength={250}
        />
        <div className="mt-3 flex w-full gap-4">
          <input
            name="firstName"
            type="text"
            className="borderBlack h-14 w-full rounded-lg px-4 dark:bg-white dark:bg-opacity-80 dark:outline-none  dark:focus:bg-opacity-100"
            placeholder="First name"
            required
            maxLength={50}
          />
          <input
            name="lastName"
            type="text"
            className="borderBlack h-14 w-full rounded-lg px-4 dark:bg-white dark:bg-opacity-80 dark:outline-none  dark:focus:bg-opacity-100"
            placeholder="Last name"
            required
            maxLength={50}
          />
        </div>
        <textarea
          name="message"
          className="borderBlack my-3 h-52 rounded-lg p-4 dark:bg-white dark:bg-opacity-80 dark:outline-none  dark:focus:bg-opacity-100"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

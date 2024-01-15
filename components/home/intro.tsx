"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.5});
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-72 text-center sm:mb-0"
    >
      <div>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/static/me.jpeg"
              alt="Azeddine Hamdaoui"
              width={192}
              height={192}
              quality="95"
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.h1
            className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {`Hello `}
            <span className="font-bold">{`I'm Azeddine. `}</span>
            {`I'm a `}
            <span className="font-bold">{`full-stack developer `}</span>
            {`I have experience of range of projects on different technologies on different level. Now, I enjoy building `}
            <span className="italic">{`sites and apps `}</span>
            {`. My current focus is on `}
            <a className="underline">{`React (Next.js)`}</a>.
          </motion.h1>

          <motion.div
            className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>

            <a
              className="group flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
              href="/static/azeddine-cv.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
            </a>

            <a
              className="flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-4 text-gray-700 outline-none transition-all hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
              href="https://linkedin.com/in/azeddine-hamdaoui-5a36b7186"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-4 text-gray-700 outline-none transition-all hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
              href="https://github.com/azeddine-hmd"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

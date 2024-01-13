"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About" });

  return (
    <motion.section
      className="max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {`After completing `}
        <span className="font-semibold">{`1337 school cursus. `}</span>
        {`I decided to continue pursue real world experience in programming. Eventually, I secured an intership at UM6P as a `}
        <span className="font-semibold">{`full stack developer using django and nextjs. `}</span>
        <span className="italic">{`My favourite part of programming `}</span>
        {` is the problem-solving aspect. I `}
        <span className="underline">{`love `}</span>
        {`the feeling of finally figuring out a solution to a problem. I am currently looking for a full-time position as a software developer.`}
      </p>
      <p>
        <span className="italic">{`When `}</span>
        {`I'm not coding. I enjoy playing video games, watching movies, and playing with my cat. I also enjoy `}
        <span className="font-semibold">{`learning new things. `}</span>
        {`I am currently learning about history and economics.`}
      </p>
    </motion.section>
  );
}

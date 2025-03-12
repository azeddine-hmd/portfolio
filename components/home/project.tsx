"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import clsx from "clsx";
import { Eye } from "lucide-react";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projects)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative flex md:block flex-col justify-center items-center pb-2 md:pb-0 max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition even:pl-8 hover:bg-gray-200  px-2 md:group-even:pl-8 sm:h-[20rem] sm:pr-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div
          className={clsx(
            "flex h-full flex-col justify-center items-center px-5 pb-7 pt-4 sm:group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:justify-start sm:items-stretch",
          )}
        >
          <h3 className="text-2xl font-semibold mb-2 md:mb-0">{title}</h3>
          <Image
            className="group-even:-right-[initial] h-1/2 md:h-fit w-[75%] md:absolute -right-40 top-8 md:w-[28.25rem] rounded-t-lg object-cover shadow-2xl md:transition md:group-even:-left-40 md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2 md:group-hover:scale-[1.04] md:group-even:group-hover:translate-x-3 md:group-even:group-hover:translate-y-3 md:group-even:group-hover:rotate-2"
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
          />
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap justify-center items-center sm:justify-start sm:items-stretch gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex absolute right-4 top-4  h-8 w-8 bg-black/70 rounded-full justify-center items-center hover:bg-white/10">
          <BsGithub color="white" size={18} />
        </a>
        {demo &&
          <a href={demo} target="_blank" rel="noopener noreferrer" className="absolute right-4 top-14  h-8 w-8 bg-black/70 rounded-full justify-center items-center hover:bg-white/10 flex">
            <Eye color="white" size={18} />
          </a>
        }
      </section>
    </motion.div>
  );
}

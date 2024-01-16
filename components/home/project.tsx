"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/lib/data";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import clsx from "clsx";

type ProjectProps = (typeof projects)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { isSm } = useBreakpoint("sm");

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition even:pl-8 hover:bg-gray-200  group-even:pl-8 sm:h-[20rem] sm:pr-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
        <div
          className={clsx(
            "flex h-full flex-col justify-center items-center px-5 pb-7 pt-4 sm:group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:justify-start sm:items-stretch",
          )}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          {!isSm && (
            <Image
              className={clsx("my-3 h-[14rem] w-[24rem] sm:h-fit sm:w-[28.25rem] rounded-t-lg shadow-2xl transition", {
                "object-top-30": title === "Chichat" || title === "Minishell",
              })}
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
            />
          )}

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

        {isSm && (
          <Image
            className="group-even:-right-[initial] absolute -right-40 top-8 w-[28.25rem] rounded-t-lg object-center shadow-2xl transition group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
          />
        )}
      </section>
    </motion.div>
  );
}

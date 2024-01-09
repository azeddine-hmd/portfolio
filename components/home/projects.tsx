"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projects)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 sm:h-[20rem] sm:pr-8">
      <div className="flex h-full flex-col px-5 py-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="sm:auto mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        className="absolute -right-40 top-8 w-[28.25rem] rounded-t-lg object-center shadow-2xl"
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
      />
    </section>
  );
}

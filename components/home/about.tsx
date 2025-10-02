"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView({ sectionName: "About" });

	return (
		<motion.section
			className="max-w-[45rem] scroll-mt-28 mb-[8rem] text-center leading-8 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
			ref={ref}
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				<p className="mb-3">
					{`Hi there, my name is Azeddine Hamdaoui. I am a graduate of `}
					<span className="font-semibold">{`1337 School, part of the 42 network, `}</span>
					{`where I learned to build projects from scratch, including mini shell prompts, standard C libraries, and more, gaining a strong foundation in modern software development.`}
				</p>

				<p className="mb-3">
					{`Most of my work was in small team projects, which helped me develop collaboration and problem-solving skills. Currently, I am a junior software engineer seeking an internship or entry-level position.`}
				</p>

				<p>
					{`I'm passionate about building web applications and enjoy diversifying and deepening my knowledge of technologies, ranging from database design to frontend development.`}
				</p>
			</p>
		</motion.section>
	);
}

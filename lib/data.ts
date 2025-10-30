import ChichatImg from "@/public/static/chichat.png";
import MinishellImg from "@/public/static/minishell.jpeg";
import Cub3dImg from "@/public/static/cub3d.png";
import FtTranscendence from "@/public/static/ft_transcendence.png";
import Holameet from "@/public/static/holameet.png";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import React from "react";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
	  name: "Blog",
	  hash: "/blog",
  },
] as const;

export const projects = [
  {
    title: "Chichat",
    description: "A chat website for hang out and talks with friends",
    tags: [
      "React",
      "Next.js",
      "Expressjs",
      "Prisma",
      "Socket.IO",
      "Postgresql",
      "Tailwind",
    ],
    imageUrl: ChichatImg,
    github: "https://github.com/azeddine-hmd/chichat",
    demo: "https://chichat.azeddine.xyz",
  },
  {
    title: "Holameet",
    description: "website for meeting random people and chatting with them via text or voise chat and video",
    tags: [
      "React",
      "Tailwind",
      "WebRTC",
      "Socket.IO",
    ],
    imageUrl: Holameet,
    github: "https://github.com/azeddine-hmd/holameet",
    demo: "https://holameet.azeddine.xyz",
  },
  {
    title: "Transcendence",
    description:
      "Transcendence is an online Ping Pong game. Users can login and create chatrooms, spectate live games, 2AF, access leaderboard and more.",
    tags: ["React", "Next.js", "Nestjs", "Socket.IO", "Postgresql"],
    imageUrl: FtTranscendence,
    github: "https://github.com/azeddine-hmd/ft_transcendence",
    demo: null,
  },
  {
    title: "Minishell",
    description:
      "Minimal unix shell with basic features such as (redirection, pipes, single/double quotes, env expansion, doc-here, etc...) written in c",
    tags: ["c", "shell", "parser"],
    imageUrl: MinishellImg,
    github: "https://github.com/azeddine-hmd/minishell",
    demo: null,
  },
  {
    title: "Cub3d",
    description:
      "Cub3D is a team project at 42 that asks us to create a 3D game engine with miniLibX. This project is inspired by the world-famous 90's game Wolfenstein 3D, which was the first FPS ever.",
    tags: ["c", "raycasting", "graphics"],
    imageUrl: Cub3dImg,
    github: "https://github.com/azeddine-hmd/cub3d",
    demo: null,
  },
] as const;

export const skills = [
  "C",
  "C++",
  "Typescript",
  "HTML",
  "CSS",
  "Git",
  "Docker",
  "React",
  "Next.js",
  "Nest.js",
  "Node.js",
  "Tailwind",
  "Socket.io",
  "Prisma",
  "Postgresql",
  "Redux",
  "Framer motion",
  "GraphQL",
  "Apollo",
  "ExpressJs",
  "Python",
  "Django",
] as const;

export const experience = [
  {
    title: "Completing 1337 common core",
    location: "Benguerir, 1337 school",
    description:
      "after 2 years in 1337 school I completed common core projects that tough me a lot and I had many knowledge at my disposal.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Intern at Agriedge",
    location: "Benguerir, UM6P (Agriedge Departement)",
    description:
      "I was intern as backend developer using django in 3 month and frontend developer in other 3 month. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

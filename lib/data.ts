import ChichatImg from "@/public/static/chichat.png";
import MinishellImg from "@/public/static/minishell.png";
import Cub3dImg from "@/public/static/cub3d.png";
import FtTranscendence from "@/public/static/ft_transcendence.png";

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
] as const;

export const projects = [
  {
    title: "Chichat",
    description:
      "A chat website for hang out and talks with friends",
    tags: ["React", "Next.js", "Expressjs", "Prisma", "Socket.IO", "Postgresql", "Tailwind"],
    imageUrl: ChichatImg,
  },
  {
    title: "Transcendence",
    description:
      "Transcendence is an online Ping Pong contest fullstack application where the users can login using 42 intra, the logged in users can create chatrooms, spectate live games, protect account using 2FA, access leaderboard and more.",
    tags: ["React", "Next.js", "Nestjs", "Socket.IO", "Postgresql"],
    imageUrl: FtTranscendence,
  },
  {
    title: "Minishell",
    description:
      "Minimal unix shell with basic features such as (redirection, pipes, single/double quotes, env expansion, doc-here, etc...) written in c",
    tags: ["c", "shell", "parser"],
    imageUrl: MinishellImg,
  },
  {
    title: "Cub3d",
    description:
      "Cub3D is a team project at 42 that asks us to create a 3D game engine with miniLibX. This project is inspired by the world-famous 90's game Wolfenstein 3D, which was the first FPS ever.",
    tags: ["c", "raycasting", "graphics"],
    imageUrl: Cub3dImg,
  },
] as const;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useThemeSwitcheContext } from "@/context/theme-context";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function BlogCard({ title, description, imageUrl, link }: BlogCardProps) {
  const { theme } = useThemeSwitcheContext();

  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full h-fit p-2
        ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
    >
      {/* Image */}
      <div className="relative aspect-[16/9]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <Link
          href={link}
          className={`block text-xl font-semibold mb-2 transition-colors duration-200
            ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"}`}
        >
          {title}
        </Link>

        <p className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>
          {description}
        </p>
      </div>
    </div>
  );
}

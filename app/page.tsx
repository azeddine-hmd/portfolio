import About from "@/components/home/about";
import Experience from "@/components/home/experience";
import Intro from "@/components/home/intro";
import Projects from "@/components/home/projects";
import SectionDivider from "@/components/home/section-divider";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}

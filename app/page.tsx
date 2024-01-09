import About from "@/components/home/about";
import Intro from "@/components/home/intro";
import Projects from "@/components/home/projects";
import SectionDivider from "@/components/home/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}

import About from '@/components/About';
import Experience from '@/components/Experience';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects/Projects';
import SectionDivider from '@/components/SectionDividet';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </main>
  );
}

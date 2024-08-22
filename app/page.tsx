import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

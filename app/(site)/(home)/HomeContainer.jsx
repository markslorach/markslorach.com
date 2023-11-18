import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

// Icons
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Components
import Hero from "./components/Hero";
import ContactLinks from "./components/ContactLinks";
import ProjectList from "./components/ProjectList";
import Experience from "./components/Experience";

export default async function HomeContainer() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      {/* <ContactLinks /> */}
      <h2 className="mb-6">Recent Projects</h2>
      <ProjectList projects={projects.slice(0, 3)} />
      {/* <div className="flex justify-end items-center mt-4">
      <Link className="tracking-wide leading-none text-white/70 hover:text-white/90 transition duration-300 ease-in-out" href={'/projects'}>View all projects <ArrowOutwardIcon fontSize="small"/></Link>
      </div> */}
      <Experience />
     
    </>
  );
}

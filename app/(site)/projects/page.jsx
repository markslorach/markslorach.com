import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

// Components
import ProjectList from "../(home)/components/ProjectList";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="mb-4">Projects</h2>
      <p className="text-base tracking-wide leading-relaxed font-light text-white/70 mb-16">
        Some of the recent projects I've worked on in my spare time and during
        my studies. If you have any questions please feel free to{" "}
        <Link href={"#contact"}>
          <strong className="text-highlight font-semibold">get in touch</strong>
        </Link>
        .
      </p>
      <ProjectList projects={projects} />
    </>
  );
}

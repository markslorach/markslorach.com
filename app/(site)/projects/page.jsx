import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import { Suspense } from "react";

// Components
import ProjectList from "../(home)/components/ProjectList";
import Skeleton from "../(home)/components/Skeleton";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <h2 className="mb-4">Projects</h2>
      <p className="text-base tracking-wide font-light text-white/70 mb-16">
        Some of the recent projects I've worked on in my spare time and during
        my studies. If you have any questions please feel free to{" "}
        <Link href={"#contact"}>
          <strong className="text-highlight font-semibold">get in touch</strong>
        </Link>
        .
      </p>
      <Suspense fallback={<Skeleton/>}>
        <ProjectList projects={projects} />
      </Suspense>
    </>
  );
}

import Link from "next/link";

// Components
import ProjectCard from "./ProjectCard";

// Data fetch coming from HomePage.jsx
export default function ProjectList({ projects }) {
  return (
    <>
      <Link href={"/projects"}>
        <section className="flex flex-col gap-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              summary={project.summary}
              github={project.github}
              image={project.images[0].asset.url}
            />
          ))}
        </section>
      </Link>
    </>
  );
}

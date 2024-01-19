// Components
import ProjectCard from "./ProjectCard";

export const revalidate = 0;


// Data fetch coming from HomePage.jsx
export default function ProjectList({ projects }) {

  return (
    <>
      <section className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            summary={project.summary}
            github={project.github}
            image={project.images[0].asset.url}
            slug={project.slug}
          />
        ))}
      </section>
    </>
  );
}

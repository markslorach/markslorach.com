import { getProject } from "@/sanity/sanity-utils";
import { notFound } from 'next/navigation'

// Components
import ImageCarousel from "./ImageCarousel";

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    notFound()
  }

  return (
    <main>
      <figure className="mb-16">
        <ImageCarousel images={project.images} />
      </figure>
      <h2 className="mb-4">{project.title}</h2>
    </main>
  );
}

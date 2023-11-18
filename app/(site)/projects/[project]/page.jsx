import { getProject } from "@/sanity/sanity-utils";

// Components
import ImageCarousel from "./ImageCarousel";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <figure className="mb-16">
        <ImageCarousel images={project.images} />
      </figure>
      <h2 className="mb-4">{project.title}</h2>
    </main>
  );
}

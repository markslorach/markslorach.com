import { getProject } from "@/sanity/sanity-utils";

// Components
import ImageCarousel from "./ImageCarousel";

export const revalidate = 0;

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <main>
      <ImageCarousel images={project.images} />
    </main>
  );
}

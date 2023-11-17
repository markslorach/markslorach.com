import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(id asc) {
        _id,
        _createdAt,
        id,
        title,
        type,
        "slug": slug.current,
        github,
        demo,
        summary,
        techStack,
        "images": images[]{
          asset->{
            _id,
            url
          }
        },
        "content": content[]{
          ...,
          asset->{
            _id,
            url
          }
        }
    }`
  );
}


export async function getProject(slug) {
  return createClient(clientConfig).fetch(
  groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      id,
      title,
      type,
      "slug": slug.current,
      github,
      demo,
      summary,
      techStack,
      "images": images[]{
        asset->{
          _id,
          url
        }
      },
      "content": content[]{
        ...,
        asset->{
          _id,
          url
        }
      }
    }`,
  { slug }
  );
}


import { getProjects } from "@/sanity/sanity-utils";
import Profile from "./Profile";
import Hero from "../(home)/components/Hero";

export default async function About() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <h2 className="mb-5">About</h2>
      <Profile />
    </>
  );
}

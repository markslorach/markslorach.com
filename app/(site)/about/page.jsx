import Profile from "./Profile";
import Hero from "../(home)/components/Hero";

export default async function About() {

  return (
    <>
      <Hero />
      <h2 className="mb-4">About</h2>
      <Profile />
    </>
  );
}

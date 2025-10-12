import { experience } from "@/content/experience";
import Heading from "./shared/Heading";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="mb-16">
      <div className="mb-10 space-y-2">
        <Heading>Experience</Heading>

        <p className="text-lg font-light leading-normal text-neutral-600">
          My journey in the world of software development so far.
        </p>
      </div>

      <div>
        {experience.map((role) => (
          <ExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

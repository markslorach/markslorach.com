export default function Experience() {
  return (
    <section className="mt-16">
      <h2 className="mb-6">Experience</h2>

      <div class="grid grid-cols-5 sm:grid-cols-4 sm:gap-4 tracking-wide">
        <div class="col-span-2 sm:col-span-1">
          <h2 className="font-light text-white/70">
            May - Sept' 23
          </h2>{" "}
        </div>
        <div class="col-span-3 sm:col-span-3">
          <h2 className="mb-2">CodeClan</h2>
          <h3 className="text-white/50 text-sm mb-4 font-light">
            Professional Software Development
          </h3>
          <p className="font-light text-white/70 mb-4">
          Spent 16 weeks building a solid understanding of software development fundamentals, creating full-stack applications using frameworks, databases, RESTful APIs and test-driven development, utilising version control and agile methodologies in solo and group projects.
          </p>
          <p className="text-white/50 font-light text-sm">
            JavaScript • React • Express.js • PostgreSQL • MongoDB • Java • Spring
          </p>
        </div>
      </div>
    </section>
  );
}

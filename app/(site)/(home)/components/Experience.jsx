export default function Experience() {
  return (
    <section className="mt-16">
      <h2 className="mb-6">Experience</h2>

      <div class="grid grid-cols-4 gap-4 tracking-wide">
        <div class="col-span-1">
          <h2 className=" leading-none font-light text-white/70">May - Sept' 23</h2>{" "}
        </div>
        <div class="col-span-3">
          <h2 className="mb-2">CodeClan</h2>
          <h3 className="text-white/70 text-sm mb-4 font-light">
            Professional Software Development
          </h3>
          <p className="font-light text-white/70 mb-4">
            This course provides comprehensive training on a variety of
            programming languages and frameworks. It equips students with the
            necessary skills to build and deploy full-stack web applications.
          </p>
          <p className="text-white/70 font-light text-sm">
            JavaScript • React • Node.js • Express.js • MongoDB
          </p>
        </div>
      </div>
    </section>
  );
}

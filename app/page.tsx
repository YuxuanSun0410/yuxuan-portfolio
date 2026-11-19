import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-black/45">
            Computer Science · Photography · Visual Design
          </p>

          <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] md:text-7xl tracking-tight">
            Hi, I’m Yuxuan.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-black/60 md:text-xl">
            Computer Science student at UC Davis, building digital projects and
            visual narratives through photography.
          </p>

          <p className="max-w-2xl text-base leading-7 text-black/50">
            I’m interested in web development, machine learning, interactive
            systems, and image-based storytelling. This portfolio brings
            together technical work, aesthetic direction, and selected visual
            projects.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/photography"
            className="rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white"
          >
            View Photography
          </Link>

          <Link
            href="/projects"
            className="rounded-full border border-black px-5 py-3 text-sm transition hover:bg-black hover:text-white"
          >
            View Projects
          </Link>
        </div>

        <div className="grid gap-4 border-t border-black/10 pt-6 text-sm text-black/65 md:grid-cols-2">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-black/40">
              Education
            </p>
            <p>University of California, Davis</p>
            <p>Computer Science Major</p>
          </div>

          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-black/40">
              Contact
            </p>
            <p>
              <a
                href="mailto:sunyuxuan36@gmail.com"
                className="transition hover:text-black"
              >
                sunyuxuan36@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+12797898031"
                className="transition hover:text-black"
              >
                +1 279 789 8031
              </a>
            </p>
            <p>
              <a
                href="https://github.com/YuxuanSun0410"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-black"
              >
                GitHub
              </a>
              {" · "}
              <a
                href="https://www.linkedin.com/in/yuxuan-sun-6129ab3ba/?locale=zh"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-black"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <img
  src="/cover.jpg"
  className="aspect-[4/5] w-full object-cover object-bottom rounded-[2rem]"
/>
      </div>
    </section>
  );
}
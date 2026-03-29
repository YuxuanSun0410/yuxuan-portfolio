const projects = [
  {
    title: "ML Model Optimization with PCA and Iterative Pruning",
    tech: "Python · Scikit-learn · Jupyter",
    description:
      "Reduced MNIST input dimensionality from 784 to 154 using PCA (95% variance retained), improving efficiency while maintaining accuracy (~94.6%). Implemented iterative magnitude pruning and analyzed trade-offs between performance and model size.",
    link: "#",
  },
  {
    title: "Reddit Content Insight Dashboard",
    tech: "Python · Pandas · Plotly · Streamlit",
    description:
      "Developed an interactive dashboard to analyze Reddit engagement patterns. Processed datasets to extract trends in upvotes and comments, and built dynamic visualizations for intuitive exploration.",
    link: "https://redditcontentinsight-gahdauijg3mvzim7kjkywz.streamlit.app",
  },
  {
    title: "Chess AI Engine",
    tech: "C++",
    description:
      "Built a playable chess engine using Minimax with Alpha-Beta pruning. Designed evaluation functions incorporating positional heuristics and optimized search efficiency.",
    link: "#",
  },
  {
    title: "WebGL Shadow Mapping Pipeline",
    tech: "JavaScript · WebGL2 · GLSL",
    description:
      "Implemented a multi-pass rendering pipeline with shadow mapping for directional and point lights. Debugged visual artifacts and developed interactive controls for real-time rendering.",
    link: "#",
  },
  {
    title: "Personal Portfolio Website",
    tech: "Next.js · TypeScript · Tailwind CSS",
    description:
      "Designed and developed a responsive portfolio combining photography and technical projects. Focused on visual hierarchy, interaction design, and clean UI aesthetics.",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.28em] text-black/45">
          Projects
        </p>

        <h1 className="text-5xl font-medium tracking-tight md:text-6xl">
          Technical Work
        </h1>

        <p className="text-lg leading-8 text-black/60">
          Selected projects across machine learning, systems, and interactive
          applications.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-black/10 p-6 transition hover:border-black/30"
          >
            <h2 className="text-xl font-medium">{project.title}</h2>

            <p className="mt-2 text-sm text-black/50">{project.tech}</p>

            <p className="mt-3 text-black/70">{project.description}</p>

            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                className="mt-4 inline-block text-sm underline"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
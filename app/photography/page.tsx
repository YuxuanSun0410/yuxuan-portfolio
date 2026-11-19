const photos = [
  {
    src: "/photos/photo1.jpg",
    title: "Untitled 01",
    year: "2026",
  },
  {
    src: "/photos/photo2.jpg",
    title: "Untitled 02",
    year: "2026",
  },
  {
    src: "/photos/photo3.jpg",
    title: "Untitled 03",
    year: "2026",
  },
  {
    src: "/photos/photo4.jpg",
    title: "Untitled 04",
    year: "2026",
  },
  {
    src: "/photos/photo5.jpg",
    title: "Untitled 05",
    year: "2026",
  },
  {
    src: "/photos/photo6.jpg",
    title: "Untitled 06",
    year: "2026",
  },
  {
    src: "/photos/photo6.jpg",
    title: "Untitled 06",
    year: "2026",
  },
  {
    src: "/photos/photo7.jpg",
    title: "Untitled 06",
    year: "2026",
  },
  {
    src: "/photos/photo8.jpg",
    title: "Untitled 06",
    year: "2026",
  },
];

export default function PhotographyPage() {
  return (
    <section className="space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.28em] text-black/45">
          Photography
        </p>

        <h1 className="text-5xl font-medium tracking-tight md:text-6xl">
          Selected Works
        </h1>

        <p className="text-lg leading-8 text-black/60">
          A selection of visual work focused on atmosphere, composition, and
          narrative presence.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {photos.map((photo) => (
          <article key={photo.src} className="space-y-3">
            <div className="overflow-hidden rounded-[1.75rem] bg-black/5">
              <img
                src={photo.src}
                alt={photo.title}
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>

            <div className="flex items-baseline justify-between gap-4 px-1">
              <h2 className="text-lg font-medium">{photo.title}</h2>
              <p className="text-sm text-black/45">{photo.year}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
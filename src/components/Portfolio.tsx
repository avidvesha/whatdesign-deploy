const projects = [
  {
    title: "FitPulse — Fitness Tracker",
    category: "Mobile App",
    description:
      "A sleek fitness tracking app with real-time workout monitoring, progress analytics, and personalized coaching features.",
    image: "/images/portfolio-1.jpg",
    tags: ["UI/UX", "iOS", "Android"],
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "FoodieHub — Delivery App",
    category: "Mobile App",
    description:
      "A vibrant food delivery platform connecting users with local restaurants through an intuitive ordering experience.",
    image: "/images/portfolio-2.jpg",
    tags: ["Mobile", "UI Design", "Branding"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "VaultPay — Digital Banking",
    category: "Fintech",
    description:
      "A modern digital banking experience with clean data visualization, seamless transfers, and smart financial insights.",
    image: "/images/portfolio-3.jpg",
    tags: ["Web App", "Dashboard", "Fintech"],
    color: "from-blue-500 to-cyan-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-slate-50 py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Our Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Designs that{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              speak for themselves
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Explore our latest projects where creativity meets functionality.
            Every design is crafted to deliver exceptional user experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid items-center gap-8 lg:gap-16 ${
                index % 2 === 0 ? "lg:grid-cols-2" : "lg:grid-cols-2"
              }`}
            >
              {/* Image */}
              <div
                className={`relative group ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r opacity-0 blur-2xl transition-opacity group-hover:opacity-40" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
              >
                <div className="inline-flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full bg-gradient-to-r ${project.color}`}
                  />
                  <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                >
                  View Case Study
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

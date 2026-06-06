export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-50 via-white to-indigo-50 pt-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-linear-to-br from-indigo-100/60 to-violet-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-linear-to-tr from-violet-100/50 to-fuchsia-100/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-32 w-32 -translate-x-1/2 rounded-full bg-indigo-200/20 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              Now Accepting New Projects
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We Design{" "}
              <span className="bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                What You
              </span>{" "}
              Imagine
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-500">
              WhatDesign is a creative studio specializing in crafting stunning
              mobile app interfaces that turn your vision into pixel-perfect
              reality.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-200 transition-all hover:shadow-2xl hover:shadow-indigo-300 hover:brightness-110"
              >
                Start a Project
                <svg
                  className="h-5 w-5"
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
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
              >
                View Our Work
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "4.6★", label: "Average Rating" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-indigo-200/50 to-violet-200/50 blur-2xl" />

              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border border-white/60 shadow-2xl shadow-indigo-200/40">
                <img
                  src="/images/hero-bg.jpg"
                  alt="WhatDesign creative work"
                  className="h-auto w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-indigo-900/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-green-400 to-emerald-500">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      98% Success
                    </div>
                    <div className="text-xs text-slate-500">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge right */}
              <div className="absolute -right-4 top-8 rounded-2xl border border-white/60 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-500">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      UI/UX Experts
                    </div>
                    <div className="text-xs text-slate-500">
                      Award Winning Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

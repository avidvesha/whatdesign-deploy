export default function CTA() {
  return (
    <section id="contact" className="relative bg-white py-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 shadow-2xl sm:px-16 sm:py-24">
          {/* Background decorations */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
          </div>

          {/* Grid Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm">
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
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
              Let&apos;s Create Together
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to bring your{" "}
              <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                vision to life?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Let&apos;s discuss your next project. Whether you need a mobile
              app, website, or complete brand overhaul — we&apos;re here to make
              it happen.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/6281226785784"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/30 transition-all hover:shadow-2xl hover:shadow-indigo-500/40 hover:brightness-110"
              >
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Free consultation &bull; No commitment required &bull; Response
              within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

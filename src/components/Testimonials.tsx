import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechNova",
    content:
      "WhatDesign completely transformed our app experience. The new interface increased our user retention by 40% in just three months. Their attention to detail is unmatched.",
    avatar: "SC",
    rating: 4.6,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, FitPulse",
    content:
      "Working with the WD team was an absolute pleasure. They took our rough ideas and turned them into a polished, beautiful product that our users genuinely love.",
    avatar: "MR",
    rating: 5,
  },
  {
    name: "Emily Nakamura",
    role: "Product Lead, CloudSync",
    content:
      "The design system WhatDesign built for us has saved our team hundreds of hours. Consistent, scalable, and gorgeous — exactly what we needed to scale our platform.",
    avatar: "EN",
    rating: 4,
  },
  {
    name: "David Park",
    role: "CTO, VaultPay",
    content:
      "Our fintech app needed to feel trustworthy and modern simultaneously. WD nailed it. The dashboard design alone reduced support tickets by 25%.",
    avatar: "DP",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 py-24 lg:py-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-indigo-200">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Loved by teams <span className="text-indigo-200">everywhere</span>
          </h2>
          <p className="mt-5 text-lg text-indigo-100/80">
            Don&apos;t just take our word for it — hear from the teams
            we&apos;ve had the pleasure of working with.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              onMouseEnter={() => setActive(index)}
              className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                active === index
                  ? "scale-105 bg-white shadow-2xl shadow-black/20"
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      active === index ? "text-amber-400" : "text-amber-300/60"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className={`mb-6 text-sm leading-relaxed transition-colors ${
                  active === index ? "text-slate-600" : "text-white/80"
                }`}
              >
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    active === index
                      ? "bg-indigo-600 text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div
                    className={`text-sm font-semibold transition-colors ${
                      active === index ? "text-slate-900" : "text-white"
                    }`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-xs transition-colors ${
                      active === index ? "text-slate-500" : "text-white/60"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

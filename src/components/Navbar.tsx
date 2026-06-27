import { useState, useEffect } from "react";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 font-bold text-white shadow-lg shadow-indigo-200">
            WD
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            What<span className="text-indigo-600">Design 1</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:shadow-xl hover:shadow-indigo-300 hover:brightness-110"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="space-y-1 border-t border-slate-100 bg-white/90 px-6 pb-4 pt-2 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-indigo-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-6 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

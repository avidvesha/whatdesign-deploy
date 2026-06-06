export default function Footer() {
  const footerLinks = {
    Company: ["About Us", "Services", "Our Team", "Careers"],
    Support: ["Contact Us", "FAQ", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-slate-900 pt-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 pb-12 lg:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 font-bold text-white">
                WD
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                What<span className="text-indigo-400">Design</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Crafting exceptional digital experiences that transform ideas into
              beautiful, functional products.
            </p>
            {/* Social Links */}
            {/* <div className="flex gap-3 pt-2">
              {["Dribbble", "Behance", "Twitter", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-xs font-bold text-slate-400 transition-all hover:bg-indigo-600 hover:text-white"
                  title={social}
                >
                  {social[0]}
                </a>
              ))}
            </div> */}
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-indigo-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-slate-800 py-8 sm:flex-row">
          <div className="space-y-2 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} WhatDesign. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Designed by WhatDesign Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

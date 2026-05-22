import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does a typical website design project take?",
    answer:
      "Most website design projects take between 4-8 weeks, depending on scope and complexity. Simple sites: 4-5 weeks. Medium sites: 6-7 weeks. Complex projects with custom features: 8+ weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 2,
    question: "What's included in your design process?",
    answer:
      "Our 5-step process includes Discovery (understanding your goals), Wireframing (user flow mapping), Visual Design (high-fidelity mockups), Prototyping (interactive testing), and Handoff & Support (design specs and ongoing guidance). Each phase is documented and reviewed with you.",
  },
  {
    id: 3,
    question: "Do you offer unlimited revisions?",
    answer:
      "Yes, we include unlimited revisions during the design phase to ensure you're completely satisfied with the final product. We believe in collaboration and want your website to perfectly match your vision.",
  },
  {
    id: 4,
    question: "Can you help redesign my existing website?",
    answer:
      "Absolutely! Website redesigns are one of our specialties. We analyze your current site, identify improvement opportunities, and create a modern design that maintains your brand identity while improving user experience and conversions.",
  },
  {
    id: 5,
    question: "Do you provide responsive design for mobile devices?",
    answer:
      "Yes, all our websites are designed with a mobile-first approach. We ensure your site looks and functions perfectly on phones, tablets, and desktops. Responsive design is standard in all our projects.",
  },
  {
    id: 6,
    question: "What industries do you have experience with?",
    answer:
      "We work with diverse industries including SaaS, e-commerce, healthcare, fintech, agencies, startups, and enterprises. Our experience spans across sectors, and we adapt our design approach to match industry best practices and user expectations.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative bg-white py-24 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-500">
            Find answers to common questions about our design process, timeline,
            and services. Don't see your question? Let's chat on WhatsApp.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group relative rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-100/40"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-indigo-600 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </button>

              {openId === faq.id && (
                <div className="border-t border-slate-100 px-8 py-6">
                  <p className="leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                  <p className="mt-4 text-sm text-slate-400">
                    Need more details?{" "}
                    <a
                      href="https://wa.me/6281226785784"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

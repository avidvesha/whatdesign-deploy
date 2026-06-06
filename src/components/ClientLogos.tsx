export default function ClientLogos() {
  const clients = [
    "TechNova",
    "QuantumApp",
    "CloudSync",
    "DataPulse",
    "NeuralNet",
    "ByteForge",
  ];

  return (
    <section className="relative border-y border-slate-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Trusted by innovative companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-slate-300 transition-colors hover:text-slate-500"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-slate-100 to-slate-50 text-xs font-bold text-slate-400">
                {name[0]}
              </div>
              <span className="text-lg font-bold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

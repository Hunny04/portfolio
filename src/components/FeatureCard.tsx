export function FeatureCard({ item }: { item: any }) {
  return (
    <div className="group relative w-full max-w-sm">
      {/* Base Card */}
      <div className="relative z-10 rounded-xl border border-white/10 bg-[#0b1220] md:p-6 p-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-cyan-400/60">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#0b1220]/95 p-6 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 z-50">
        <div className="mb-4">
          <p className="mb-2 -mt-4 text-xs uppercase tracking-widest text-cyan-400">Tools</p>
          <div className="flex flex-wrap gap-2">
            {item.tools.map((tool: string) => (
              <span key={tool} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-200">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

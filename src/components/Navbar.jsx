import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-md bg-black text-white grid place-items-center border-2 border-black shadow-[4px_4px_0_#000]">
            <span className="font-black">F</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-black/70">Portfolio</p>
            <h1 className="font-extrabold leading-none text-xl">Flames</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-3">
          {[
            { href: "#finance", label: "Finance" },
            { href: "#ai", label: "AI" },
            { href: "#media", label: "Media" },
            { href: "#thoughts", label: "Thoughts" },
            { href: "#dev", label: "Dev" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center px-3 py-2 rounded-md border-2 border-black bg-white hover:-translate-y-0.5 transition transform shadow-[3px_3px_0_#000] text-sm font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden inline-flex items-center justify-center size-10 rounded-md border-2 border-black bg-white shadow-[3px_3px_0_#000]">
          <Menu className="size-5" />
        </button>
      </div>
    </header>
  )
}

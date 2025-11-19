export default function Footer() {
  return (
    <footer className="bg-[#F5F7FF] border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex items-center gap-3">
          {[
            { label: 'Email', href: '#' },
            { label: 'X', href: '#' },
            { label: 'GitHub', href: '#' },
          ].map((l) => (
            <a key={l.label} href={l.href} className="inline-flex px-3 py-2 rounded-md border-2 border-black bg-white shadow-[3px_3px_0_#000] text-sm font-semibold">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

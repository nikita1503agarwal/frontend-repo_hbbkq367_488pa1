export default function CategoryCard({ id, title, description, accent }) {
  return (
    <a
      href={`#${id}`}
      className="group block bg-white border-2 border-black rounded-xl p-5 shadow-[6px_6px_0_#000] hover:-translate-y-1 transition transform"
      style={{ boxShadow: `6px 6px 0 ${accent}` }}
    >
      <div className="flex items-start gap-4">
        <div className="size-10 rounded-md border-2 border-black grid place-items-center font-black" style={{ backgroundColor: accent }}>
          <span>◼</span>
        </div>
        <div>
          <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-black/70 max-w-prose">{description}</p>
        </div>
      </div>
    </a>
  )
}

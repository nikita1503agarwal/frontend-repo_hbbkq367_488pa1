import CategoryCard from './CategoryCard'

const categories = [
  {
    id: 'finance',
    title: 'Finance',
    description: 'Fintech experiments, dashboards, product explorations, and notes on modern money movement.',
    accent: '#7C93FF'
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'Interfaces, agents, evaluations, and thoughts on intelligent systems and human-in-the-loop tools.',
    accent: '#FF8BA7'
  },
  {
    id: 'media',
    title: 'Media',
    description: 'Select visuals, design studies, brand explorations, and content experiments.',
    accent: '#8BE0D1'
  },
  {
    id: 'thoughts',
    title: 'Thoughts',
    description: 'Short essays and sketches. Minimal, opinionated, and practical.',
    accent: '#F9C74F'
  },
  {
    id: 'dev',
    title: 'Dev',
    description: 'Open-source snippets, small utilities, and patterns worth reusing.',
    accent: '#B388EB'
  }
]

export default function Sections() {
  return (
    <section className="bg-[#F5F7FF]">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
        </div>
      </div>

      {/* Anchor blocks for each section */}
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-14">
        {categories.map((c) => (
          <div key={c.id} id={c.id} className="bg-white border-2 border-black rounded-xl p-6 shadow-[8px_8px_0_#000]">
            <h3 className="text-2xl font-black">{c.title}</h3>
            <p className="mt-2 text-black/70 max-w-prose">{c.description}</p>
            <div className="mt-6 h-36 rounded-lg border-2 border-dashed border-black/30 grid place-items-center text-sm text-black/60" style={{ background: `linear-gradient(135deg, ${c.accent}22, transparent)` }}>
              Content coming soon
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

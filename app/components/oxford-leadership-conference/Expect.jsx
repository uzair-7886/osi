export default function Expect({ bullets }) {
    if (!bullets?.length) return <div>no data</div>
    return (
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-orange text-2xl font-semibold text-center mb-8">
          What to Expect?
        </h2>
        <ul className="grid sm:grid-cols-2  gap-4 list-disc marker:text-orange text-grey px-5">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </section>
    )
  }
  
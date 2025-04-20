export default function Audience({ items }) {
    if (!items?.length) return null
    return (
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-orange text-2xl font-semibold mb-8 text-center">
          Who Should Attend?
        </h2>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(({ _key, title, description }) => (
            <div key={_key} className="space-y-2">
              <h3 className="text-darkblue font-semibold">{title}</h3>
              <p className="text-grey text-sm text-justify">{description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
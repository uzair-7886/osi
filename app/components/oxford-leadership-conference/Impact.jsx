export default function Impact({ stats }) {
    if (!stats) return null
    const { days, sessions, hours } = stats
    return (
      <section className="py-12 text-center">
        {/* <h2 className="text-orange text-2xl font-semibold mb-6">Impact in Numbers</h2> */}
        <div className="flex justify-center gap-8">
          {[['Days', days], ['Sessions', sessions], ['Hours of learning', hours]].map(([l,v])=>(
            <div key={l}>
              <p className="text-4xl font-bold text-darkblue">{v}+</p>
              <p className="text-grey">{l}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
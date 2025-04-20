// components/Fees.jsx
export default function Fees({ feeData }) {
  if (!feeData?.options?.length) return null
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-orange text-2xl font-semibold mb-8 text-center">
        Pricing
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {feeData.options.map(({ title, price, description }) => (
          <div
            key={title}
            className="border bg-background p-6 rounded space-y-3 text-center"
          >
            <h3 className="text-darkblue font-semibold">{title}</h3>
            <p className="text-3xl font-bold text-orange">{price}</p>
            <p className="text-grey text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

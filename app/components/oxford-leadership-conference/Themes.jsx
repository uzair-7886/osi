export default function Themes({ themes }) {
  if (!themes?.length) return null

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-orange text-2xl font-semibold mb-8 text-center">
        Thematic Areas
      </h2>

      <p className="text-grey text-justify mb-8">
        The program employs a blend of theoretical knowledge and practical application, ensuring participants gain a comprehensive understanding of various facets of leadership. The conference aims to equip emerging leaders with the necessary tools to excel in their roles and make a positive impact in their organizations and communities. The key themes covered in this conference are:
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {themes.map(({ _key, heading, description }) => (
          <div key={_key} className="space-y-2">
            <h3 className="text-darkblue font-semibold">{heading}</h3>
            <p className="text-grey text-sm text-justify">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import { PortableText } from '@portabletext/react'

export default function Beyond({ data }) {
  if (!data) return null
  const { headline, description, bullets } = data
  return (
    <section className="bg- text-white py-16 px-4 text-center">
      <h2 className="text-2xl font-semibold text-orange mb-6">{headline}</h2>
      <div className="max-w-5xl mx-auto prose prose-invert text-grey mb-6">
        <PortableText
                          value={description}
                          components={{
                            block: {
                              normal: ({ children }) => (
                                <p className="text-base text-justify text-grey leading-relaxed mb-4">
                                  {children}
                                </p>
                              )
                            }
                          }}
                        />
      </div>
      <ul className="flex flex-wrap justify-center gap-4 mb-8">
        {bullets.map((b,i)=>(
          <li key={i} className="border text-orange rounded px-4 py-2 text-sm border-orange">{b}</li>
        ))}
      </ul>
    </section>
  )
}

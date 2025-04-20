import { PortableText } from '@portabletext/react'

export default function WhyAttend({ items }) {
    const content = items
  if (!content?.length) return <div>No data for why attend</div>
  return (
    <section className="bg-background max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-orange text-2xl font-semibold text-center mb-8">
        Why Attend the Oxford Leadership Conference?
      </h2>
      <article className="prose lg:prose-lg max-w-4xl mx-auto text-grey">
                 <PortableText
                          value={content}
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
      </article>
    </section>
  )
}

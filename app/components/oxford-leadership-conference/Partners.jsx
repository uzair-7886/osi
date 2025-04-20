/* Partners.jsx */
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

export default function Partners({ logos }) {
  if (!logos?.length) return null

  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-semibold text-orange mb-8">
        Our Partners
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {logos.map((logo) => {
          const imgUrl = urlFor(logo).width(240).url()
          return (
            <Image
              key={logo._key}
              src={imgUrl}
              alt="Partner logo"
              width={160}
              height={80}
              className="object-contain"
            />
          )
        })}
      </div>
    </section>
  )
}

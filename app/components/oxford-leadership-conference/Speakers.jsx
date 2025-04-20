'use client'

import Image   from 'next/image'
import { urlFor } from '@/sanity/lib/image'   

export default function Speakers({ speakers }) {
  if (!speakers?.length) return null

  return (
    <section className="py-12">
      <h2 className="text-orange text-2xl font-semibold text-center mb-8">
        Our Speakers
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto px-4">
        {speakers.map(({ _key, photo, name, title,bio }) => {
          const imgUrl = urlFor(photo)            // ← build URL
                          .width(400)             //   w=400
                          .height(400)            //   h=400
                          .fit('crop')            //   fit=crop
                          .url()

          return (
            <div key={_key} className="text-center space-y-3">
              <Image
                src={imgUrl}
                alt={name}
                width={160}
                height={160}
                className="rounded-full mx-auto object-cover"
              />
              <h3 className="text-darkblue font-semibold">{name}</h3>
              <p className="text-orange">{title}</p>
              <p className='text-sm text-grey text-justify'>{bio}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

// components/oxford-leadership-conference/HeroBanner.jsx
import Image from 'next/image'
import { urlFor } from "@/sanity/lib/image"

const HeroBanner = ({ image, text }) => (
  <div className="relative w-full h-screen">
    {/* ← replace <img> with Next/Image */}
    <Image
      src={urlFor(image).url()}
      alt={image.alt || 'Hero background'}
      fill
      className="object-cover object-top"
      priority
    />

    <div className="absolute inset-0 bg-black/10" />

    <div className="absolute inset-0 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
          {text}
        </h1> */}
      </div>
    </div>
  </div>
)

export default HeroBanner

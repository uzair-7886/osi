'use client'
import React from 'react';
import { useState,useEffect } from 'react';
import { client } from '@/sanity/lib/client';

const DownloadBrochureHeroSection = () => {
  const [urls, setUrls] = useState({
    summerUrl: '',
    execUrl: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(`
        *[_type == "brochures"][0]{
          "summerUrl": summerProgramBrochure.asset->url,
          "execUrl": executiveProgramBrochure.asset->url
        }
      `)
      .then((data) => {
        setUrls(data || {})
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const { summerUrl, execUrl } = urls

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-orange text-lg font-semibold">Download</h2>
        <h1 className="mb-6 text-[26px] font-semibold text-gray-900">
          Our Brochure
        </h1>
        <p className="mb-8 text-base text-black max-w-2xl mx-auto">
          Get all the details you need about our programs, courses, and student
          life at Oxford Summer Institute. Download our brochure and take the
          first step towards an unforgettable summer experience!
        </p>

        {loading ? (
          <p>Loading brochures…</p>
        ) : (
          <>
            <a
              href={summerUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-orange text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-base mx-4"
                disabled={!summerUrl}
              >
                Oxford Summer Program
              </button>
            </a>

            <a
              href={execUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-orange text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 text-base mx-4"
                disabled={!execUrl}
              >
                Oxford Executive Program
              </button>
            </a>
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 -z-10" />
    </section>
  )
}

export default DownloadBrochureHeroSection
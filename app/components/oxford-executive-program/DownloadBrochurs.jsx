'use client'
import React from 'react';
import { useState,useEffect } from 'react';
import { client } from '@/sanity/lib/client';

const DownloadBrochure = () => {
  const [urls, setUrls] = useState({
    summerUrl: '',
    execUrl: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(`
        *[_type == "brochures"][0]{
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
    <section className="relative w-full py-8 md:py-24">
      <div className="container mx-auto px-4 text-center">
        

        {loading ? (
          <p>Loading brochures…</p>
        ) : (
          <>
           

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
                Download Brochure
              </button>
            </a>
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50 -z-10" />
    </section>
  )
}

export default DownloadBrochure
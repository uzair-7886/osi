import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'
import GalleryViewer from '../components/gallery/GalleryViewer'
import { fetchGallery } from '../components/gallery/fetchgallery'

export const revalidate = 60 

async function GalleryPage() {
  const galleryData = await fetchGallery()
  
  return (
    <>
      <HeroBanner text="Gallery"/>
      <GalleryViewer initialData={galleryData} />
      <SummerBanner />
    </>
  )
}

export default GalleryPage
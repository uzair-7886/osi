import React from 'react'
import HeroBanner from '../components/shared/HeroBanner'
import SummerBanner from '../components/shared/SummerBanner'
import GalleryViewer from '../components/gallery/GalleryViewer'

function page() {
  return (
    <>
      <HeroBanner text="Gallery"/>
      <GalleryViewer />
      <SummerBanner />
    </>
  )
}

export default page
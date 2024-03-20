import React from 'react'
import Image from 'next/image';

const PropertyGalleryCard = () => {
  return (
    <div className='container mx-auto mt-4'>
        <Image
          src="/assets/image1.jpg"
          alt="card-image"
          className='rounded-[8px] border border-gray-500'
          width={236.8}
          height={159}
        />
    </div>
  )
}

export default PropertyGalleryCard
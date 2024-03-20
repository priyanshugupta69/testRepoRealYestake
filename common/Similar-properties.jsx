import { Typography } from '@material-tailwind/react'
import React from 'react'
import CustomCarousel from './PhotoGalleryCarousel'
import PrimaryButton from '@/components/Buttons/PrimaryButton'

const SimilarProperties = () => {
  return (
    <section className="bg-[#160019]  py-20 pt-6">
      <Typography
        variant="h1"
        className="text-[#FFFFFF] Anton text-center lg:text-[40px] text-[26px] lg:font-normal md:font-extralight	font-extralight	 md:leading-[60.13px] leading-3"
      >
        SIMILAR

        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#2934FE] to-[#BF32EC]">
          {" "}
          PROPERTIES
        </span>
      </Typography>

      <div className="pt-16">
        <CustomCarousel />
      </div>


        <div className="mt-6 flex justify-center">
          <PrimaryButton title="View All" />
      </div>
      
    </section>
  )
}

export default SimilarProperties
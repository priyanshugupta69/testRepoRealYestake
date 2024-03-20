import { Typography } from '@material-tailwind/react'
import React from 'react'

const ContactUs = () => {
  return (
    <>
        <div className='container mx-auto lg:my-[140px] lg:pt-8 lg:pb-0 pb-10'>
            <div className='w-[400px] ml-[84px] '>
                <Typography className='font-normal lg:text-[48px] text-[24px] leading-[71.04px]  uppercase  text-white font-anton'>We Would love to hear 
                {" "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2934FE] to-[#BF32EC]'>from you</span></Typography>
            </div>
            <div className='w-[310px] ml-[84px] lg:mt-[40px] mt-[20px]'>
                <Typography variant='paragraph' className='font-light lg:text-[15px] text-[18p]    text-[#CDCDCD] font-raleway'>
                We’re always ready to help. Fill out the form or write an email to 
                {/* grayish color */} {" "}
                <span className='text-white'>@realyestatemail.com</span>
                </Typography>
            </div>
        </div>
    </>
  )
}

export default ContactUs
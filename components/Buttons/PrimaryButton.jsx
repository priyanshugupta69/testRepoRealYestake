import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'



const PrimaryButton = (props) => {
    return (
    <Link href={`${props.customHref}`}>
    <Button className={`w-full normal-case text-[#FFFFFF] rounded-[47px]   bg-gradient-to-r from-[#2934FE] to-[#BF32EC] ${props.customClassName}`}>
      {props.title}
    </Button>
    </Link>

  )
}

export default PrimaryButton

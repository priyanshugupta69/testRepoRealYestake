import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React from 'react'


const SecondaryButton = (props) => {
  return (
    <Link href={`${props.customHref}`}>
    <Button className={ `w-full normal-case  text-[#FB3C98] border-[1px] border-[#FB3C98] rounded-[47px] bg-white ${props.customClassName}`}>{props.title}</Button>
    </Link>
  )
}

export default SecondaryButton

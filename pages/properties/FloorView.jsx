import Image from 'next/image'
import React from 'react'
import Properties from '../user/properties'

const FloorView = ({data}) => {
  return (
    <section className="container mx-auto">
        <div className="grid md:grid-cols-1 w-full">
            <Image src={data.floorPlan[0]} alt="floor plan"
            className=' rounded-[16px]'
            width={1224}
            height={599} />
        </div>
    </section>
  )
}

export default FloorView
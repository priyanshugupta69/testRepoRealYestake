import { Typography } from '@material-tailwind/react'
import React from 'react'

const Amenities = () => {
  return (
    <>
    <div className="container mx-auto mt-10">
        <Typography variant="h1" color="white">Amenities:</Typography>
        <hr className="border-[#fffff99] border-opacity-50" />
        {/* list down all amenities size by side like gym, swimming pool, furnished etc */}
        <div className="flex flex-row gap-[100px] mt-5">
        <div className="flex flex-col gap-2">
        
        <li className="text-white">Gym</li>
        <li className="text-white">Swimming Pool</li>
        <li className="text-white">Furnished</li>
        <li className="text-white">Security Staff</li>
        <li className="text-white">Conditioned</li>
        <li className="text-white">Elevator</li>
        <li className="text-white">Parking</li>
        
        
        {/* security staff, conditioned */}
        </div>
        <div className="flex flex-col gap-2">
        
        <li className="text-white">Furnished</li>
        <li className="text-white">Security Staff</li>
        <li className="text-white">Conditioned</li>
        <li className="text-white">Elevator</li>
        <li className="text-white">Parking</li>
        <li className="text-white">Gym</li>
        
        
        {/* security staff, conditioned */}
        </div>
        <div className="flex flex-col gap-2">
        <Typography variant="paragraph" color="white">Security Staff</Typography>
        <Typography variant="paragraph" color="white">Conditioned</Typography>
        <Typography variant="paragraph" color="white">Elevator</Typography>
        <Typography variant="paragraph" color="white">Parking</Typography>
        </div>

        </div>
        </div>
    </>
  )
}

export default Amenities
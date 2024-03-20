import { NavigationBar } from '@/components/Admin/Navbar'
import { PropertyCard } from '@/components/TransferCard/PropertyCard'
import { UserCard } from '@/components/TransferCard/UserCard'
import React from 'react'

const index = () => {
  return (
    <>
    <div className='container mx-auto lg:mt-[60px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <UserCard />
      <PropertyCard />
      <UserCard />
    </div>
    </div>
    </>
  )
}

export default index
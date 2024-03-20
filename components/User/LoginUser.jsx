import { BellIcon } from '@heroicons/react/24/solid'
import { Avatar, IconButton } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useState } from 'react'

const LoginUser = ({logout}) => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <>
        {/* <IconButton variant="text" color="white">
            <BellIcon className="h-7 w-7" />
          </IconButton> */}
          <div onMouseOver={()=>{setDropdown(true)}}
            onMouseLeave={()=>{setDropdown(false)}}>
          {dropdown && (
            <div onMouseOver={()=>{setDropdown(true)}}
            onMouseLeave={()=>{setDropdown(false)}} className="py-3 absolute top-14 right-14 bg-transparent border border-gray-800 text-white rounded-md px-5 w-30">
            <ul className={`flex flex-col gap-y-2`}>
              <Link href={"/user/profile"}><li className="cursor-pointer py-1 text-sm hover:text-[#C732FF]">Profile</li></Link>
              <Link href={"/user/settings"}><li className="cursor-pointer py-1 text-sm hover:text-[#C732FF]">Settings</li></Link>
              <li onClick={logout} className="cursor-pointer py-1 text-sm hover:text-[#C732FF]">Logout</li>
            </ul>
          </div>
          )}
          <Link href="/">
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out h-14 w-14"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          </Link>
          </div>
    </>
  )
}

export default LoginUser
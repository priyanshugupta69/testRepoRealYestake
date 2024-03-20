import React from 'react'

export default function ({className, placeholder}) {
  return (
    <input 
    className={`bg-white/20 ${className} focus:outline-white focus:outline-2 placeholder-white/50 text-white h-[2.88rem] px-5 rounded-[0.5rem]`}
    placeholder={`${placeholder}`}
    />
  ); //here
}

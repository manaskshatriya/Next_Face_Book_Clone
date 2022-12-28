import React from 'react'
import Image from 'next/image'
export default function SidebarRow({src,Icon,title}) {
    // console.log(src)
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor ' >
      {src && (
        <Image className='rounded-full' src={src} width={30} height={30}  />
      )}
      {Icon &&(
        <Icon className="h-8 w-8 text-blue-500  " ></Icon>
      )}
      <p className='hidden sm:inline-flex font-medium  ' >{title}</p>
    </div>
  )
}

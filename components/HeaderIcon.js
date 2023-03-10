import React from 'react'

export default function HeaderIcon({Icon,active}) {
  return (
    <div className=' flex items-center rounded-xl group
     active:border-b-2 active:border-blue-500  cursor-pointer  md:px-10 sm:h-14 hover:bg-gray-100 ' >
       <Icon className={`h-5 text-gray-500  
       text-center sm:h-7 mx-auto 
         group-hover:text-blue-500  ${active && `text-blue-500`}`} > </Icon>
    </div>
  )
}

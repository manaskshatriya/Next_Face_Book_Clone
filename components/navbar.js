import React from 'react'
import Image from 'next/image'
import { SearchIcon , FlagIcon , PlayIcon , ShoppingCartIcon } from '@heroicons/react/outline'
import { BellIcon , ChatIcon , ChevronDownIcon ,HomeIcon ,UserGroupIcon,ViewGridIcon } from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'
import { useSession ,signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session)
  console.log(session.user.image);
  // useEffect(()=>{ console.log(session);  if(!session) signIn()},[])
  
  return (
    
    <div className='sticky top-0 max-w-full z-50 bg-white flex items-center p-2 lg:px-5 shadow-md' >
      
      {/* Left */}
        <div className='flex items-center cursor-pointer'>
            <Image onClick={signOut} src="https://links.papareact.com/5me"  width={40} height={40} />
            <div className='flex ml-2 items-center  rounded-full bg-gray-100 border p-2' >
                <SearchIcon className='text-gray-600 h-6 ' ></SearchIcon>
                <input className=' hidden  bg-transparent md:inline-flex ml-2 items-center outline-none placeholder-gray-500 flex-shrink' type="text" placeholder='Search Facebook' name="" value=""/>
            </div>
        </div>
      {/* Centre */}
        <div className='flex justify-center flex-grow' >
            <div className="flex space-x-6 md:space-x-2" >
                <HeaderIcon active Icon ={HomeIcon} />
                <HeaderIcon Icon ={FlagIcon} />
                <HeaderIcon Icon ={PlayIcon} />
                <HeaderIcon Icon ={ShoppingCartIcon} />
                <HeaderIcon Icon ={UserGroupIcon} />
            </div>
        </div>
      {/* Right */}
        <div className='flex items-center sm:space-x-2 justify-end' >
           {/* {session ? <Image className='rounded-full cursor-pointer'  src={session.user.image.toString()} width={20} height={20} alt="" >  </Image> : <></>} */}
            
            {session ? <p className='font-semibold pr-3 whitespace-nowrap'>{session.user.name}</p> : <p onClick={signIn} className='font-semibold pr-3 whitespace-nowrap '> Login</p>}
            <ViewGridIcon className='icon' />
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}

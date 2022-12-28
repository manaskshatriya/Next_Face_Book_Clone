import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'


export default function Login() {
  return (
    <div className='grid place-items-center ' >
        <Image className='m-10' src="https://links.papareact.com/5me"  height={200} width={200} alt="" ></Image>
        <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer  ' >Login with Facebook</h1>
    </div>
  )
}

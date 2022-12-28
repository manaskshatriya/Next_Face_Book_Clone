import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { ChatIcon , ShareIcon , ThumbUpIcon } from '@heroicons/react/outline';
export default function Post({ name, message, email, timestamp, image, postImage }) {
    // 
    const { data: session } = useSession();
    return (
        <div className='flex flex-col' >
            <div className='p-5 bg-white mt-5 rounded-t-xl shadow-lg' >
                <div className='flex items-center space-x-2' >
                    <div>
                        <Image className='rounded-full' src={image} height={40} width={40} alt="" />
                    </div>
                    <div className='' >
                        <p className='font-medium  ' >{name}</p>
                        <p className='text-xs text-gray-400' >
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                    </div>

                </div>
                <p className='pt-4' >{message}</p>
            </div>
            {postImage && 
               <div className='relative h-56 md:h-96 ' >
                    <Image src={postImage}  fill />
               </div>
            }
            <div className='flex justify-between items-center rounded-b-2xl shadow-lg text-gray-400 border-t' >
                <div className='flex items-center space-x-1 hover:bg-gray-200 flex-grow justify-center p-2 rounded-xl cursor-pointer  ' >
                    <ThumbUpIcon className='h-4'/>
                    <p className='text-xs sm:text-base' >Like</p>
                </div>
                <div className='flex items-center space-x-1 hover:bg-gray-200 flex-grow justify-center p-2 rounded-xl cursor-pointer  ' >
                    <ChatIcon className='h-4'/>
                    <p className='text-xs sm:text-base' >Comment</p>
                </div>
                <div className='flex items-center space-x-1 hover:bg-gray-200 flex-grow justify-center p-2 rounded-xl cursor-pointer  ' >
                    <ShareIcon className='h-4'/>
                    <p className='text-xs sm:text-base' >Share</p>
                </div>
            </div>
        </div>
    )
}

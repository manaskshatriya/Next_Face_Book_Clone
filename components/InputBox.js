import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export default function InputBox() {

  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((document) => {
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${document.id}`);
        uploadString(storageRef, imageToPost, "data_url").then((snapshot) => {
          getDownloadURL(snapshot.ref).then((URL) => {
            setDoc(
              doc(db, "posts", document.id),
              { postImage: URL },
              { merge: true }
            );
            console.log("File available at ", URL);
          });
          removeImage();
        });
      }
    });

    inputRef.current.value = "";
  };

const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerevent) => {
      setImageToPost(readerevent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
     
  return (
    <div className='bg-white p-2 rounded-2xl shadow-[0px_2px_20px_4px_rgba(0,0,0,0.56)] shadow-blue-500  hover:shadow-[0px_2px_50px_4px_rgba(0,0,0,0.56)] hover:shadow-blue-500 text-gray-500 font-medium mt-6' >
      <div className='flex space-x-4 p-4 items-center'>
        <Image className='rounded-full' src={session.user.image.toString()} width={40} height={40}  />
        <form className='flex flex-1' >
            <input ref={inputRef} className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type="text" placeholder={`What's on your mind ${session.user.name}`} />
            <button hidden type='submit' onClick={sendPost}  >Submit</button>
            {imageToPost && ( <div onClick={removeImage} className = "flex flex-col"  >
              <img className='object-contain h-10 w-10 hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer' src={imageToPost} alt="" />
              <p className='text-xs text-red-500 text-center' >Remove </p>
            </div> )}
        </form>
      </div>
      <div className='flex justify-evenly p-3 border-t' >
        <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer' >
            <VideoCameraIcon className='h-7 text-red-500' ></VideoCameraIcon>
            <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div onClick={()=>filepickerRef.current.click()} className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer' >
            <CameraIcon className='h-7 text-green-400'></CameraIcon>
            <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
            <input ref={filepickerRef} hidden onChange={addImageToPost} type='file' ></input>
        </div>
        <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer' >
            <EmojiHappyIcon className='h-7 text-yellow-500'></EmojiHappyIcon>
            <p className='text-xs sm:text-sm xl:text-base'>Feeling Activity</p>
        </div>
        
      </div>
    </div>
  )
}

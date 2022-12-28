import React, { useEffect, useState } from 'react'
import {
    collection,
    onSnapshot,
    orderBy,
    query,
  } from "firebase/firestore";
import { db } from '../firebase';
import Post from './Post';


export default function Posts() {
    const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return () => {
      unSubscribe();
    };
  }, [db]);
  
  const postsList = posts.map((post)=>{
    console.log(post.data());
    return(
        <Post
        email={post.data().email}
        image={post.data().image}
        message={post.data().message}
        name={post.data().name}
        postImage={post.data().postImage}
        timestamp={post.data().timestamp}
        />
    )
  })
  
  return (
    <div>
         {postsList}
    </div>
  )
}

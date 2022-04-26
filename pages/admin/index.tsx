import { getAuth,onAuthStateChanged, signOut as signout } from "firebase/auth";
import { useAuth } from '../../lib/authContext'
import { useContext, useState } from 'react';
import AuthCheck from "../../components/misc/authcheck";
import { useCollection, useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { doc, getDoc, collection, addDoc, setDoc, getDocs, query, where, limit, orderBy} from 'firebase/firestore';
import { firestore } from '../../lib/firebaseConfig/init'
import { authContext } from '../../lib/authContext'
import { getUserWithUsername, postToJSON } from '../../lib/firebaseConfig/init';
import PostFeed from "../../components/users/PostFeed";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import kebabCase from 'lodash.kebabcase';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import toast from 'react-hot-toast';
import 'flowbite';
import { getValueTransition } from "framer-motion/types/animation/utils/transitions";
import { COUNTRIES } from '../../lib/countries';
import { CountrySelector } from '../../lib/selector';
import React from 'react'
import { SelectMenuOption } from '../../lib/types';
import ExchangeForm from "../../components/form/PostForm";
import { nanoid } from "nanoid";


export default function AdminPostsPage(props:any) {
    return (
      <main>
        <AuthCheck>
          {/* <PostList /> */}
          <CreateNewPost />
        </AuthCheck>
      </main>
    );
  }

export function PostList() {
    const auth = getAuth();
    const { username } = useContext(authContext);
    // const [posts, setPosts] = useState([]);
    const uid:string = auth?.currentUser?.uid!;
    const postsQuery = query(
        collection(firestore, "users", uid, "posts"), 
        // where('published','==', true),
        orderBy('createdAt','desc'));
    const [querySnapshot] = useCollection(postsQuery);
    const posts = querySnapshot?.docs.map((doc) => doc.data());

    return (
        <>
          <h1>Manage your Posts</h1>
          <PostFeed posts={posts} admin />
        </>
      );
}


export function CreateNewPost () {

  const slug = nanoid();

    return (
      <>
      <ExchangeForm slug={slug}/>
      </>
    );
}
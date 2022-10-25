import Link from 'next/link';
import ImageFeed from '../imgs/ImageFeed';
import MemberStack from '../members/MemberStack';
import { useContext, useState, useEffect} from 'react';
import { authContext } from '../../lib/authContext'
import { query, doc, getDoc, collection, getDocs, where, collectionGroup} from 'firebase/firestore';
import { getUserWithUsername, communityToJSON, memberToJSON} from '../../lib/firebaseConfig/init';
import { firestore } from '../../lib/firebaseConfig/init'


export default function CommunityProfilePage(props : any) {
    const community = props.community;
    const [admin, setAdmin] = useState<boolean>(false);
    console.log("community is", community);
   

    return(
        <> 
        <Link href="/map">
         <img className=' right-12 top-40  cursor-pointer h-10 w-10 absolute z-20 lg:right-28 lg:top-44 rounded-full' src='/community/cross.png'  />
        </Link>

        <div className=' mx-4 mt-40 h-80 w-80  md:h-50 md:w-50 sm:ml-4 sm:mt-4 sm:h-52 sm:w-52 lg:h-64 lg:w-64 lg:ml-10 lg:mt-16 absolute border-2 border-[#0000FF] bg-[#0000FF]'>
        <img className="z-20  absolute w-full h-full object-cover object-center" src={community.avatarUrl? community.avatarUrl : "https://s2.loli.net/2022/05/02/bftaDElM8VYuxn5.jpg" }alt=""/>

            <div className=" h-36 w-36 p-4 ">

            <div className="absolute w-full h-full object-cover object-center bg-[#0000FF] z-0" />
            </div>
            <div className='flex pt-52 gap-x-8 lg:gap-x-3'>
                <a target="_blank" rel="noreferrer" href={community.website}>
                <img src='/icons/Icon-link.png'/>
                </a>
                <a target="_blank" rel="noreferrer" href={community.twitter}>
                <img src='/icons/Icon-twitter.png'/>
                </a>
                <a target="_blank" rel="noreferrer" href={community.github}>
                <img src='/icons/Icon-github.png'/>
                </a>
                <a target="_blank" rel="noreferrer" href={community.instagram}>
                <img src='/icons/Icon-ig.png'/>
                </a>
            </div>

        </div>
        <div className='absolute mt-8 mx-4 lg:ml-96 lg:mt-16 lg:mb-10'>
            <h1 className='text-5xl  font-mono font-bold  lg:mr-0 mr-60 text-[#0000FF]'>
            {community.communityName}
            </h1>
            <img className="mt-4 w-5/6" src='/community/line.png' /> 
            <div className='pt-16'>
            <div className='flex flex-wrap mt-96 mx-8 lg:mt-6 '>
                {community.tags && community.tags.map((tag:any) => (
                    <span className=' mt-2 text-[#FFDDED] bg-[#0000FF] rounded-3xl py-2 px-4  font-mono font-medium text-xl mr-2' key={tag}>#{tag}</span>
                ))}
            </div>
            </div>
            <div className='flex pt-4'>
                <img className="mt-4 " src='/community/pin.png' />
                <p className='ml-4 mt-4 text-[#0000FF] font-mono font-thin '>{community.city}, {community.state}, {community.country}</p>
            </div>

            <div className=' w-80 flex flex-wrap mx-2  my-4 md:h-50 md:w-50 sm:ml-4 sm:mt-4 sm:h-52 sm:w-52 lg:h-7/8 lg:w-full absolute bg-[#0000FF]'>
                <p className='my-4 mx-8 text-white font-mono '>
                    {community.intro}
                </p>
            </div>


        </div>
        
        </>
    );

}
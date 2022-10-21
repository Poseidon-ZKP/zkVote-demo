import { collectionGroup,collection, query, where, getDocs, orderBy, limit, startAfter, getDoc} from "firebase/firestore";  

import { firestore } from '../../lib/firebaseConfig/init'
import { getUserWithUsername, communityToJSON } from '../../lib/firebaseConfig/init';
import { useEffect, useState } from "react";

  export default function CommunityList() {

    // const [communities, setcommunities] = useState(props.communities);

    // console.log("communities", communities);
    const [communities, setcommunities] = useState<any>();
    useEffect(() => {
      const getCommunities = async () => {
      const communitiesQuery = query(
        collection(firestore, 'communities'),
        )
      setcommunities((await getDocs(communitiesQuery)).docs.map(communityToJSON));
      console.log("communities", communities);
      // setcommunities(communities);
      }
      getCommunities();
    
    }, [])


    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl text-center pb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#47FF43] via-[#6184FF] to-[#FF43EC] font-extrabold sm:text-4xl md:text-4xl">
            Explore Meaningful Communities
            </h1>

          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {communities && communities.map((community:any) => (
              <div key={community.slug} className="group relative">
                <div className="border-4 border-[#0000FF] min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <div className="h-60 w-60 mt-4 ml-4 mr-4 mb-2 border-4 border-[#0000FF] rounded-3xl">
                  <img
                    src={community.avatarUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                  </div>
                  <div>
                    <h3 className="text-md font-bold font-inter text-[#0000FF] text-center">
                      <a href={`/community/${community.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {community.communityName}
                      </a>
                    </h3>
                    <p className=" text-sm font-inter text-[#0000FF] text-center">{community.city}, {community.state}, {community.country}</p>
                  </div>
                </div>
  
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
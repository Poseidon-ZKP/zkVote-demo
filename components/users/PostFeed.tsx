import Link from 'next/link';
import { Container } from '@mui/material'


interface Props {
    posts: any
    admin: boolean
}

export default function PostFeed(props: Props): any {
    const {posts, admin} = props;
    return posts ? posts.map((post:any) =><PostItem post={post} key={post.slug} admin={admin} />) : null;
}

interface PostProps{
    post: any
    admin: boolean
}


function PostItem(props: PostProps) : any {
    const post = props.post;
    const admin = props.admin;
    
    const wordCount = post?.content.toString().trim().split(/\s+/g).length;
    const minutesToRead = (wordCount / 100 + 1).toFixed(0);
    
    return (
      <>
        <div className="mt-8 max-w-3xl mx-auto gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">

            {/* <div className="bg-white shadow overflow-hidden sm:rounded-md"> */}
            <ul role="list" className="divide-y divide-gray-200">
                <li>
                <a href={`/${post.username}/${post.slug}`} className="block hover:bg-gray-50">
                    <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                        <div className="truncate">
                        <div className="flex text-sm">
                          <Link href={`/${post.username}/${post.slug}`}>
                            <a>
                            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</p>
                            </a>
                          </Link>
                        </div>
                        <div className="flex">
                            {/* <div className="flex items-center text-sm text-gray-500"> */}
                            <Link href={`/${post.username}`}>
                            <a>
                              <i>By @{post.username}</i>
                            </a>
                          </Link>
                 
                        </div>
                        <div className="flex space-x-4">
                          {admin && (
                              <>
                                <Link href={`/admin/${post.slug}`}>
                                  <h3>
                                    <button className="btn-blue">Edit</button>
                                  </h3>
                                </Link>
                                {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
                              </>
                            )}
                        </div>

                        </div>
                        <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                        <div className="flex overflow-hidden -space-x-1">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Dries Vincent"/>

                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Lindsay Walton"/>

                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Courtney Henry"/>

                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Tom Cook"/>
                        </div>
                        </div>
                    </div>
                    <div className="ml-5 flex-shrink-0">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    </div>
                </a>
            </li>
          </ul>
        </div>
        </div>
      {/* <a href={`/${post.username}/${post.slug}`} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}

      {/* <Link href={`/${post.username}/${post.slug}`}>
        <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
        </a>
      </Link>

      <Link href={`/${post.username}`}>
        <a>
          <i>By @{post.username}</i>
        </a>
      </Link> */}

      {/* <footer>
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>
        <span className="push-left">💗 {post.heartCount || 0} Hearts</span>
      </footer> */}

      {/* If admin view, show extra controls for user */}
      {/* {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
        </>
      )} */}
    {/* </a> */}
    </>
    );


}
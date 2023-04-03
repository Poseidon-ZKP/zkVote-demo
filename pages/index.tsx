import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { motion } from "framer-motion"
export default function Home(): any {
  return (
    <>
      <Head>
        <title>zkVote</title>

      </Head>
      <main className=" min-h-screen bg-gradient-to-r from-[#F5F3F6] to-[#F1E1EC] pb-14">


        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <div className="sm:text-left lg:text-left">
            <div className="px-4  pt-6 sm:pt-32 ">

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className='flex'>
                  <div className=" sm:ml-6 text-left">
                    <h1 className="text-lg  tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-4xl lg:text-5xl">
                      <div className='flex'>
                        <span className="block xl:inline">Vote&nbsp; </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#F2E1ED] to-[#5FFF37] xl:inline"> Anonymously &</span>
                      </div>
                      <span className="block text-[#5FFF37] xl:inline"> Confidently</span>
                    </h1>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                      <div className="rounded-md shadow">
                        <a target="_blank" rel="noreferrer" href="https://vote.zkvote.app/" className="w-full flex  py-2 px-8 border border-transparent text-base font-medium rounded-md text-white bg-black md:text-lg md:px-10"> Launch App</a>
                      </div>

                    </div>
                  </div>
                  <img className="w-20 h-20 mt-5 sm:w-32 sm:h-32 sm:mt-0 ml-11  lg:ml-60  md:ml-24 md:w-60 md:h-60 xl:ml-96" src="/icons/vote.png" />

                </div>
                <div className='mt-20 sm:mt-48 md:mt-24 justify-center'>
                  <img src="/images/1.png"></img>
                  <h1 className='text-2xl font-bold sm:font-normal mt-10 sm:mt-28 sm:text-5xl text-center'>Create A Group With Ease</h1>
                  <p className='sm:mt-4 text-lg text-center'>Create a group within 3 steps</p>
                  <div className='grid grid-cols-3 flex flex-col gap-4 mt-5 sm:mt-10'>
                    <div className='flex flex-col'>
                      <img src="/images/2.png"></img>
                    </div>
                    <div className='flex flex-col'>
                      <img src="/images/3.png"></img>
                    </div>
                    <div className='flex flex-col'>
                      <img src="/images/4.png"></img>
                    </div>

                  </div>
                  <h1 className='text-2xl font-bold sm:font-normal  mt-10 sm:mt-28 sm:text-5xl text-center'>Add Your Proposals</h1>
                  <p className='sm:mt-4 text-lg text-center'>Test out your ideas</p>
                  <div className='grid grid-cols-2 flex flex-col gap-4 mt-5 sm:mt-10'>
                    <div className='flex flex-col'>
                      <img src="/images/5.png"></img>
                    </div>
                    <div className='flex flex-col'>
                      <img src="/images/6.png"></img>
                    </div>
                  </div>
                  <h1 className='mt-10 text-2xl font-bold sm:font-normal sm:mt-28 sm:text-5xl text-center'>Finally, You Can Say No</h1>
                  <p className='sm:mt-4 text-lg text-center'>With zkVote&apos;s anonymous voting, you can feel free to disagree</p>
                  <div className='grid grid-cols-2 flex flex-col gap-4 mt-16'>
                    <div className='flex flex-col'>
                      <img src="/images/7.png"></img>
                    </div>
                    <div className='flex flex-col'>
                      <h1 className='font-bold sm:mt-40 md:mt-20 sm:text-3xl text-left ml-4'>When You Think It&apos;s a Bad Idea...</h1>
                      <p className='mt-4 text-xs sm:text-lg italic text-left ml-4'>&quot;I&apos;m not exactly sure if we should spend half of our budget to throw a virtual music festival during bear market...&quot;</p>

                    </div>

                  </div>
                  <div className='grid grid-cols-2 flex flex-col gap-4 mt-10 sm:mt-16'>
                    <div className='flex flex-col'>
                      <h1 className='font-bold sm:mt-40 md:mt-14 sm:text-3xl text-left ml-4'>Speak Up Without Fear</h1>
                      <p className='mt-4 text-xs sm:text-lg text-left ml-4'>Vote exactly what you think is the right move without the fear of retaliation or coercion. All transactions are on-chain and anonymous.</p>

                    </div>
                    <div className='flex flex-col'>
                      <img src="/images/8.png"></img>
                    </div>
                  </div>

                </div>
                <h1 className='mt-10 sm:mt-28 text-3xl font-bold sm:font-normal sm:text-5xl text-center '>Demo</h1>
                <div className='flex justify-center my-7 sm:my-14'>
                  <iframe width="800" height="479" src="https://www.youtube.com/embed/cS_YX8UHk74" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
              </main>

            </div>
            <div className='bg-gradient-to-r from-[#33201F] via-[#3A435C] to-[#1D1D1D] pb-10 sm:pb-20 '>
              <h1 className='pt-10 sm:pt-20 sm:text-4xl font-bold text-center text-white '>Let us know any feedbacks!</h1>
              <h1 className='text-xs pt-2 sm:pt-4 sm:mt-4 sm:text-xl text-center text-white '>We can&apos;t improve without the feedbacks from you.</h1>
              <h1 className='text-xs sm:mt-2 sm:text-xl text-center text-white '>Let us know what you want us to build!</h1>
              <h1 className='text-xs sm:mt-6 sm:text-xl text-center text-white '>Reach out anytime at lucy@pdn.xyz</h1>

            </div>
          </div>
        </motion.div>



      </main>

    </>
  )
}

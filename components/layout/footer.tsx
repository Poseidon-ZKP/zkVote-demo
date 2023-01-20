
import Link from 'next/link';
export default function Footer(props: any) {

    return <footer className="p-4 mt-8 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 lg:flex lg:items-center lg:justify-between lg:p-6 ">
        <div className='ml-4'>
            <img src="/icons/zkvote.png" className='w-48'></img>
            <div className='flex mt-4'>
                <img className="w-16" src="icons/pdn.png"></img>
                <p className='text-gray-500 mt-4'>Powered by Poseidon Lab. All Rights Reserved.</p>
            </div>
        </div>
        <div className='mr-16'>
            <p className='text-gray-400 font-bold'>PARTNERSHIP</p>
            <p className='text-gray-500 mt-4'>Poseidon ZKP</p>
            <p className='text-gray-500 mt-2'>Manta Network</p>

        </div>

    </footer>
}
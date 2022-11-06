import React from 'react'
import Image from 'next/image';
import StartImg from '../../public/images/start.png';
import Link from 'next/link';
// type Props = {
//   name: string;
//   age: string;
//   account: string;
//   hobbies: string[];
// }

const GetStartedPage = () => {

  return (
    <div className='flex flex-col justify-center items-center mb-6'>
      <h1 className='text-white font-nunito text-xl font-extrabold'>Welcome to the pharmacy</h1>
      <div className='flex flex-col justify-center items-center gap-4'>
        <Image src={StartImg} alt="Get Started" width={500} height={500} />

        <a href="/api/auth/login" className='border border-white p-3 rounded-full text-white text-lg font-nunito'>Get Started</a>

      </div>
    </div>
  )
}

export default GetStartedPage
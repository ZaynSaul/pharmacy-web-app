import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUser,
  faKey,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

export default function Register() {

  return (
    <div className='w-full max-w-xs font-nunito flex flex-col justify-center items-center'>
      <h3 className='text-white text-lg text-center mb-3'>Create an account</h3>
      <form className='bg-transparent px-8 mb-4'>
        <div className='mb-2 w-full'>
          <label className='block text-white text-sm font-bold mb-2' >
            Username
          </label >
          <div className='flex items-center shadow appearance-none border rounded w-full'>
            <FontAwesomeIcon icon={faUser} className='w-[40px] text-white' />
            <input className='bg-transparent text-white rounded outline-none border-none focus:outline-none focus:shadow-outline  py-2 w-full' id='username' type='text' placeholder='Name' />
          </div>
        </div>
        <div className='mb-2 w-full'>
          <label className='block text-white text-sm font-bold mb-2' >
            Email
          </label >
          <div className='flex items-center shadow appearance-none border rounded w-full'>
            <FontAwesomeIcon icon={faEnvelope} className='w-[40px] text-white' />
            <input className=' bg-transparent text-white rounded outline-none border-none focus:outline-none focus:shadow-outline  py-2 w-full' id='email' type='email' placeholder='someone@examplw.com' />
          </div>
        </div>
        <div className='mb-2'>
          <label className='block text-white text-sm font-bold mb-2' >
            Password
          </label>
          <div className='flex items-center border border-red-500 shadow appearance-none  rounded w-full'>
            <FontAwesomeIcon icon={faKey} className='w-[40px] text-white' />
            <input className=' bg-transparent text-white rounded outline-none border-none py-2 w-full focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' />
          </div>
          <p className='text-red-500 text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline' type='button'>
            Sign up
          </button>
        </div>
        <div className='flex items-center justify-center mt-4 gap-2 text-sm'>
          <p className='text-sm text-gray-500'>
            Already having an account?
          </p>
          <Link href='/'>
            <p className='text-blue-500 font-bold'>Sign in</p>
          </Link>
        </div>
      </form>

    </div>
  )
}

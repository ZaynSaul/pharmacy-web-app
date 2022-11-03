import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

export default function SignIn() {

  return (

    <div className='w-full max-w-xs font-nunito flex flex-col justify-center items-center'>
      <h3 className='text-white text-lg text-center mb-3'>Sign in to your account</h3>
      <form className='bg-transparent px-8 mb-4'>
        <div className='mb-2 w-full'>
          <label className='block text-white text-sm font-bold mb-2' >
            Email
          </label >
          <div className='flex items-center shadow appearance-none border rounded w-full'>
            <FontAwesomeIcon icon={faEnvelope} className='w-[40px] text-white' />
            <input className=' bg-transparent text-white rounded outline-none border-none focus:outline-none focus:shadow-outline  py-2 w-full' id='username' type='email' placeholder='Username' />
          </div>
        </div>
        <div className='mb-2'>
          <label className='block text-white text-sm font-bold mb-2' >
            Password
          </label>
          <div className='flex items-center border border-red-500 shadow appearance-none  rounded w-full'>
            <FontAwesomeIcon icon={faKey} className='w-[40px] text-white' />
            <input className='bg-transparent text-white rounded outline-none border-none py-2 focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' />
          </div>
          <p className='text-red-500 text-xs italic'>Please choose a password.</p>
        </div>
        <div className='flex items-center justify-center mb-2 text-sm'>
          <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
            Forgot Password?
          </a>
        </div>
        <div className='flex items-center justify-between'>
          <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline' type='button'>
            Sign In
          </button>
        </div>
        <div className='flex items-center justify-center mt-4 gap-2 text-sm'>
          <p className='text-sm text-gray-500'>
            Don{"'"}t have an account?
          </p>
          <Link href='/register' >

            <p className='text-blue-500 font-bold'>Sign up</p>
          </Link>
        </div>
      </form>

    </div>

  )
}

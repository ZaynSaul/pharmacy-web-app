import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClose,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip, Avatar } from '@material-tailwind/react';

export default function Logout({ isOpen, setIsOpen }: any) {
  return (
    <div
      className={`absolute top-16 right-6 w-56 z-50 bg-gradient-to-r from-[#0F172A] to-[#193152] rounded divide-y divide-gray-100 shadow  ${isOpen ? 'block' : 'hidden'
        }`}
    >
      <div className='  w-full'>
        <div className='relative'>
          <Tooltip title='Close' placement='top' content='Close'>
            <button
              onClick={() => setIsOpen(false)}
              type='button'
              className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-black/70 hover:text-gray-900  text-sm  ml-auto w-[30px] h-[30px] rounded-full flex items-center justify-center dark:hover:bg-gray-800 dark:hover:text-white'
              data-modal-toggle='popup-modal'
            >
              <FontAwesomeIcon
                icon={faClose}
                className=' text-2xl text-gray-100'
              />
              <span className='sr-only'>Close modal</span>
            </button>
          </Tooltip>

          <div className='p-6 text-center'>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className=' text-3xl text-red-500'
            />
            <p className='mb-5 text-md font-normal text-gray-500 dark:text-gray-400'>
              Ready to leave?
            </p>
            <h3 className='mb-5 text-md font-normal text-gray-500 dark:text-gray-400'>
              Click on Yes to Logout
            </h3>
            <div className='flex justify-between items-center'>
              <a href='/api/auth/logout'
                type='button'
                className='text-white bg-green-500 hover:bg-transparent   rounded-lg hover:border hover:border-green-500  text-sm font-medium px-5 py-2.5 hover:text-green-500 focus:z-10 '
              >
                Yes
              </a>
              <button
                onClick={() => setIsOpen(false)}
                type='button'
                className='text-white bg-red-500  rounded-lg border border-red-500 text-sm font-medium  p-2  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-gray-600'
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="flex items-center justify-between px-12 h-16 mt-3">
            <div>
              
            </div>
            <div className="flex items-center space-x-8">
                <a className='text-gray-700 font-medium text-[15px]'>About</a>
                <a className='text-gray-700 font-medium text-[15px]'>Men</a>
                <a className='text-gray-700 font-medium text-[15px]'>Women</a>
                <a className='text-gray-700 font-medium text-[15px]'>Collections</a>
            </div>
            <div>
              <div className="flex space-x-6 pb-1">
                <div className="text-gray-800">
                  <MagnifyingGlassIcon className='w-[21px] h-[21px]'/>
                </div>
                <div className="text-gray-800">
                  <UserIcon className='w-[21px] h-[21px]'/>
                </div>
                <div className="text-gray-800">
                  <HeartIcon className='w-[21px] h-[21px]'/>
                </div>
                <div className="text-gray-800">
                  <ShoppingBagIcon className='w-[21px] h-[21px]'/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
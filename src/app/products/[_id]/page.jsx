import { HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'



export default async function Page() {
  return (
    <div>
      <div className="flex justify-end lg:px-16 mt-40">
        <div></div>
        <div></div>
        <div className='w-2/6'>
          <div className="flex justify-between">
            <h1 className="text-gray-900 font-bold text-3xl">Pursuit Haydon Tee</h1>
            <HeartIcon strokeWidth={2} className='h-6 w-6 text-gray-800'/>
          </div>
          <h3 className="text-gray-700 text-lg mt-2">Tech Jersey T-Shirt</h3>
          <h3 className="text-gray-900 font-semibold text-lg mt-3">Rs 28,500</h3>
        </div>
      </div>
    </div>
  )
}
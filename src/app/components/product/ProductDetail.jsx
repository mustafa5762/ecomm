"use client"

import Rating from '@/app/components/product/Rating'
import { Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React, { Fragment, useState } from 'react'

function ProductDetail({data}) {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(data.colors[0])

  return (
    <>

<Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-60" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex m-3">
              <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.19,1,.22,1)] duration-1000 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-[cubic-bezier(.19,1,.22,1)] duration-1000 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl rounded-md">
                  <div className="flex items-center justify-center px-8 border-b border-gray-200 pb-3">
                    <h2 className="text-lg font-semibold text-gray-900">Choose Color</h2>
                  </div>


                <div className='p-12 flex items-center space-x-8'>
                    {
                        data.colors.map(color => 
                            <div onClick={() => setSelectedColor(color)}>
                                <div className={`border p-3 bg-gradient-to-b from-gray-100 to-transparent ${color === selectedColor ? 'border-gray-400' : ''}`}>
                                    <div>
                                        <img src={color.colorImage} alt="" />
                                    </div>
                                    <div className="text-center text-gray-700 capitalize">
                                        {color.name}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
    

    <div className="grid grid-cols-1 lg:grid-cols-3 mt-20">
        <div className="col-span-2">
          <div className="flex space-x-1">
            <div>
              <img className='bg-gray-100' src={selectedColor.colorImage} alt="" />
            </div>
            <div>
              <img className='bg-gray-100' src={selectedColor.colorImage2} alt="" />
            </div>
          </div>
        </div>
        <div className="py-4 px-3 lg:px-12">
          <h1 className="text-gray-900 font-bold text-2xl lg:text-3xl capitalize">{data.name}</h1>
          <div className="mt-2"></div>
          <Rating/>
          <div className="flex items-center justify-between mt-4">
            <h3 className="font-semibold text-lg lg:text-xl text-gray-900">Rs {data.price}</h3>
            <h5 className="text-orange-600 text-xs lg:text-sm font-semibold">Final Sale -60%</h5>
          </div>
          <div className="flex items-center justify-between mt-4 space-x-2">
            <div onClick={() => setMobileFiltersOpen(true)} className="border border-gray-200 px-4 py-2.5 w-3/6 flex items-center justify-between rounded-sm">
              <span className='font-semibold text-sm text-gray-900 capitalize'>Color: {selectedColor.name}</span>
              <span className="text-gray-800">
                <ChevronDownIcon className='w-4 h-4'/>
              </span>
            </div>
            <div className="border border-gray-200 px-4 py-2.5 w-3/6 flex items-center justify-between rounded-sm">
              <span className='font-semibold text-sm text-gray-900'>Select Size</span>
              <span className="text-gray-800">
                <ChevronDownIcon className='w-4 h-4'/>
              </span>
            </div>
          </div>
            <button className="w-full mt-4 font-semibold text-sm bg-gray-900 flex-1 py-2.5 text-white rounded-sm hover:bg-gray-800 transition">Add to Bag</button>
        </div>
      </div>
      </>
  )
}

export default ProductDetail
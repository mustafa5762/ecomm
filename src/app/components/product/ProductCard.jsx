"use client"

import Link from 'next/link'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { RadioGroup } from '@headlessui/react'


const colors = [
  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function ProductCard({product}) {

  const [hover, sethover] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0])

  const HeartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>


  return (
    <div>
        <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} className='relative bg-[#e0e0e0]'>
            <img className='rounded-sm' src="/13.png" alt="" />
            <Link href={"/products/ss"}>
              <AnimatePresence>
                {hover && <motion.img initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} src={product.image2} className='absolute top-0 left-0' alt="" />}
              </AnimatePresence>
            </Link>
            {hover && <div className="absolute top-0 right-0">
            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4 mr-4">
                              <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                              <span className="flex flex-col justify-center space-y-2">
                                {colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedClass,
                                        active && checked ? 'ring ring-offset-0.5' : '',
                                        !active && checked ? 'ring-1' : '',
                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="span" className="sr-only">
                                      {color.name}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.class,
                                        'h-5 w-5 rounded-full border border-black border-opacity-10'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </span>
                            </RadioGroup>
            </div>}
            {hover && 
            <div className='absolute top-0 left-0 ml-4 mt-4'>
              <div className="text-gray-900">
                {HeartIcon}
              </div>
            </div>
            }
        </div>
        <div className="mt-4 ml-2">
            <h5 className="text-orange-600 text-[11px] lg:text-[13px] font-semibold">Final Sale -60%</h5>
            <h4 className="text-xs lg:text-sm text-gray-900 font-semibold mt-1">{product.name}</h4>
            <h5 className="text-gray-800 text-[11px] lg:text-[13px] mt-1.5 font-medium">Rs {product.price}</h5>
        </div>
    </div>
  )
}

export default ProductCard
"use client"

import Link from 'next/link'
import { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

function ProductCard({product}) {

  const [hover, sethover] = useState(false)

  return (
    <Link href="/hello">
        <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} className='relative'>
            <img className='rounded-sm' src={product.image} alt="" />
            <AnimatePresence>
              {hover && <motion.img initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} src={product.image2} className='absolute top-0 left-0' alt="" />}
            </AnimatePresence>
            <div className="absolute top-[10px] right-[10px] h-32 w-6 bg-black"></div>
        </div>
        <div className="mt-4 ml-2">
            <h5 className="text-orange-600 text-[11px] lg:text-[13px] font-semibold">Final Sale -60%</h5>
            <h4 className="text-xs lg:text-sm text-gray-900 font-semibold mt-1">{product.name}</h4>
            <h5 className="text-gray-800 text-[11px] lg:text-[13px] mt-1.5 font-medium">Rs {product.price}</h5>
        </div>
    </Link>
  )
}

export default ProductCard
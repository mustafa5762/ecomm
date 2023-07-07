"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

function ProductCard({product}) {

  const [image, setimage] = useState(false)

  return (
    <Link href={`/products/${product._id}`}>
        <div onMouseEnter={() => setimage(true)} onMouseLeave={() => setimage(false)} className='relative'>
            <img src={product.image} alt={product.name} />
            <AnimatePresence>
              {image && <motion.img initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.45}}  className='absolute top-0 left-0 w-full max-h-full' src={product.images[0]} alt={product.name} />}
            </AnimatePresence>
        </div>
        <div className="mt-4">
            <h4 className="text-[13px] gray-900 font-medium tracking-wide">{product.name}</h4>
            <h5 className="gray-600 text-[13px] mt-1.5">£{product.price}</h5>
        </div>
    </Link>
  )
}

export default ProductCard
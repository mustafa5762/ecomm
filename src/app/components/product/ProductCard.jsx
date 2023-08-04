"use client"

import Link from 'next/link'
import { useState } from 'react'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function ProductCard({product}) {

  const [hover, sethover] = useState(false)
  const [selectedColore, setSelectedColore] = useState(product.colors[0])

  const HeartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

  const changeColor = (color) => {
   setSelectedColore(color)
  }


  return (
    <div>
        <div onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} className='relative bg-gray-100'>
            <img className='rounded-sm transition duration-300' src={selectedColore.colorImage} alt="" />
            <Link href={`/products/${product._id}`}>
                <img src={selectedColore.colorImage2} className={`bg-gray-100 transition-opacity duration-500 absolute top-0 left-0 ${hover ? `opacity-100` : `opacity-0`}`} alt="" />
            </Link>
            {hover && <div className="absolute top-0 right-0 mr-4">
            {product.colors.map(color => 
              <div onMouseEnter={() => changeColor(color)} key={color.name}>
                <div className={`${color.class} h-5 w-5 rounded-full mt-3`}></div>
              </div>  
            )}
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
            <h5 className="text-orange-600 text-[11px] lg:text-[12px] font-semibold">Final Sale -60%</h5>
            <h4 className="text-xs lg:text-sm text-gray-900 font-semibold mt-1">{product.name}</h4>
            <h5 className="text-gray-800 text-[11px] lg:text-[13px] mt-1.5 font-medium">Rs {product.price}</h5>
        </div>
    </div>
  )
}

export default ProductCard
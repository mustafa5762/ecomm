"use client"

import Link from 'next/link'

function ProductCard({product}) {
  return (
    <Link href="/hello">
        <div className=''>
            <img src="/hrllo.png" alt="" />
        </div>
        <div className="mt-4">
            <h5 className="text-orange-600 text-[13px] font-semibold">Final Sale -60%</h5>
            <h4 className="text-sm text-gray-900 font-semibold mt-1">Brave Lion T-Shirt</h4>
            <h5 className="text-gray-700 text-[12px] mt-1.5 font-medium">PKR 1459</h5>
        </div>
    </Link>
  )
}

export default ProductCard
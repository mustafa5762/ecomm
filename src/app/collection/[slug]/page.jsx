import FilterSidebar from '@/app/components/Sidebar/FilterSidebar'
import Sidebar from '@/app/components/Sidebar/Sidebar'
import ProductCard from '@/app/components/product/ProductCard'
import React, { Suspense } from 'react'

async function getData() {
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function Page() {
  const data = await getData()

  return (
    <div className='mt-40'>
        <div className="flex px-4 lg:px-12 items-center justify-between">
          <div className="gray-900 font-medium tracking-wide text-[15px]">T-Shirts</div>
          <FilterSidebar/>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-8 px-4 lg:px-12 mt-6">
            {
                data.map(product => 
                <Suspense>
                  <ProductCard product={product}/>
                </Suspense>)
            }
        </div>
        <div className="h-screen"></div>
    </div>
  )
}

export default Page
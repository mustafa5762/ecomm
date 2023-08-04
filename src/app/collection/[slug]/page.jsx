import Filters from '@/app/components/Category/Filter'
import ProductGrid from '@/app/components/product/ProductGrid'
import React from 'react'

function Page() {
  return (
    <div>
      <Filters/>
      <ProductGrid/>
      <div className="h-screen"></div>
    </div>
  )
}

export default Page
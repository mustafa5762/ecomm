import React from 'react'
import ProductCard from './ProductCard'

async function getData() {
    const res = await fetch('https://sore-cyan-twill.cyclic.app/api/products', { next: { revalidate: 10 } })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

async function ProductGrid() {
    const data = await getData()
  return (
        <div className="lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[2px] gap-y-8">
                {data.map(product => <ProductCard product={product} key={product._id}/>)}
            </div>
        </div>
  )
}

export default ProductGrid
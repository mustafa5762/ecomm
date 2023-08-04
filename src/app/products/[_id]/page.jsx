import ProductDetail from '@/app/components/product/ProductDetail'
import React from 'react'

async function getData(_id) {
  const res = await fetch(`https://sore-cyan-twill.cyclic.app/api/products/${_id}`, { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}




export default async function Page({ params }) {
  const data = await getData(params._id)

  return (
    <div>
      <ProductDetail data={data}/>
    </div>
  )
}
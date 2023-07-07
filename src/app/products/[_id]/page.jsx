import React from 'react'


async function getData(_id) {
  const res = await fetch(`https://sore-cyan-twill.cyclic.app/api/products/${_id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function Page({ params }) {
  const data = await getData(params._id)

  return (
    <div>
      <div className="flex">

        <div className="w-4/6">
          <div className="grid grid-cols-2 gap-2">
            <img className='h-full w-full' src={data.image} alt={data.image} />
            <img className='h-full w-full' src={data.images[0]} alt={data.image} />
            <img className='h-full w-full' src={data.images[1]} alt={data.image} />
            <img className='h-full w-full' src={data.images[2]} alt={data.image} />
            <img className='h-full w-full' src={data.images[3]} alt={data.image} />
          </div>
        </div>

        <div className="w-2/6 px-10 mt-40">
          <h1 className="text-neutral-900 text-2xl">Valorant Agent Sweatshirt</h1>
          
        </div>

      </div>
    </div>
  )
}
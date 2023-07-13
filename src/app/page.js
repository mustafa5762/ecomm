"use client"

import React, { useRef } from 'react'

const Page = () => {

    const Hello = useRef()

    const get = () => {
        Hello.current.play();
    }
  return (
    <div>
        
    </div>
  )
}

export default Page
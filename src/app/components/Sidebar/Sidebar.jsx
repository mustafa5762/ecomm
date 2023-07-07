"use client"

import React from 'react'
import {motion} from 'framer-motion'

function Sidebar({children}) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.6,ease:[.19,1,.22,1]}} className='fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.5)] p-2.5 z-50 flex justify-end'>
        <motion.div initial={{width:0,opacity:0}} animate={{width:400,opacity:1}} exit={{width:0,opacity:0}} transition={{duration:0.6,ease:[.19,1,.22,1]}} className="w-[450px] h-full rounded-md bg-white shadow-md overflow-y-scroll">
          <motion.div initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.4,delay:0.3,ease:[.19,1,.22,1]}}>
            {children}
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Sidebar
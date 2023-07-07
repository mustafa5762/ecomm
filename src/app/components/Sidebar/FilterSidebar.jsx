"use client"

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { AnimatePresence } from 'framer-motion'

function FilterSidebar() {

    const sortOptions = ['Recommended','Price Low to High','Price High to Low','Highest Rated','Popular'] 

    const categoryOptions = ['GTA T-Shirts','Anime T-Shirts','Cricket T-Shirts','Valorant T-Shirts','Typography T-Shirts']

    const sizeOptions = ['27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45']

    const colorOptions = [
      {
        name: 'White',
        class: 'bg-200'
      },
      {
        name: 'Black',
        class: 'bg-900'
      },
      {
        name: 'Gray',
        class: 'bg-500'
      },
      {
        name: 'Sand',
        class: 'bg-[#BFB286]'
      },
      {
        name: 'Blue',
        class: 'bg-blue-700'
      },
    ]

    const [open, setopen] = useState(false)

    const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="16" height="14" viewBox="0 0 16 14">
    <path fill="currentColor" d="M3.2 5.5728v-1.712H0v-1.6h3.2V.4528h1.6v5.12H3.2Zm3.2-1.712H16v-1.6H6.4v1.6Zm4.8 9.6864v-5.12h1.6v1.808H16v1.6h-3.2v1.712h-1.6Zm-1.6-1.712v-1.6H0v1.6h9.6Z"></path>
    </svg>

  return (
    <div>
        <div onClick={() => setopen(true)} className="flex items-center space-x-3 cursor-pointer">
          <div className="gray-800">
            {icon}
          </div>
          <div className="gray-800 text-sm tracking-wide">Filter & Sort</div>
        </div>
        <AnimatePresence>
        {
            open &&
            <Sidebar>
              <div>
                
                <div onClick={() => setopen(false)} className="flex justify-end items-center py-4 gray-600 px-8">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>

                <div className="h-px bg-200 w-full"></div>

                <div className="mt-6 mb-6 px-8">
                  <div className="flex items-center justify-between">
                    <div className="gray-900 font-medium text-sm tracking-wide">Sort By</div>
                    <div className="gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6">
                    {sortOptions.map(sort => 
                      <div className="flex items-center mr-4 py-3">
                        <input
                          id="red-radio"
                          type="radio"
                          defaultValue=""
                          name="colored-radio"
                          className="ff"
                        />
                        <label
                          htmlFor="red-radio"
                          className="ml-4 text-[13px] gray-700 tracking-wide"
                        >
                          {sort}
                        </label>
                      </div>
                      
                    )}
                  </div>
                </div>

                <div className="h-px bg-200 w-full"></div>
                
                <div className="my-6 px-8">
                  <div className="flex items-center justify-between">
                    <div className="gray-900 font-medium text-sm tracking-wide">Colors</div>
                    <div className="gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 mt-6">
                    {colorOptions.map(color => 
                      <div className="py-4 border border-[#e5e7eb] text-center">
                        <div className="flex justify-center">
                          <div className={`w-[18px] h-[18px] rounded-full ${color.class}`}></div>
                        </div>
                        <div className="mt-2.5 gray-700 text-[13px] tracking-wide">{color.name}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-px bg-200 w-full"></div>
                
                <div className="my-6 px-8">

                  <div className="flex items-center justify-between">
                    <div className="gray-900 font-medium text-sm tracking-wide">Sizes</div>
                    <div className="gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="grid grid-cols-6">
                      {sizeOptions.map(size => 
                        <div className="py-2.5 text-[13px] tracking-wide gray-700 border border-[#e5e7eb] text-center">{size}</div>  
                      )}
                    </div>
                  </div>

                </div>


                <div className="h-px bg-200 w-full"></div>

                <div className="my-6 px-8">
                  <div className="flex items-center justify-between">
                    <div className="gray-900 font-medium text-sm tracking-wide">Categories</div>
                    <div className="gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6">
                    {categoryOptions.map(category => 
                      <div className="text-[13px] gray-700 tracking-wide py-3">{category}</div>  
                    )}
                  </div>
                </div>
                

              </div>
            </Sidebar>
        }
        </AnimatePresence>
    </div>
  )
}

export default FilterSidebar
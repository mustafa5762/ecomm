"use client"

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from '@/app/components/product/ProductCard'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

const products = [
  {
    name: 'Pursuit Haydon Tee',
    price: 28800,
    short: 'Tech Jersey T-Shirt',
    image2: 'https://cdn.media.amplience.net/i/rb/MBC23ST051ZY51-338-A/Pursuit-Haydon-Tee-338?$xlarge$&fmt=auto',
    image: '/13.png'
  },
  {
    name: 'Classic Cloud Tee',
    price: 37900,
    short: 'Cloud Jersey T-Shirt',
    image2: 'https://cdn.media.amplience.net/i/rb/MBC23PT017BB17-260-A/Classic-Cloud-Tee-260?$xlarge$&fmt=auto',
    image: '/yo.png'
  },
  {
    name: 'Kerwin Linen Short Sleeve Crew',
    price: 59100,
    short: 'Relaxed Fit Shirt',
    image2: 'https://cdn.media.amplience.net/i/rb/MBS23P007BLT07-319-A/Kerwin-Linen-Short-Sleeve-Crew-319?$xlarge$&fmt=auto',
    image: '/Untitled-1.png'
  },
  {
    name: 'Miles Principal Jersey Tee',
    price: 37900,
    short: 'Cotton T-Shirt',
    image2: 'https://cdn.media.amplience.net/i/rb/MBC21PT0236N23-021-A/Miles-Principal-Jersey-Tee-021?$xlarge$&fmt=auto',
    image: '/mm.png'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-40" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex m-3">
              <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.19,1,.22,1)] duration-700 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-[cubic-bezier(.19,1,.22,1)] duration-700 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl rounded-md">
                  <div className="flex items-center justify-between px-8">
                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.19,1,.22,1)] duration-1000 transform"
                enterFrom="-translate-x-2/4 opacity-0"
                enterTo="translate-x-0 opacity-1"
                leave="transition ease-[cubic-bezier(.19,1,.22,1)] duration-500 transform"
                leaveFrom="translate-x-0 opacity-1"
                leaveTo="-translate-x-full opacity-0"
              >
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-6 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-8 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-semibold text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                  </Transition.Child>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto">
          <div className="pt-24 px-4 sm:px-6 lg:px-12 pb-14">
            <h1 className="text-3xl lg:text-4xl text-gray-900 font-bold">T-Shirts</h1>
            <p className="text-gray-800 mt-3 text-sm lg:text-[15px] leading-normal">
            The easiest thing to wear and the most essential layer is a damn good tee shirt. Long or short sleeve tees, henleys, crew or v-necks - the best men's tees for any style.
            </p>
          </div>
          <div className="flex items-center justify-between px-4 pb-6 sm:px-6 lg:px-12">
            <div className='text-gray-900 text-sm hidden lg:inline-block'><span className="font-bold">63</span> products found</div>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-800 hover:text-gray-900">
                    Sort by
                    <span className="font-bold ml-2">Most Popular</span>
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-800',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>


              <button
                type="button"
                className="-m-2 ml-4 p-2 sm:ml-6 flex items-center"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="font-bold mr-2 text-sm text-gray-900">Show Filters</span>
                
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              

              {/* Product grid */}
              <div className="lg:col-span-5 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[2px] gap-y-8">
                {products.map(product => <ProductCard product={product}/>)}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

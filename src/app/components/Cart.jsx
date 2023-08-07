import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from 'react-use-cart'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

export default function Cart({open,setOpen}) {

  const {items,removeItem,isEmpty,} = useCart()
  return (
    <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={setOpen}>
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
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-md flex-col overflow-y-auto bg-white py-4 shadow-xl rounded-md">

                  {/* Cart */}
                  { isEmpty ? "" : <>
                  <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.19,1,.22,1)] duration-1000 transform"
                enterFrom="-translate-x-2/4 opacity-0"
                enterTo="translate-x-0 opacity-1"
                leave="transition ease-[cubic-bezier(.19,1,.22,1)] duration-500 transform"
                leaveFrom="translate-x-0 opacity-1"
                leaveTo="-translate-x-full opacity-0"
              >
                <div className='flex flex-col justify-between h-screen'>
                  
                  <div className="flex-1 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-semibold text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {items.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.color.colorImage}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 capitalize">{product.color.name}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        onClick={() => removeItem(product.id)}
                                        type="button"
                                        className="font-medium text-gray-800 hover:text-gray-900"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                      <button className="w-full mt-4 font-semibold text-sm bg-gray-900 flex-1 py-4 text-white rounded-sm hover:bg-gray-800 transition">Checkout</button>
                      </div>
                      <div className="mt-6 flex justify-center space-x-2 text-center text-sm text-gray-500">
                        <p>
                          or
                          </p>
                          <button
                            type="button"
                            className="font-medium text-gray-800 hover:text-gray-900"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                      </div>
                    </div>
                    </div>
                  </Transition.Child>
                  </>}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
  )
}







{/* */}
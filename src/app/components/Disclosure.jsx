import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

export default function MyDisclosure({title,children}) {
  return (
    <Disclosure as="div" className="border-t border-gray-200 px-8 py-6">
      {({ open }) => (
        <>
          <h3 className='-mx-2 -my-3 flow-root'>
          <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
          <span className="font-semibold text-gray-900">{title}</span>
            <span className="ml-6 flex items-center">
            {open ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
            ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
            )}
          </span>
          </Disclosure.Button>
          </h3>

          {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-90 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}
            <Disclosure.Panel static className="py-6">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}


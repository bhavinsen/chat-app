import React, { Fragment } from 'react'
import { RiBarChartFill, RiHandCoinFill } from "react-icons/ri";
import { HiChatAlt2, HiCube, HiShoppingCart } from "react-icons/hi";
import { FaPlug } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: RiBarChartFill, current: false },
  { name: 'Team', href: '#', icon: HiCube, current: false },
  { name: 'Projects', href: '#', icon: RiHandCoinFill, current: false },
  { name: 'Calendar', href: '#', icon: HiShoppingCart, current: false },
  { name: 'Documents', href: '#', icon: HiChatAlt2, current: true },
  { name: 'Documents', href: '#', icon: HiChatAlt2, current: false },
  { name: 'Reports', href: '#', icon: FaPlug, current: false },
  { name: 'Reports', href: '#', icon: IoIosSettings, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-[80px] flex-col bg-white pt-5 pb-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <div className=" h-0 flex-1 overflow-y-auto">
                  <nav className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-200 text-white after:absolute after:content after:left-0 after:h-full after:w-[6px]  after:bg-indigo-400' : 'text-indigo-100 hover:bg-indigo-600',
                          'group flex relative items-center justify-center h-[70px] px-2 py-2 text-base font-medium '
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-indigo-400' : 'text-gray-400 group-hover:text-indigo-400',
                            'flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />

                      </a>
                    ))}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
            </div>
          </div>
        </Dialog>
      </Transition.Root>


      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-[80px] md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-2">
          <div className="flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100 after:absolute after:content after:left-0 after:h-full after:w-[6px]  after:bg-indigo-400 text-gray-900' : 'text-gray-400 hover:bg-gray-50 hover:text-indigo-400',
                    'group flex relative  justify-center h-[70px] items-center px-2 py-2 text-sm font-medium'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-indigo-400' : 'text-gray-400 group-hover:text-indigo-400',
                      'flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>

  )
}

export default Sidebar
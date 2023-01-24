import './App.css';
import Message from './components/massage';
import Sidebar from './components/sidebar/sidebar';
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [datasidebar, setdatasidebar] = useState()

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  func={datasidebar} />
      <div className="flex flex-1  bg-[#faf9fd] flex-col md:pl-[80px]" >
        <div className='bg-gray-100 lg:flex py-5 px-6 '>
          <div className='lg:w-[438px] flex '>
            <button
              type="button"
              className=" px-4 text-gray-500 focus:outline-none  md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <h2 className='text-[24px] text-gray-600 text-semibold '>Chats</h2>
          </div>
          <div className='relative flex-1 mt-2   lg:mt-0'>
            <MagnifyingGlassIcon className='absolute left-[20px] text-gray-400 top-[25%] w-4 h-4 ' />
            <input placeholder='Search by Order ID, Customer Name, or Contact Number' className='text-gray600 py-1.5 rounded  placeholder:text-gray400 outline-none focus:outline-none bg-white max-w-[750px]  w-full pl-[50px] text-[15px]' />
          </div>
        </div>
        <Message />
      </div>
    </>
  );
}

export default App;

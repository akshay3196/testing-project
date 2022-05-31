import React from 'react'
import Image from 'next/image'

const Header = ({downloadsToggle,routes,headerDropDownRoutes,logo}) => {
  return (
    <div className="text-white body-font bg-black w-screen fixed top-0 z-50">
    <div className="container  flex mx-auto  py-7 px-72 flex-col md:flex-row items-center justify-around w-full">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src={logo}  />
        
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        {routes.map((route,key)=> <a key={key} className="mr-5 cursor-pointer hover:text-blue-300 hover:transition-all duration-300">{route.attributes.headerRoutes}</a>  )}
       
      </nav>
      <div className="dropdown ">
        <label tabIndex="0" className="btn bg-black border-none hover:bg-black p-0">Company</label>
        <ul tabIndex="0" className="dropdown-content menu p-1 shadow  w-52 bg-black">
       {headerDropDownRoutes.map((route,key)=> <li key={key} className='text-center '><a className='text-center '>{route.attributes.route}</a></li> ) }
        
  </ul>
</div>
    </div>
  {downloadsToggle &&  <div className='bg-gray-800 py-1 flex w-full justify-end items-center'>
      <div className='w-1/2 flex justify-end items-center  pr-72'>
        <a href="" className='hover:bg-blue-400 transition-all duration-300 px-5 py-2' >Download</a>
        <a href="" className='hover:bg-blue-400 transition-all duration-300 px-5 py-2'>Test drive</a>
        <a href="" className='hover:bg-blue-400 transition-all duration-300 px-5 py-2'>Book now</a>
      </div>
    </div>}
  </div>
  )
}

export default Header
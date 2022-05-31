import React from 'react'
import {
   
    FacebookIcon,
    
    InstapaperIcon,
    
    LinkedinIcon,
    
    TwitterIcon,
    
  } from "react-share";

const Footer = ({headerDropDownRoutes,headerRoutes,logo,address,socials}) => {

  
   
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src={logo}  />
      </a>
      <div className='flex flex-col space-y-4'>
      <p className="mt-2 text-sm text-gray-500">Follow us:</p>
      <div className='flex space-x-3'>
          <span><a href={socials[0].attributes.url}><FacebookIcon size={32} round={true}/></a></span>
          <span><a href={socials[1].attributes.url}><TwitterIcon size={32} round={true} /></a></span>
          
          <span><a href={socials[2].attributes.url}><InstapaperIcon size={32} round={true} /></a></span>
          <span><a href={socials[3].attributes.url}><LinkedinIcon size={32} round={true} /></a></span>
      </div>
      </div>
      
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
       
      <nav className="list-none mb-10">
        {headerDropDownRoutes.map((route,key)=> <li key={key}>
            <a className="text-gray-600 hover:text-gray-800 cursor-pointer">{route.attributes?.route}</a>
          </li> )  }
         
        </nav> 
      </div>
     
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
       
        <nav className="list-none mb-10">
         {headerRoutes.map((route,key)=> <li key={key}>
            <a className="text-gray-600 hover:text-gray-800 cursor-pointer">{route.attributes?.headerRoutes}</a>
          </li> ) }
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Address:</h2>
        <p className='flex-wrap'>{address}</p>
      </div>
    </div>
  </div>
  
</footer>
  )
}

export default Footer
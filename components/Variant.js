import React from 'react'

const Variant = ({image,heading,subeadingOne,subheadingTwo}) => {
  return (
    <div className='flex flex-col text-center max-w-7xl mx-auto mb-20'>
         <h2 className={`text-5xl  font-bold  py-10`}>{heading}</h2>
         <div className='w-full mx-auto'>
             <img src={image}/>
         </div>
         <div className='flex justify-around'>
             <div className='text-left space-y-5'>
                 <p>{subeadingOne}</p>
                 <p>{subheadingTwo}</p>
             </div>
             <div>
             <button className='p-3  bg-blue-400 font-bold rounded-lg hover:bg-black hover:text-white hover:transition-all duration-300'>Book now</button>
                <span className='text-2xl'> @ 999</span>
             </div>
         </div>
    </div>
  )
}

export default Variant
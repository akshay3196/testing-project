import React from 'react'

const FeatureCard = ({featureImage,featureName,featureFunction}) => {
  return (
    <div className={`flex  space-x-4 items-center py-3 px-8 w-full `}>
        <img src={featureImage} className='h-11 w-11'/>
        <div className='space-y-1 '>
            <p className='text-2xl hover:text-blue-300 transition-all duration-300 cursor-pointer text-left'>{featureName}</p>
           <p className='text-left'>{featureFunction}</p>
        </div>
    </div>
  )
}

export default FeatureCard
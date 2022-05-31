import React from 'react'
import FeatureCard from '../components/FeatureCard'

const Mainbody = ({direction,background,textColor,image,heading,subheading,video,features}) => {
  
  return (
    <div className={`w-full ${background} `}>
        <div className='max-w-7xl mx-auto text-center '>
        <h2 className={`text-5xl  font-bold ${textColor} py-10`}>{heading}</h2>
        

        {/* body */}
       
        <div className={`w-full flex ${direction}  `}>
            <div className='w-2/3 mb-12'>
              { image &&  <img src={image}  />}
              { video &&  <iframe width="100%" height="100%" src={video} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}
           
            </div>
            <div className={`flex flex-col w-1/3 ${textColor}  space-y-3 justify-start items-center`} >
              {
                features?.data?.map((feature,key)=>  <FeatureCard key={key} featureImage={feature.attributes.featureImage} featureName={feature.attributes.featureName} featureFunction={feature.attributes.featureFunction} /> )
              }
                
            </div>

        </div>

        </div>
        
    </div>
  )
}

export default Mainbody
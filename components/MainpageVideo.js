import React from 'react'

const MainpageVideo = ({video,headingOne,headingTwo,launchevent}) => {
  return (
    <div className='w-full  flex items-center mb-8'>
        <div className='h-11/12 w-full text-center flex flex-col justify-center items-center'>
            <h2 className='text-5xl mt-11 font-bold'>{headingOne}</h2>
            <h2 className='text-xl py-5'>{headingTwo}</h2>
            <div className='h-[50vh] w-3/4'>
                    <iframe width="100%" height="100%" src={video} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <a className='text-3xl mt-5 text-blue-300 hover:text-blue-700 hover:transition-all duration-300 cursor-pointer '>{launchevent}</a>
        </div>
    </div>
  )
}

export default MainpageVideo
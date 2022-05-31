import React from 'react'

const SpecificationCard = ({name,subCat}) => {
 
  return (
    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-blue-200 rounded-box">
  <div className="collapse-title text-xl font-medium">
    {name}
  </div>
  <div className="collapse-content space-y-3"> 
  {
    subCat.map((sub,key)=>  <div key={key} className='bg-white p-2 rounded-lg flex w-full ' >
    <div className='w-1/3'>{sub.attributes.subparameterName}</div>
    <div className='w-1/3 text-center'>{sub.attributes.hiloadDV}</div>
    <div className='w-1/3 text-center'>{sub.attributes.hiloadPV}</div>
</div> )
  }
  
  
  </div>
</div>
  )
}

export default SpecificationCard
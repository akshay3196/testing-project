import React from 'react'
import SpecificationCard from '../components/SpecificationCard'
const Specification = ({specifications,terms}) => {
  return (
    <div className='max-w-7xl mx-auto  '>
      <h2 className={`text-5xl  font-bold  py-10 text-center`}>Specialization</h2>
      <div className='w-full flex justify-evenly  py-2'>
          <div className=' w-1/3' />
          <div className='text-center w-1/3'>HiLoad DV</div>
          <div className='text-center w-1/3'>HiLoad PV</div>
      </div>
      <div className='flex flex-col space-y-3'>
        {
          specifications.map((s,key)=> <SpecificationCard key={key} name={s.attributes.parameterName}  subCat={s.attributes.specification_subparameters.data} /> )
        }
      
      
      </div>
      <p className='flex-wrap text-lg  p-3 '>
      {terms}
      </p>
      
    </div>
  )
}

export default Specification
import React, { useState } from 'react'

const CustomModal = ({setShowModal,showModal}) => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [variantName, setvariantName] = useState('Select variant')
  return (
    <>
          <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none z-50"
          >
            <div className="relative w-full my-2 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Enquire now
                  </h3>
                  
                </div>
                {/*body*/}
                <div className="relative p-2 flex flex-col w-full space-y-2">
                <div className="dropdown w-full ">
                  <label tabIndex="0" className="btn w-full bg-transparent text-black hover:bg-transparent focus:shadow-md focus:shadow-blue-400">{variantName}</label>
                  <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 rounded-sm  w-full">
                  <li onClick={()=>setvariantName('HighLoad DV (Deliver van)')} ><a>HighLoad DV (Deliver van)</a></li>
                  <li onClick={()=>setvariantName('HighLoad PV (Pickup van)')}><a>HighLoad PV (Pickup van)</a></li>
                  </ul>
                </div>
                <label>Full name</label>
                <input type="text" value={name} placeholder='Enter your name' className=' p-2 focus:outline-none border rounded-md focus:shadow-sm focus:shadow-blue-400' onChange={(e)=> setname(e.target.value)} />
                <label>Email</label>
                <input type="text" value={email} placeholder='Enter your Email' className=' p-2 focus:outline-none border rounded-md focus:shadow-sm focus:shadow-blue-400' onChange={(e)=> setemail(e.target.value)} />
                <label>Phone</label>
                <input type="text" value={phone} placeholder='Enter your Phone' className=' p-2 focus:outline-none border rounded-md focus:shadow-sm focus:shadow-blue-400' onChange={(e)=> setphone(e.target.value)} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}

export default CustomModal
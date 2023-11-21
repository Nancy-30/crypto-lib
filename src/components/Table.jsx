import React from 'react'
import table from "../assets/table.png"
import Comparison from "../assets/Comparison.png"
export default function Table() {
  return (
    <div className='bg-[#343541] w-[98%] rounded-md flex items-center justify-between m-3 pt-5 pb-5 p-2 shadow-lg shadow-black'>
        <img src={Comparison} alt='' width={500} className='h-[500px] ml-4 rounded-md'/>
      <img src={table} alt="" />
    </div>
  )
}

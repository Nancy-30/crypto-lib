import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { NavLink, Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='h-[50px] w-full bg-gray-700 text-white pl-[30px] flex justify-between items-center'>
      <h1>Cryptify</h1>
      < AiOutlineInfoCircle className='text-lg mr-[50px] cursor-pointer' />
    </div>
  )
}

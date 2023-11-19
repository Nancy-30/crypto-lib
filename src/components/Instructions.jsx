import React from 'react'
import Test from '../assets/testing.png'
import Navbar from './Navbar'

export default function Instructions() {
    return (
        <div className='h-[650px] w-full z-10 bg-gradient-to-br from-sky-800 to-emerald-600 '>
            <Navbar />
            <div className='flex justify-between'>
                <div>
                    text
                </div>

                <div className='h-[200px]'>
                    <img src={Test} height={200} width={600} alt="dekh lo bhai jo dekhna hai" />
                </div>
            </div>

        </div>
    )
}

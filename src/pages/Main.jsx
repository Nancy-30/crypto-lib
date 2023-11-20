import React from 'react'
import Field from '../components/Field'
import Instructions from '../components/Instructions'
import Footer from '../components/Footer'
import table from '../assets/table.png'


export default function Main() {
    return (
        <div className='font-mono'>
            <div className='bg-gray-200 flex flex-col justify-center items-center z-50'>
                <Instructions />
                <Field />
                <img src={table} alt="" />
                <Footer />
            </div>

        </div>
    )
}

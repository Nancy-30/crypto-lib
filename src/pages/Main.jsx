import React from 'react'
import Field from '../components/Field'
import Navbar from '../components/Navbar'
import Instructions from '../components/Instructions'
import BackgroundDesign from '../components/BackgroundDesign'

export default function Main() {
    return (
        <div>
            {/* <Navbar /> */}
            {/* <BackgroundDesign /> */}
            <div className='bg-gray-200 flex flex-col justify-center items-center z-50'>
                <Instructions />
                <Field />
            </div>

        </div>
    )
}

import React from 'react'
import Field from '../components/Field'
import Instructions from '../components/Instructions'
import Footer from '../components/Footer'


export default function Main() {
    return (
        <div className='font-mono'>
            <div className='bg-gray-200 flex flex-col justify-center items-center z-50'>
                <Instructions />
                <Field />
                <Footer />
            </div>

        </div>
    )
}

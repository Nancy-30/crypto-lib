import React from 'react'
import Field from '../components/Field'
import Instructions from '../components/Instructions'
import Footer from '../components/Footer'
import Table from '../components/Table'
import ChatBot from '../components/Chaticon'
// import Tabledata from '../components/Tabledata'


export default function Main() {
    return (
        <div className='font-mono select-none'>
            {/* <ChatBot/> */}
            <div className='bg-gray-200 flex flex-col justify-center items-center'>
                <Instructions />
                <Field />
                <Table />
                <Footer />
            </div>

        </div>
    )
}

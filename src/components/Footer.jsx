import React from 'react'
import { LuCopyright } from "react-icons/lu";
export default function Footer() {
    return (
        <div className='h-[200px] bg-gray-700 p-5 text-white'>
            <p className='mt-3 ml-2 text-center'>Feel free to explore different algorithms and see how they affect the encoding or decoding process. Each algorithm may have unique properties and key requirements. Enjoy using our Crypto Library! Remember to keep your secret key secure, and explore the world of cryptography safely:)</p>
            <div className='flex flex-col justify-center items-center mt-12 gap-2'>
                <h1 className='text-xl'>Cryptify</h1>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center text-sm gap-1'><LuCopyright /><span> Copyright</span></div>
                    <span>2023</span>
                </div>
            </div>
        </div>
    )
}

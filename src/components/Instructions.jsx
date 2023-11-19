import React, { useState, useEffect } from 'react'
import Test from '../assets/testing.png'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { Link, NavLink } from 'react-router-dom'
import "./Instruction.css"

export default function Instructions() {
    // const [isLoaded, setIsLoaded] = useState(false);
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setIsLoaded(true);
    //     }, 500);

    //     return () => clearTimeout(timeout);
    // }, []);


    return (
        <div className='h-[650px] w-full z-10 bg-gradient-to-br from-sky-800 to-emerald-600'>
            {/* navbar */}
            <div className='h-[50px] w-full text-white pl-[30px] flex justify-between items-center'>
                <Link to="/"><h1 className='font-bold text-xl font-serif'>Cryptify</h1></Link>
                <NavLink to="/about" activeClassName="bg-green-400">< AiOutlineInfoCircle className='text-lg mr-[50px] cursor-pointer' /></NavLink>
            </div>

            {/* instructions */}
            <div className='flex justify-between mt-6'>
                <div className='text-white w-[50%] m-10 p-4 ml-32'>
                    <h1 className='text-5xl'>Instructions</h1>
                    <p className='mt-3 ml-2 text-lg ' id="welcomeText">Welcome to our Crypto Library!</p>
                    <p className='ml-2 text-lg' id="welcomeText">Cryptify encodes and decodes text with various cryptographic algorithms.</p>
                    <ul id="guidedText" className={`{pl-10 p-5 text-lg}`}>
                        <li>Enter the plain or cipher text to encode or decode it.</li>
                        <li>Select the encryption algorithm you want to use such as DES, AES, Blowfish, and 3DES.</li>
                        <li>In the "Secret Key" input field, enter the secret key you want to use for encryption or decryption.</li>
                    </ul>

                </div>

                <div className='h-[200px]'>
                    <img src={Test} height={200} width={600} alt="img" />
                </div>
            </div>

        </div>
    )
}

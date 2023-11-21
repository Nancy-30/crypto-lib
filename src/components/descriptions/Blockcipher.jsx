import React from 'react'
import BlockCipher from "../../assets/BlockCipher.png"

export default function Blockcipher() {
    return (
        <div className='absolute w-[90%] h-[550px] bg-white right-[5%] top-[15%] p-4 rounded-md shadow-md text-black'>
            <h1 className='text-xl font-semibold m-6 mb-3'>Block cipher</h1>
            <div className='flex justify-between p-2'>
                <div className='p-5 pt-0'>
                    A block cipher is a type of symmetric key cryptographic algorithm that processes fixed-size blocks of data, typically in chunks of 64 or 128 bits. It encrypts or decrypts these blocks using a secret key, and each block is transformed independently.
                    <p className='font-bold mt-3'>Advantages</p>
                    <ul className='list-disc flex flex-col gap-1'>
                        <li>Block ciphers provide a high level of confidentiality by scrambling the content of data blocks during encryption.</li>
                        <li>Users can choose different key lengths to balance security and performance based on their specific requirements.</li>
                    </ul>

                    <p className='font-bold mt-3'>Disadvantages</p>
                    <ul className='list-disc flex flex-col gap-1'>
                        <li>The fixed block size can be a limitation when dealing with data that doesn't neatly align with the block size, leading to the need for padding or additional processing.</li>
                        <li>Managing and securely distributing secret keys can be challenging.</li>
                        <li>Cryptanalysis evolution can expose vulnerabilities in formerly secure block ciphers.</li>
                    </ul>
                    <p className='mt-3'>Popular block ciphers include DES (Data Encryption Standard), AES (Advanced Encryption Standard), and Blowfish.</p>

                </div>
                <img src={BlockCipher} alt="DES flowchart" width={400} className='translate-y-[-40px]' />
            </div>
        </div>
    )
}

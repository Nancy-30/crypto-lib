import React from 'react'
import DESimg from "../assets/DES.png"
export default function DES() {
    return (
        <div className='absolute w-[90%] h-[550px] bg-white right-[5%] top-[15%] p-4 rounded-md shadow-md text-black'>
            <h1 className='text-xl font-semibold m-6'>Data Encryption Standard (DES)</h1>
            <div className='flex justify-between p-2'>
                <div className='p-10 pt-5'>
                    <ul className='list-disc flex flex-col gap-2'>
                        <li>DES is a symmetric key algorithm, as uses a single key for both the sender and the recipient to secure the communication., that is, it is used for both encryption and decryption. </li>
                        <li>It operates on fixed-size blocks of data, specifically 64-bit blocks.Each block is processed through a series of transformations using the encryption key.</li>
                        <li>It uses a 56-bit key, which was considered secure when it was introduced.However, due to advances in computing power, It is no longer considered secure against modern cryptographic attacks.</li>
                        <li>It uses a Feistel network structure, where the data block is divided into two halves and undergoes a series of iterations.The key is also divided and applied differently to each half in each iteration.</li>
                        <li>DES employs a combination of substitution and permutation operations to create confusion and diffusion in the data.Substitution boxes (S-boxes) and permutation boxes (P-boxes) are used in the process</li>

                    </ul>
                </div>
                <img src={DESimg} alt="DES flowchart" width={400} className='translate-y-[-40px]' />
            </div>
        </div>
    )
}

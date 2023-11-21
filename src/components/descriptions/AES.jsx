import React from 'react'
import AESimg from "../../assets/AES1.png"
export default function AES() {
    return (
        <div className='absolute w-[90%] h-[580px] bg-white right-[5%] top-[15%] p-3 rounded-md shadow-md text-black'>
            <h1 className='text-xl font-semibold m-6'>Advanced Encryption Standard (AES)</h1>
            <div className='flex justify-between p-2'>
                <div className='p-10 pt-0'>
                    <ul className='list-disc flex flex-col gap-2'>
                        <li>AES is a symmetric key algorithm, as uses a single secret key that must be kept confidential between the communicating parties, that is, it is used for both encryption and decryption. </li>
                        <li>It operates on fixed-size blocks of data, specifically 128-bits(16bytes) blocks.The data is divided into blocks, and each block undergoes a series of transformations using the secret key.</li>
                        <li>It supports key lengths of 128, 192, or 256 bits.The longer the key, the more secure the encryption, but it also requires more computational resources.</li>
                        <li>It employs a substitution-permutation network (SPN) structure.It involves multiple rounds of substitution (replacing each byte with another) and permutation (rearranging the bytes) operations.</li>
                        <li>It uses a key expansion algorithm to generate round keys from the original secret key.These round keys are used in each round of the encryption and decryption processes.</li>
                        <li>AES achieves security through a combination of confusion (substitution) and diffusion (permutation) in its operations.This ensures that changes in one part of the input affect many parts of the output.</li>
                        <li>It became the successor to the Data Encryption Standard (DES) due to its enhanced security features.It is widely adopted and considered secure for most practical purposes when implemented correctly.</li>
                    </ul>
                </div>
                <img src={AESimg} alt="AES flowchart" width={400} className='translate-y-[-60px]'/>
            </div>
        </div>
    )
}

import React from 'react'
import Blowfishimg from "../assets/Blowfish.png"
export default function BlowFish() {
    return (
        <div className='absolute w-[90%] h-[550px] bg-white right-[5%] top-[15%] p-3 rounded-md shadow-md text-black'>
            <h1 className='text-xl font-semibold m-6'>Blowfish</h1>
            <div className='flex justify-between p-2'>
                <div className='p-10 pt-0'>
                    <ul className='list-disc flex flex-col gap-2'>
                        <li>Blowfish is a symmetric key algorithm, as it uses same secret key for both encryption and decryption. </li>
                        <li>It operates on fixed-size blocks of data, specifically 64-bits.</li>
                        <li>It supports variable key lengths, ranging from 32 to 448 bits.The variable key length makes it adaptable to different security requirements.</li>
                        <li>It  uses a Feistel network structure, which divides the data block into two halves and processes them through multiple rounds.The two halves are then combined at the end of each round.</li>
                        <li>Blowfish typically uses 16 rounds of processing for encryption and decryption.</li>
                        <li>It uses a combination of substitution and permutation operations to transform the data.Substitution is done using a set of S-boxes (substitution boxes), and permutation involves swapping data between different portions of the block.</li>
                        <li>Blowfish has a key expansion mechanism that transforms the original key into an array of subkeys used during encryption and decryption. The key expansion involves applying the Blowfish algorithm to the initial key.</li>
                    </ul>
                </div>
                <img src={Blowfishimg} alt="Blowfish flowchart" width={390} className='translate-y-[-60px]' />
            </div>
        </div>
    )
}

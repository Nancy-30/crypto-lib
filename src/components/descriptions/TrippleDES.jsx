import React from 'react'
import TripleDES from "../../assets/TripleDES.jpg"

export default function TrippleDES() {
    return (
        <div className='absolute w-[90%] h-[580px] bg-white right-[5%] top-[15%] p-3 rounded-md shadow-md text-black'>
            <h1 className='text-xl font-semibold m-6'>Triple Data Encryption Algorithm(TDEA) or Triple DES(3DES)</h1>
            <div className='flex justify-between p-2'>
                <div className='p-10 pt-0'>
                    <ul className='list-disc flex flex-col gap-2'>
                        <li>Like DES, Triple DES is a symmetric key algorithm, meaning the same key is used for both encryption and decryption. </li>
                        <li>It operates on fixed-size blocks of data, specifically 64 bits, the same as DES.</li>
                        <li>It uses three keys, each 56 bits in length, resulting in a total key length of 168 bits.</li>
                        <li>Triple DES applies the DES algorithm three times to each data block. This process is often denoted as EDE(Encrypt, Decrypt, Encrypt).
                            <ul className='list-disc ml-10'>
                                <li>Encrypt with Key 1.</li>
                                <li>Decrypt with Key 2.</li>
                                <li>Encrypt with Key 3.</li>
                            </ul>
                        </li>
                        <li>Triple DES supports different keying options
                            <ul className='list-disc ml-10'>
                                <li>2-Key Triple DES (2TDEA): Two keys are used for the three operations (K1, K2, K1).</li>
                                <li>3-Key Triple DES (3TDEA): Three independent keys are used for each operation (K1, K2, K3).</li>
                            </ul>
                        </li>
                        <li>It provides higher level of security compared to DES.It allows organizations to transition to stronger encryption gradually without immediately replacing DES systems</li>
                        <li>Triple DES is computationally more intensive than DES due to the triple application of the algorithm.
                            As a result, it may be slower in comparison to more modern symmetric key algorithms like AES.</li>
                    </ul>
                </div>
                <img src={TripleDES} alt="Triple-DES flowchart" width={400} className='h-[350px]' />
            </div>
        </div>
    )
}

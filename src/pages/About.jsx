import { useState } from 'react';
import DES from '../components/DES';
import { Link } from 'react-router-dom';
import AES from '../components/AES';
import BlowFish from '../components/BlowFish';
import TrippleDES from '../components/TrippleDES';

export default function About() {
    const [algo, setAlgo] = useState("DES");
    const handleAlgo = (algoName) => {
        setAlgo(algoName);
    }

    return (

        <div className='h-[707px] w-full z-10 bg-gradient-to-br from-sky-800 to-emerald-600 text-white p-4 font-mono' >
            <div>
                <Link to="/"><h1 className='font-bold text-xl font-serif absolute'>Cryptify</h1></Link>
                <ul className='flex items-center justify-center gap-40'>
                    <li className='cursor-pointer' onClick={() => handleAlgo("DES")}>
                        DES
                    </li>
                    <li className='cursor-pointer' onClick={() => handleAlgo("AES")}>
                        AES
                    </li>
                    <li className='cursor-pointer' onClick={() => handleAlgo("BlowFish")}>
                        Blowfish
                    </li>
                    <li className='cursor-pointer' onClick={() => handleAlgo("3DES")}>
                        3DES
                    </li>
                </ul>
            </div>

            {algo === "DES" && <DES />}
            {algo === "AES" && <AES />}
            {algo === "BlowFish" && <BlowFish />}
            {algo === "3DES" && <TrippleDES />}
        </div>

    );
}

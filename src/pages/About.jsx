import { useState } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai"
import { Link, NavLink } from 'react-router-dom'
import DES from '../components/descriptions/DES';
import AES from '../components/descriptions/AES';
import BlowFish from '../components/descriptions/BlowFish';
import TrippleDES from '../components/descriptions/TrippleDES';
import Blockcipher from '../components/descriptions/Blockcipher';
import cryptify from '../assets/logo.png';


export default function About() {
    const [algo, setAlgo] = useState("Blockcipher");
    const handleAlgo = (algoName) => {
        setAlgo(algoName);
    }

    return (

        <div className='h-[707px] w-full z-10 bg-gradient-to-br from-sky-800 to-emerald-600 text-white p-4 font-mono select-none' >
            <div>
                <div className='h-[50px] w-full text-white pl-[30px] flex justify-between items-center'>
                    <Link to="/"><img className='h-10' src={cryptify} alt="" /></Link>
                    <NavLink to="/about" activeClassName="bg-green-400">< AiOutlineInfoCircle className='text-lg mr-[50px] cursor-pointer' /></NavLink>
                </div>

                <ul className='flex items-center justify-center gap-40'>
                    <li className='cursor-pointer' onClick={() => handleAlgo("Blockcipher")}>
                        BlockCipher
                    </li>
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

            <div className='select-text'>
                {algo === "Blockcipher" && <Blockcipher />}
                {algo === "DES" && <DES />}
                {algo === "AES" && <AES />}
                {algo === "BlowFish" && <BlowFish />}
                {algo === "3DES" && <TrippleDES />}
            </div>
        </div>

    );
}

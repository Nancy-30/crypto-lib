import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
        <div className='h-[700px] w-full z-10 bg-gradient-to-br from-sky-800 to-emerald-600 text-white p-4' >
        <div>
        <Link to="/"><h1 className='font-bold text-xl font-serif absolute'>Cryptify</h1></Link>
            <ul className='flex items-center justify-center gap-40'>
                <li className='cursor-pointer'>
                    DES
                </li>
                <li className='cursor-pointer'>
                    AES
                </li>
                <li className='cursor-pointer'>
                    Blowfish
                </li>
                <li className='cursor-pointer'>
                    3DES
                </li>
            </ul>
        </div>

        <div className='absolute w-[90%] h-[550px] bg-white right-[5%] top-[15%] p-3 rounded-md shadow-md'>
            DES
        </div>
        </div>
        </>
    );
}

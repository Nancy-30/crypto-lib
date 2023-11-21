import React, { useState, useEffect, useRef } from 'react'
import chatIcon from "../assets/logo.png";
import ChatBot from './ChatBot';
import { RxCross1 } from "react-icons/rx";

export default function Chaticon() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div>
            <div className='fixed z-40 right-0 bottom-0 m-3 rounded-md rotate-12 shadow-md overflow-hidden hover:shadow-gray-500 hover:rotate-0 w-[50px]'>
                <img src={chatIcon} alt='' className='cursor-pointer' onClick={handleClick} />
                
            </div>
            {isClicked && <div>
                <RxCross1 className='fixed z-50 right-10 top-24 text-sm cursor-pointer' onClick={handleClick}/>
                <ChatBot />
            </div>
            }

            
        </div>

    )
}

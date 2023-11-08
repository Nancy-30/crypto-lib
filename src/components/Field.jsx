import React, { useState } from "react";
import CryptoJS from "crypto-js";

export default function Field() {

  const [btnText, setBtnText] = useState("Encode");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const handleClick = () => {
    if(btnText === "Encode"){
      const encryptedText = CryptoJS.DES.encrypt(inputText, secretKey).toString();
      setOutputText(encryptedText);
    }
    else{
      const decryptedText = CryptoJS.DES.decrypt(inputText, secretKey).toString(CryptoJS.enc.Utf8);
      setOutputText(decryptedText);
    }
  }

  return (
    <div className="h-[650px] w-full flex justify-center items-center bg-gray-200">

      <div className="h-[500px] w-[85%] m-[10px] flex flex-col shadow-xl bg-white shadow-gray-400 rounded-md overflow-hidden">

        {/* Algorithms */}

        <div className="border-gray-300 flex justify-between">
          <ul className="flex gap-4">
          <button
              className={`hover:bg-gray-200 p-2 rounded-t-lg ${
                btnText === "Encode" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBtnText("Encode")}
            >
              Encryption
            </button>
            <button
              className={`hover:bg-gray-200 p-2 rounded-t-lg ${
                btnText === "Decode" ? "bg-gray-200" : ""
              }`}
              onClick={() => setBtnText("Decode")}
            >
              Decryption
            </button>
          </ul>
          <input
            className="m-2 p-2 focus:outline-none"
            type="text"
            placeholder="Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)} // Added this line
          />
        </div>

        <div className="border-b-2 border-gray-300 bg-gray-200">
          <ul className="flex p-4 gap-4">
            Algorithms:
            <li>DES</li>
            <li>AES</li>
            <li>Blowfish</li>
            <li>Serpent</li>
            <li>Skipjack</li>
          </ul>
        </div>

        {/* Encryption/Decryption field */}
        <div className="w-full h-[80%]  flex">
          <div className="w-1/2  h-full border-solid border-gray-400 border-r-[2px] overflow-hidden relative">
            <textarea
              className="h-full w-full p-[6px] focus:outline-none"
              type="text"
              placeholder="Enter your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)} // Added this line
            />
            <button
              className="absolute bottom-0 m-2 right-0 pl-4 pr-4 border-2 p-2 bg-gray-700 text-white hover:rounded-xl"
              onClick={handleClick}
            >
              {btnText}
            </button>
          </div>
          <div className="w-1/2  h-full border-solid border-gray-400 border-l-[2px] overflow-hidden">
            <textarea
              className="h-full w-full p-[6px] focus:outline-none"
              type="text"
              placeholder="Result..."
              value={outputText}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}
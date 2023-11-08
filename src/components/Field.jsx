import React, { useState } from "react";
import { des } from "../utilities/des";
import { aes } from "../utilities/aes";
import { blowfish } from "../utilities/blowfish";
import { serpent } from "../utilities/serpent";
import { skipjack } from "../utilities/skipjack";
export default function Field() {

  const [algorithm, setAlgo] = useState(null);
  const [btnText, setBtnText] = useState("Encode");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const loadAlgo = (algorithmName) => {
    setAlgo(algorithmName);
  }

  const handleClick = () => {
    if (algorithm === "des") {
      const encryptedText = des(inputText, secretKey, btnText);
      setOutputText(encryptedText);
    }
    else if (algorithm === "aes") {
      const encryptedText = aes(inputText, secretKey, btnText);
      setOutputText(encryptedText);
    }
    else if (algorithm === "serpent") {
      const encryptedText = serpent(inputText, secretKey, btnText);
      setOutputText(encryptedText);
    }
    else if (algorithm === "blowfish") {
      const encryptedText = blowfish(inputText, secretKey, btnText);
      setOutputText(encryptedText);
    }
    else if (algorithm === "skipjack") {
      const encryptedText = skipjack(inputText, secretKey, btnText);
      setOutputText(encryptedText);
    }

  }

  return (
    <div className="h-[650px] w-full flex justify-center items-center bg-gray-200">

      <div className="h-[500px] w-[85%] m-[10px] flex flex-col shadow-xl bg-white shadow-gray-400 rounded-md overflow-hidden">

        {/* Algorithms */}

        <div className="border-gray-300 flex justify-between">
          <ul className="flex gap-4">
            <button
              className={`hover:bg-gray-200 p-2 ${btnText === "Encode" ? "bg-gray-200" : ""
                }`}
              onClick={() => setBtnText("Encode")}
            >
              Encryption
            </button>
            <button
              className={`hover:bg-gray-200 p-2 ${btnText === "Decode" ? "bg-gray-200" : ""
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
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>

        <div className="border-b-2 border-gray-300 bg-gray-200">
          <ul className="flex p-4 gap-4 items-center">
            Algorithms:
            <button className={`${algorithm === "des" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""
              }`} onClick={() => loadAlgo("des")}>DES</button>
            <button className={`${algorithm === "aes" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""
              }`} onClick={() => loadAlgo("aes")}>AES</button>
            <button className={`${algorithm === "blowfish" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""
              }`} onClick={() => loadAlgo("blowfish")}>Blowfish</button>
            <button className={`${algorithm === "serpent" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""
              }`} onClick={() => loadAlgo("serpent")}>Serpent</button>
            <button className={`${algorithm === "skipjack" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""
              }`} onClick={() => loadAlgo("skipjack")}>Skipjack</button>
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
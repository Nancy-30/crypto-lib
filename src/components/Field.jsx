import React, { useState } from "react";
import { des } from "../utilities/des";
import { aes } from "../utilities/aes";
import { blowfish } from "../utilities/blowfish";
import { IoCopyOutline } from "react-icons/io5";
import { MdLayersClear } from "react-icons/md";
import { three_des } from "../utilities/3des";

export default function Field() {
  const [algorithm, setAlgo] = useState(null);
  const [btnText, setBtnText] = useState("Encode");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [secretKey, setSecretKey] = useState("");

  // hover icons
  const [isHoveredCopy, setIsHoveredCopy] = useState(false);
  const [isHoveredClear, setIsHoveredClear] = useState(false);

  const loadAlgo = (algorithmName) => {
    setAlgo(algorithmName);
  };

  const handleClick = () => {
    let encryptedText = "";
    if (algorithm === "des") {
      encryptedText = des(inputText, secretKey, btnText);
    } else if (algorithm === "aes") {
      encryptedText = aes(inputText, secretKey, btnText);
    } else if (algorithm === "3des") {
      encryptedText = three_des(inputText, secretKey, btnText);
    } else if (algorithm === "blowfish") {
      encryptedText = blowfish(inputText, secretKey, btnText);
    }
    setOutputText(encryptedText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      console.log("Text copied to clipboard:", outputText);
    }).catch((err) => {
      console.error("Unable to copy text to clipboard:", err);
    });
  };

  const handleClear = () => {
    setOutputText("");
    setBtnText("Encode");
  };

  return (
    <div className="relative h-[500px] w-[85%] flex justify-center items-center z-50">
      <div className="absolute h-[500px] w-full m-[10px] flex flex-col shadow-xl bg-white/80 backdrop-blur shadow-gray-400 rounded-md overflow-hidden top-[-100px]">

        {/* Algorithms */}
        <div className="border-gray-300 flex justify-between ">
          <ul className="flex">
            <button
              className={`hover:bg-gray-200 p-2 ${btnText === "Encode" ? "bg-gray-200" : ""}`}
              onClick={() => setBtnText("Encode")}
            >
              Encryption
            </button>
            <button
              className={`hover:bg-gray-200 p-2 ${btnText === "Decode" ? "bg-gray-200" : ""}`}
              onClick={() => setBtnText("Decode")}
            >
              Decryption
            </button>
          </ul>
          <input
            className="m-2 p-2 focus:outline-none placeholder-slate-600 bg-transparent background-blur"
            type="text"
            placeholder="Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
          />
        </div>

        <div className="border-b-2 border-gray-300 bg-gray-200">
          <ul className="flex p-4 gap-4 items-center">
            {/* Algorithms: */}
            <button className={`${algorithm === "des" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""}`} onClick={() => loadAlgo("des")}>DES</button>
            <button className={`${algorithm === "aes" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""}`} onClick={() => loadAlgo("aes")}>AES</button>
            <button className={`${algorithm === "blowfish" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""}`} onClick={() => loadAlgo("blowfish")}>Blowfish</button>
            <button className={`${algorithm === "3des" ? "shadow-gray-800 shadow-sm w-[80px] p-2 rounded-md" : ""}`} onClick={() => loadAlgo("3des")}>3DES</button>
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
              onChange={(e) => setInputText(e.target.value)}
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
              id="textarea"
              className="h-full w-full p-[6px] focus:outline-none"
              type="text"
              placeholder="Result..."
              value={outputText}
              readOnly
            />
          </div>
        </div>
      </div>
      <IoCopyOutline
        className="absolute text-2xl top-[430px] right-10 m-2 cursor-pointer"
        onMouseEnter={() => setIsHoveredCopy(true)}
        onMouseLeave={() => setIsHoveredCopy(false)}
        onClick={handleCopy}
      />
      <MdLayersClear
        className="absolute top-[430px] m-2 right-0 text-2xl cursor-pointer"
        onMouseEnter={() => setIsHoveredClear(true)}
        onMouseLeave={() => setIsHoveredClear(false)}
        onClick={handleClear}
      />
      <div>
        {isHoveredCopy && <h2 className="absolute top-[415px] text-sm right-12">Copy</h2>}
        {isHoveredClear && <h2 className="absolute top-[415px] text-sm right-0">Clear</h2>}
      </div>
    </div>
  );
}

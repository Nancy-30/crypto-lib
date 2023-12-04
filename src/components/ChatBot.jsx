import React, { useState } from "react";
import { SiChatbot } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import axios from "axios";

export default function ChatBot() {
  const [state, setState] = useState("");
  const [chat, setChat] = useState([]);

  const reply = async () => {
    const res = await axios.post("http://localhost:5000/palm", {
      prompt: state,
    });

    setChat((prevData) => [
      ...prevData,
      { question: state, answer: res?.data?.message },
    ]);
    setState("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      reply(); // Trigger the request when Enter key is pressed
    }
  };

  return (
    <div className="fixed w-[350px] h-[600px] bg-[#fbfcfd] z-40 right-4 bottom-4 m-3 rounded-md shadow-md overflow-hidden shadow-gray-500">
      <h2 className="p-3 text-center text-xl bg-gradient-to-br from-emerald-400 to-sky-200">
        Chatbot
      </h2>
      <div className="flex flex-col justify-end h-[500px] p-1 overflow-y-auto pl-2 select-text">
        {chat?.map((data, index) => (
          <div className="flex flex-col gap-4" key={index}>
            <div className="flex items-center gap-2 p-1 border-b-2 border-solid border-gray-200">
              <FaCircleUser className="text-gray-700 text-lg" />
              <p className="text-gray-800">{data.question}</p>
            </div>

            <div className="flex items-start gap-2 p-1 border-b-2 border-solid border-gray-200 mt-2">
              <SiChatbot className="text-gray-700 text-lg translate-y-1" />
              <p className="text-gray-800 w-[90%]">{data.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* input */}
      <div className="flex bg-gray-200 items-center gap-5 select-text">
        <input
          placeholder="Enter your message"
          onKeyPress={handleKeyPress}
          onChange={(e) => {
            setState(e.target.value);
          }}
          type="text"
          className="w-[80%] p-1 m-2 focus:outline-none bg-gray-200 placeholder-gray-600"
        />
        <IoIosSend
          onClick={reply}
          className="text-xl text-gray-900 cursor-pointer"
        />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./assets/posttailwind.css";

let endpoint = "http://localhost:8080";
let socket = io(endpoint);

const App = () => {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit("message", "This will run second");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  socket.on("message", (msg: any) => {
    setMessages(msg);
  });

  return (
    <div className="w-1/4 text-center">
      <div className="">
        <span className="text-pink-500 text-3xl font-bold ">
          <img className="w-10 h-10 inline" src="poki.png" />
          {messages}
        </span>
      </div>
      <h2 className="text-red-500 text-2xl font-bold">
        Days without Pokimane Raiding
      </h2>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import io from "socket.io-client";

let endpoint = "http://localhost:5000";
let socket = io(endpoint);

const App = () => {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState("");

  socket.on("message", (msg: any) => {
    setMessages([...messages, msg]);
  });

  const onChange = (event: any) => {
    setMessage(event.target.value);
  };

  const onClick = () => {
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div className="App">
      <h2>Messages</h2>
      <div>
        {messages.map((msg: any) => (
          <p>{msg}</p>
        ))}
      </div>
      <p>
        <input type="text" onChange={onChange} value={message} />
      </p>
      <p>
        <input type="button" onClick={onClick} value="Send" />
      </p>
    </div>
  );
};

export default App;

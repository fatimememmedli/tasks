import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
function App() {
  const [socket, setSocket] = useState(undefined);
  const [room, setRoom] = useState(0);
  const [inbox, setInbox] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const handleSendMessage = () => {
    console.log("message", message, room);
    socket.emit("message", message, room);
    setMessage("");
  };
  useEffect(() => {
    const socket = io("http://localhost:3000/");

    socket.on("message", (message) => {
      setInbox([...inbox, message]);
    });

    setSocket(socket);
  }, [inbox]);
  console.log(inbox);

  return (
    <>
      <div className="box">
        <div className="messages">
          {inbox &&
            inbox.map((elem, i) => {
              if (i == 0 || i % 2 == 0) {
                return (
                  <div key={i} className="left">
                    <div className="message1">
                      <p className="text1">{elem}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="right">
                    <div className="message2">
                      <p className="text2">{elem}</p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
        <div className="input-btn">
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="input"
            type="text"
          />
          <button type="submit" onClick={handleSendMessage} className="btn">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useSocket } from "../providers/Socket";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { socket } = useSocket();

  const [emailId, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleRoomJoined = ({ roomId }) => {
    navigate(`/room/${roomId}`);
  };

  useEffect(() => {
    socket.on("joined-room", handleRoomJoined);
  }, [socket]);

  const handleJoinRoom = () => {
    socket.emit("join-room", { emailId, roomId });
    setEmail("");
    setRoomId("");
  };

  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={emailId}
          placeholder="Enter your email"
        />
        <input
          type="text"
          placeholder="Enter room code"
          onChange={(e) => setRoomId(e.target.value)}
          value={roomId}
        />
        <button onClick={handleJoinRoom}>Entern Room</button>
      </div>
    </div>
  );
};

export default Home;

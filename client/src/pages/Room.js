import React, { useEffect } from "react";
import { useSocket } from "../providers/Socket";

const Room = () => {
  const { socket } = useSocket();

  const handleNewUserJoined = (data) => {
    const { emailId } = data;
  };

  useEffect(() => {
    socket.on("user-joined", handleNewUserJoined);
  }, []);
  return (
    <div className="room-page-container">
      <h1>Room page</h1>
    </div>
  );
};

export default Room;

import React, { useState } from "react";
import "./Dialog.css";

const Dialog = ({ onClose }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log(`Sending message: ${message}`);

    onClose();
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", maxWidth: "300px" }}
    >
      <h2>Dialog with Creator</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default Dialog;

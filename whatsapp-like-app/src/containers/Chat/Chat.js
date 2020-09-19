import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  MicSharp,
} from "@material-ui/icons";
import axios from "../../cliente/axios";

const Chat = ({ messages }) => {
  const [userInput, setUserInput] = useState("");

  const submitMessageHandler = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/messages/new",{
        name: "Tato",
        message: userInput,
        received: true,
        timestamp: "20 Setiembre 2020"
      })
      .then(response => {
          console.log(response);
      })
      .catch((err) => console.log(err));

      setUserInput("");
  };

  return (
    <section className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Chat room</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            key={message._id}
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            className="chat__footerInput"
            placeholder="Type a message here"
          />
          <button
            type="submit"
            onClick={submitMessageHandler}
            className="chat__footerButton"
          >
            Send message
          </button>
        </form>
        <MicSharp />
      </div>
    </section>
  );
};

export default Chat;

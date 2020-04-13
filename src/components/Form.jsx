import React, { useState } from "react";

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };
  return (
    <div>
      <div>We want your input! Tell us what we should do!</div>
      <form action="user_comment" method="POST">
        <input type="text" name="user_name" placeholder="your name" />
        <input type="text" name="comment" placeholder="your comments" />
        <input type="text" name="user_email" placeholder="your email" />
        <button data-testid="sendButton" onClick={handleSend}>
          Send
        </button>
      </form>
    </div>
  );
};

export default NewMessageForm;

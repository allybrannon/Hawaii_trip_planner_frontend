import React, { useState } from "react";
const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("clicked!");
    const data = new FormData(event.target);

    fetch("/", {
      method: "POST",
      body: data,
    });
  };
  return (
    <div>
      <div>
        We want your comments, suggestions, and feedback! Tell us what we should
        do!
      </div>
      <form onSubmit={handleSubmit} method="POST">
        <input type="text" name="user_name" placeholder="your name" required />
        <input
          type="text"
          name="comment"
          placeholder="your comments"
          required
        />
        <input
          type="text"
          name="user_email"
          placeholder="your email"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default NewMessageForm;

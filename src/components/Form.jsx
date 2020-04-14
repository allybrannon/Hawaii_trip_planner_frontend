import React, { useState } from "react";
const NewMessageForm = () => {
  const [username, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };
  const changeComment = (e) => {
    setComment(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { user_name: username, comment: comment, user_email: email };
    const url = "http://localhost:3000/addcomment";

    const response = await postAPI(url, data);
    if (response.status === 200) {
      alert("Response logged!");
    }
    if (response.status !== 200) {
      alert("Response was unable to be logged. Please try again later.");
    }
  };

  const postAPI = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  };

  return (
    <div>
      <div>
        We want your comments, suggestions, and feedback! Tell us what we should
        do!
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="your name"
          onChange={changeUserName}
          required
        />
        <input
          type="text"
          name="comment"
          placeholder="your comments"
          onChange={changeComment}
          required
        />
        <input
          type="text"
          name="user_email"
          placeholder="your email"
          onChange={changeEmail}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default NewMessageForm;

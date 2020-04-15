import React, { useState } from "react";
import { findByLabelText } from "@testing-library/react";

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
      <div style={container}>
        <div style={input}>
          We want your comments and suggestions Tell us what we should do while
          in Hawaii!
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            style={inputStyleName}
            type="text"
            name="user_name"
            placeholder="name"
            onChange={changeUserName}
            required
          />
          <input
            style={inputStyleComment}
            type="text"
            name="comment"
            placeholder="your comments"
            onChange={changeComment}
            required
          />
          <input
            style={inputStyleName}
            type="text"
            name="user_email"
            placeholder="email"
            onChange={changeEmail}
            required
          />
          <div style={b1}>
            <button style={buttonStyle} type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const buttonStyle = {
  borderRadius: "6px",
  backgroundColor: "grey",
  color: "white",
};

const b1 = {
  display: "flex",
  justifyContent: "center",
};

const container = {
  borderRadius: "5px",
  backgroundColor: "#f2f2f2",
  padding: "20px",
};

const inputStyleComment = {
  width: "50%",
  borderRadius: "4px",
  padding: "12px 16px",
};

const inputStyleName = {
  width: "25%",
  borderRadius: "4px",
  padding: "12px 12px",
};

const input = {
  textAlign: "center",
};

export default NewMessageForm;

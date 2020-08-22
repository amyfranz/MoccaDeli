import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactUs() {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="contactUs">
      <h2 className="title">Contact Us</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <div></div>
      </div>
    </div>
  );
}

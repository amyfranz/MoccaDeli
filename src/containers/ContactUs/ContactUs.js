import React, { useState } from "react";

export default function ContactUs() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");

  const data_js = {
    access_token: "lbn1qledczlkg8sayde0h6lm",
  };

  function js_send() {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        alert("success");
      } else if (request.readyState === 4) {
        alert("error");
      }
    };

    data_js["subject"] = subject;
    data_js["text"] = `${name} - ${email}: ${message}`;
    const params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );

    request.send(params);

    return false;
  }

  function toParams(data_js) {
    let form_data = [];
    for (var key in data_js) {
      form_data.push(
        encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key])
      );
    }

    return form_data.join("&");
  }

  return (
    <div className="contactUs">
      <h2 className="title">Contact Us</h2>
      <div>
        <form
          id="javascript_form"
          onSubmit={(e) => {
            e.preventDefault();
            js_send(e);
          }}
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            placeholder="Subject"
          />
          <textarea
            name="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Message"
          ></textarea>
          <input type="submit" id="js_send" value="Send" />
        </form>
        <div></div>
      </div>
    </div>
  );
}

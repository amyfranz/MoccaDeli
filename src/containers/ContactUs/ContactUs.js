import React, { useState } from "react";
import { SiGooglemybusiness } from "react-icons/si";
import "./ContactUs.css";

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
      <div className="contactUsContent">
        <form
          id="javascript_form"
          onSubmit={(e) => {
            e.preventDefault();
            js_send(e);
          }}
        >
          <h3>Enquiry:</h3>
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
          <input type="submit" id="js_send" value="Send Enquiry" />
        </form>
        <div className="contactUsInfo">
          <h3>Phone Us: +27 778 746 7544</h3>
          <div className="findUs">
            <h3>Find Us: </h3>
            <a
              href="https://www.google.com/search?sxsrf=ALeKk01WukuNnrhg8eOyiAwN5h7UxRPPnQ:1598092511671&source=hp&ei=3PRAX-KcEoT6U6TptNAC&q=shops%20near%20me&oq=shops+near+me&gs_lcp=CgZwc3ktYWIQAzIICAAQsQMQgwEyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BQgAELEDOgsILhCxAxDHARCjAjoCCC46CAguEMcBEKMCOggILhCxAxCDAToLCC4QsQMQxwEQrwE6BAgAEApQ4gZYoBRg-xVoAHAAeAGAAaQCiAHsE5IBBTAuNy42mAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=2ahUKEwiYuufDzq7rAhVPiFwKHdMyBfYQvS4wA3oECA0QLQ&uact=5&npsic=0&rflfq=1&rlha=0&rllag=51484862,-9073,439&tbm=lcl&rldimm=106502968409769360&lqi=Cg1zaG9wcyBuZWFyIG1lIgOQAQFaFgoFc2hvcHMiDXNob3BzIG5lYXIgbWU&phdesc=J2z6NfP_pwk&rldoc=1&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:10&rlst=f#rlfi=hd:;si:106502968409769360,l,Cg1zaG9wcyBuZWFyIG1lIgOQAQFaFgoFc2hvcHMiDXNob3BzIG5lYXIgbWU,y,J2z6NfP_pwk;mv:[[51.497239099999994,0.0025031],[51.47967320000001,-0.0161153]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:10"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGooglemybusiness className="icon" />
            </a>
          </div>
        </div>
      </div>
      <h4>17 Billson Street, London</h4>
    </div>
  );
}

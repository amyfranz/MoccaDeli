import React from "react";
import { SMTPClient } from "emailjs";

export default function ContactUs() {
  const client = new SMTPClient({
    user: "amy.franz@gmail.com",
    password: "AK47401english",
    host: "smtp.gmail.com",
    ssl: true,
  });

  client.send(
    {
      text: "i hope this works",
      from: "amy.franz@gmail.com",
      to: "amy.franz@gmail.com",
      subject: "testing emailjs",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  return (
    <div className="contactUs">
      <h2 className="title">Contact Us</h2>
      <div>
        <div>
          <div className="container">
            <form>
              <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                  ></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

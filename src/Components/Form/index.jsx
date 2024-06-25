import axios from "axios";
import React, { useState } from "react";
import ReactGA from "react-ga4";

import "./index.css";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiCall = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      ReactGA.event({
        category: "GateKeep",
        action: "FormSubmit",
        label: "FormSubmit",
      });

      const response = await axios.post(
        "https://ox16mawie1.execute-api.ap-south-1.amazonaws.com/prod/invites",
        {
          name: name,
          email: email,
          phone: `+91${phone}`,
        },
        {
          headers: {
            "x-api-key": "PD4bgfZVIr2KAaSIShFNM3rBgTaFXRNe7h5AvMan",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.log("err>>>here", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="FormContainer">
      {!submitted && (
        <>
          <h2 style={{ fontWeight: 400 }}>SIGN UP HERE</h2>
          <form onSubmit={apiCall}>
            <div className="inputContainer">
              <label className="Label">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="inputBox"
              />
            </div>
            <div className="inputContainer">
              <label className="Label">Email*</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="inputBox"
                required
              />
            </div>
            <div className="inputContainer">
              <label className="Label">Phone(+91)</label>
              <div>
                <input
                  type="tel"
                  value={phone}
                  pattern="[1-9]{1}[0-9]{9}"
                  onChange={(e) => setPhone(e.target.value)}
                  className="inputBox"
                />
              </div>
            </div>
            <div>
              <button className="Button" type="submit" disabled={isSubmitting}>
                SUBMIT
              </button>
            </div>
          </form>
        </>
      )}

      {!!submitted && (
        <h3 className="SubmittedText">
          Thank you for signing up!
          <br />
          We won't be gatekeeping this forever.
          <br />
          <br />
          Stay tuned!
        </h3>
      )}

      <h2 style={{ fontSize: 24, marginTop: 64 }}>INVITE ONLY.</h2>
    </div>
  );
}

export default SignUpForm;

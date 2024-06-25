import React, { useState } from "react";
import "./index.css";

function Bottom() {
  const [ans1Visible, setAns1Visible] = useState(false);
  const [ans2Visible, setAns2Visible] = useState(false);
  const [ans3Visible, setAns3Visible] = useState(false);

  const handleAns1 = () => {
    setAns1Visible(!ans1Visible);
  };
  const handleAns2 = () => {
    setAns2Visible(!ans2Visible);
  };
  const handleAns3 = () => {
    setAns3Visible(!ans3Visible);
  };
  return (
    <div className="FooterContainer">
      <br />

      <h2 className="Title">Got questions? We've got answers.</h2>
      <div className="FAQ">
        <div onClick={handleAns1} className="Question">
          1. What is gatekeeping?
          {ans1Visible && (
            <p className="Answer">
              Gatekeeping is the act of controlling, and usually limiting,
              general access to something. Something you'd like to keep
              exclusive so you wouldn't want EVERYONE to know!
            </p>
          )}
        </div>
        <br />
        <div onClick={handleAns2} className="Question">
          2. What does it mean when someone says you're gatekeeping?
          {ans2Visible && (
            <p className="Answer">
              Imagine this: There's a cool club in town and everyone wants to be
              there. But the club wants to keep things exclusive. So there's a
              bouncer standing guard - this is the ultimate gatekeeper. They
              decide who gets to enter and join in on the fun. He's gatekeeping
              the club. In our case, we're gatekeeping something that works like
              skincare and wears like perfume.
            </p>
          )}
        </div>

        <br />
        <div onClick={handleAns3} className="Question">
          3. Who is the gatekeeper here?
          {ans3Visible && (
            <p className="Answer">
              Can't tell you that just yet! We're gatekeeping that information
              'cause we'd like to keep things exclusive. Why don't you sign up
              to find out?
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Bottom;

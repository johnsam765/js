import React from "react";

const MainIntro = () => {
  return (
    <div className="main-i">
      <div className="main-body"></div>
      <div className="main-intro">
        <p id="frt-txt">
          Hello... I'm <span id="Letter">J</span>ohn <span id="Letter">S</span>
          amuel Lawrence.
        </p>
        <p id="sec-txt">
          A budding <span id="fs">full-stack</span> developer
        </p>
      </div>
      <img
        className="icon-sz"
        src="https://media.istockphoto.com/vectors/creative-letter-js-logo-design-vector-template-initial-linked-letter-vector-id1207883989?k=20&m=1207883989&s=170667a&w=0&h=j5QWFBukqrvEXq-aL8XGVYULGg741IqiECgxlrdUIno="
        alt=""
      />
    </div>
  );
};

export default MainIntro;

// packages
import React from "react";

// styling
import "./Header.scss";

const StyledButton = ({ text }) => {
  return (
    <div className="Header__navItem">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="Header__navItemContent">{text}</div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="Header">
      {/* <div className="Header__logo">SRR</div> */}
      <StyledButton text="About" />
      <StyledButton text="Technical Exposure" />
      <StyledButton text="Profile" />
      <StyledButton text="Recent Work" />
      <StyledButton text="Contact" />

      <div className="Header__navItem flexGrow">
        <div className="Header__navItemContent"></div>
      </div>

      <div className="Header__navItem rborder">
        <div className="Header__navItemContent">Download CV</div>
      </div>
    </div>
  );
};

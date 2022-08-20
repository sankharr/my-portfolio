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
      <div className="Header__logo">SRR</div>
      <StyledButton text='About' />
      <StyledButton text='Technical Exposure' />
      <StyledButton text='Profile' />
      <StyledButton text='Recent Work' />
      <StyledButton text='Contact' />
      <StyledButton text='Download CV' />
    </div>
  );
};

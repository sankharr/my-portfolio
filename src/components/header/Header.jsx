// packages
import React from "react";

// styling
import "./Header.scss";

// const StyledButton = ({ text }) => {
//   return (
//     <div className="Header__navItem">
//         <StyledBorders text={} />

//     </div>
//   );
// };

const StyledBorders = ({ text }) => {
  return (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="Header__navItemContent">{text}</div>
    </>
  );
};

export const Header = () => {
  // const scrollSection = (section) => {
  //     window.scrollTo({
  //       top: section?.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   };

  return (
    <div className="Header">
      {/* <div className="Header__logo">SRR</div> */}
      <div className="Header__navItem">
        <StyledBorders text={"Technical Exposure"} />
      </div>
      <div className="Header__navItem">
        <StyledBorders text={"Profile"} />
      </div>
      <div className="Header__navItem">
        <StyledBorders text={"Recent Work"} />
      </div>
      <div className="Header__navItem">
        <StyledBorders text={"Contact"} />
      </div>
      {/* <StyledButton text="Technical Exposure" />
      <StyledButton text="Profile" />
      <StyledButton text="Recent Work" />
      <StyledButton text="Contact" /> */}

      <div className="Header__navItem flexGrow">
        <div className="Header__navItemContent"></div>
      </div>

      <div className="Header__navItem rborder">
        <div className="Header__navItemContent">Download CV</div>
      </div>
    </div>
  );
};

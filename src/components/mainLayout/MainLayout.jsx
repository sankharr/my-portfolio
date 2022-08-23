// packages
import React, { useRef } from "react";

// styling
import "./MainLayout.scss";

// components
import { Header } from "../header/Header";
import { About } from "../about/About";
import { TechStack } from "../techStack/TechStack";
import { Profile } from "../profile/Profile";
import { Projects } from "../projects/Projects";
import { Footer } from "../footer/Footer";

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

export const MainLayout = () => {
  const techStackSection = useRef(null);
  const profileSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);

  const scrollSection = (section) => {
    // console.log("function fired up")
    window.scrollTo({
      top: section?.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="MainLayout">
      <div className="Header">
        <div
          className="Header__navItem"
          onClick={() => scrollSection(techStackSection)}
        >
          <StyledBorders text={"Technical Exposure"} />
        </div>
        <div className="Header__navItem" onClick={() => scrollSection(profileSection)}>
          <StyledBorders text={"Profile"} />
        </div>
        <div className="Header__navItem" onClick={() => scrollSection(projectsSection)}>
          <StyledBorders text={"Projects"} />
        </div>
        <div className="Header__navItem" onClick={() => scrollSection(contactSection)}>
          <StyledBorders text={"Contact"} />
        </div>

        <div className="Header__navItem flexGrow">
          <div className="Header__navItemContent"></div>
        </div>

        <div className="Header__navItem rborder">
          <div className="Header__navItemContent">Download CV</div>
        </div>
      </div>

      <About />
      <TechStack refHook={techStackSection} />
      <Profile refHook={profileSection} />
      <Projects refHook={projectsSection} />
      <Footer refHook={contactSection} />
    </div>
  );
};

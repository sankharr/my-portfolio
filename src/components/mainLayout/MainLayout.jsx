// packages
import React, { useState, useRef, useEffect } from "react";

// styling
import "./MainLayout.scss";
import { HiViewList } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

// components
import { Header } from "../header/Header";
import { About } from "../about/About";
import { TechStack } from "../techStack/TechStack";
import { Profile } from "../profile/Profile";
import { Projects } from "../projects/Projects";
import { Footer } from "../footer/Footer";
import useWindowDimensions from "../hooks/useWindowDimensions";

// file
import downloadFile from "../../assets/Sankha_Rathnayake_Resume.pdf";

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
  const [isNavExpanded, setIsNavExpanded] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const techStackSection = useRef(null);
  const profileSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    // console.log("width - ",width)
    if (window.innerWidth <= 550) {
      setIsNavExpanded("--hide");
    } else {
      setIsNavExpanded("");
    }
  }, [width]);

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
        <HiViewList
          className="Header__listIcon"
          onClick={() => {
            if (isNavExpanded == "") {
              setIsNavExpanded("--hide");
            } else {
              setIsNavExpanded("");
            }
          }}
        />
        {!isNavExpanded && (
          <AiOutlineClose
            className="Header__closeIcon"
            onClick={() => {
              if (isNavExpanded == "") {
                setIsNavExpanded("--hide");
              } else {
                setIsNavExpanded("");
              }
            }}
          />
        )}

        <div className={`Header__responsiveNavItemsSection${isNavExpanded}`}>
          <div
            className="Header__navItem"
            onClick={() => scrollSection(techStackSection)}
          >
            <StyledBorders text={"Technical Exposure"} />
          </div>
          <div
            className="Header__navItem"
            onClick={() => scrollSection(profileSection)}
          >
            <StyledBorders text={"Profile"} />
          </div>
          <div
            className="Header__navItem"
            onClick={() => scrollSection(projectsSection)}
          >
            <StyledBorders text={"Projects"} />
          </div>
          <div
            className="Header__navItem"
            onClick={() => scrollSection(contactSection)}
          >
            <StyledBorders text={"Contact"} />
          </div>
        </div>

        <div className="Header__navItem flexGrow">
          <div className="Header__navItemContent"></div>
        </div>

        <div className="Header__downloadCV">
          <a
            href={downloadFile}
            download="Sankha_Rathnayake_Resume"
            target="_blank"
          >
            <div className="Header__navItemContent">Download Resume</div>
          </a>
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

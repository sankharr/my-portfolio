// packages
import React from "react";

// styling
import "./Footer.scss";

// hooks
import useAnalyticsEventTracker from "../hooks/useAnalyticsEventTracker";

// icons
import { AiTwotonePhone, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaHackerrank } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";

const Footer = ({ refHook }) => {
  const gaEventTracker = useAnalyticsEventTracker("Footer");
  return (
    <div className="Footer" ref={refHook}>
      <div className="Footer__title">Contact</div>
      <div className="Footer__contactDetails">
        <div className="Footer__contactDetailItem">
          <AiTwotonePhone />
          <span>+94 716194060</span>
        </div>
        <div className="Footer__contactDetailItem">
          <AiOutlineMail />
          <span>sankharathnayaka@gmail.com</span>
        </div>
      </div>
      <div className="Foooter__subTitle">Find me on</div>
      <div className="Footer__externalLinks">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sankha-rathnayake/"
          rel="noreferrer"
          onClick={()=>gaEventTracker('linkedin')}
        >
          <AiFillLinkedin className="Footer__linkIcon" />
        </a>
        <a target="_blank" href="https://github.com/sankharr" rel="noreferrer" onClick={()=>gaEventTracker('githubProfile')}>
          <FaGithub className="Footer__linkIcon" />
        </a>
        <a
          target="_blank"
          href="https://stackoverflow.com/users/7911731/sankha-rathnayake"
          rel="noreferrer"
          onClick={()=>gaEventTracker('stackoverflow')}
        >
          <BsStackOverflow className="Footer__linkIcon" />
        </a>
        <a
          target="_blank"
          href="https://www.hackerrank.com/sankharr"
          rel="noreferrer"
          onClick={()=>gaEventTracker('hackerrank')}
        >
          <FaHackerrank className="Footer__linkIcon" />
        </a>
      </div>
      <p>&copy; 2022 Developed by Sankha Rathnayake</p>
    </div>
  );
};

export default React.memo(Footer);

// packages
import React from "react";

// styling
import "./TechStack.scss";

export const TechStack = ({ refHook }) => {
  return (
    <div className="TechStack" ref={refHook}>
      <div className="TechStack__title">Technical Exposure </div>
      <div className="TechStack__container">
        <div className="TechStack__card ">
          <div className="TechStack__cardContent">
            <div className="TechStack__cardTitle">Frontend</div>
            <div className="TechStack__listItem">React</div>
            <div className="TechStack__listItem">HTML</div>
            <div className="TechStack__listItem">CSS</div>
            <div className="TechStack__listItem">Javascript</div>
          </div>
        </div>
        <div className="TechStack__card ">
          <div className="TechStack__cardContent">
            <div className="TechStack__cardTitle">Backend</div>
            <div className="TechStack__listItem">NodeJS</div>
            <div className="TechStack__listItem">ExpressJS</div>
            <div className="TechStack__listItem">MongoDB</div>
            <div className="TechStack__listItem">SQL Server</div>
            <div className="TechStack__listItem">AWS</div>
            <div className="TechStack__listItem">Serverless</div>
          </div>
        </div>
        <div className="TechStack__card">
          <div className="TechStack__cardContent">
            <div className="TechStack__cardTitle">Other</div>
            <div className="TechStack__listItem">Git</div>
            <div className="TechStack__listItem">Jira</div>
            <div className="TechStack__listItem">Python</div>
            <div className="TechStack__listItem">Arduino</div>
          </div>
        </div>
      </div>
    </div>
  );
};

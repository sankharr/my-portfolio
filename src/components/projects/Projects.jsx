// packages
import React from "react";

// styling
import "./Projects.scss";

// icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  techArray,
  description,
  githubLink,
  hostedLink,
}) => {
  return (
    <div className="Projects__card">
      <span></span>
      <div className="Projects__content">
        <div className="Projects__cardTitle">{title}</div>
        <div className="Projects__techStack">
          {techArray.map((item, index) => (
            <div className="Projects__techListItem" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="Projects__description">{description}</div>
        <div className="Projects__links">
          {githubLink && (
            <a target="_blank" href={githubLink} rel="noreferrer">
              <FaGithub className="Projects__linkIcon" />{" "}
            </a>
          )}
          {hostedLink && (
            <a target="_blank" href={hostedLink} rel="noreferrer">
              <FaExternalLinkAlt className="Projects__linkIcon" />{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = ({refHook}) => {
  return (
    <div className="Projects" ref={refHook}>
      <div className="Projects__title">Projects</div>
      <div className="Projects__cardContainer">
        <ProjectCard
          title="Personal Portfolio"
          techArray={["React, HTML, CSS"]}
          description="This is my personal portfolio website"
          githubLink="https://github.com/sankharr/my-portfolio"
        />
        <ProjectCard
          title="Whatsapp UI Clone"
          techArray={["React, HTML, CSS"]}
          description="This is a clone of whatsapp UI"
          githubLink="https://github.com/sankharr/whatsapp-clone"
        />
        <ProjectCard
          title="Araliya"
          techArray={["React, HTML, CSS"]}
          description="Redesigned a website of a hotel named Araliya"
          githubLink="https://github.com/sankharr/hotel-reservation"
        />
        <ProjectCard
          title="Amazon UI Clone"
          techArray={["React, HTML, CSS"]}
          description="This is a clone of Amazon Ecommerce UI"
          githubLink="https://github.com/sankharr/amazon-clone"
        />
        <ProjectCard
          title="MediSearch"
          techArray={["React", "NodeJS", "ExpressJS", "MongoDB"]}
          description="Currently in Sri Lanka we have an issue of finding medicines as
              most of the medicines are running out of stock from the hospitals
              and nearby pharmacies. So, this solution is being built to
              mitigate that issue up to some extent."
          githubLink="https://github.com/sankharr/medisearch"
        />

        <ProjectCard
          title="CameraRentClub"
          techArray={["React", "NodeJS", "ExpressJS", "MongoDB"]}
          description="This project is developed for a client who is doing business related to camera rental. This project allows him to manage his inventory, manage the reservations etc."
          githubLink="https://github.com/sankharr/crc-react"
        />

        <ProjectCard
          title="srr-elapsedtimer"
          techArray={["An Angular package"]}
          description="This is an opensource contribution for Angular Framework, which can be obtained via NPM. This package lets the user to create a customizable elapsed timer which can be used in their Angular projects"
          githubLink="https://github.com/sankharr/srr-elapsedtimer"
          hostedLink="https://www.npmjs.com/package/srr-elapsedtimer"
        />

        <ProjectCard
          title="HospitalCore"
          techArray={["Angular", "Firebase", "Arduino"]}
          description="A website which is built for the doctors to do live consultations with the patients. the system also allows patients to manage their health data on this system. IoT device has the capability to upload the current  temperature and the heart beat rate of the patient during the consultation"
          githubLink="https://github.com/sankharr/OnClinic"
          hostedLink="https://www.linkedin.com/posts/sankha-rathnayake_as-our-third-year-university-project-we-activity-6723058083075096576-DGeK?utm_source=share&utm_medium=member_desktop"
        />
        <ProjectCard
          title="Crossing Assistant"
          techArray={["Android – Java", "Windows Phone – C++"]}
          description="An app which helps the pedestrians to cross the road more safely at night. It was released to general public with the help of Sri Lanka Police in 2017"
          //   githubLink="https://github.com/sankharr/medisearch"
          hostedLink="https://www.linkedin.com/posts/sankha-rathnayake_some-articles-about-my-first-mobile-app-activity-6691745556349407232-XJyE?utm_source=share&utm_medium=member_desktop"
        />
      </div>
    </div>
  );
};

export default React.memo(Projects);
// packages
import React from "react";

// styling
import "./Projects.scss";

// icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects__title">Recent Work</div>
      {/* <div className="Projects__cardContainer"> */}
      <div className="Projects__card">
        <span></span>
        <div className="Projects__content">
          <div className="Projects__cardTitle">MediSearch</div>
          <div className="Projects__techStack">
            <div className="Projects__techListItem">React</div>
            <div className="Projects__techListItem">NodeJS</div>
            <div className="Projects__techListItem">ExpressJS</div>
            <div className="Projects__techListItem">MongoDB</div>
          </div>
          <div className="Projects__description">
            Currently in Sri Lanka we have an issue of finding medicines as most
            of the medicines are running out of stock from the hospitals and
            nearby pharmacies. So, this solution is being built to mitigate that
            issue up to some extent.
          </div>
          <div className="Projects__links">
            <FaGithub className="Projects__linkIcon" />
            <FaExternalLinkAlt className="Projects__linkIcon" />
          </div>
        </div>
      </div>

      <div className="Projects__card">
        <div className="Projects__content">
          <div className="Projects__cardTitle">MediSearch</div>
          <div className="Projects__techStack">
            <div className="Projects__techListItem">React</div>
            <div className="Projects__techListItem">NodeJS</div>
            <div className="Projects__techListItem">ExpressJS</div>
            <div className="Projects__techListItem">MongoDB</div>
          </div>
          <div className="Projects__description">
            Currently in Sri Lanka we have an issue of finding medicines as most
            of the medicines are running out of stock from the hospitals and
            nearby pharmacies. So, this solution is being built to mitigate that
            issue up to some extent.
          </div>
          <div className="Projects__links">
            <FaGithub className="Projects__linkIcon" />
            <FaExternalLinkAlt className="Projects__linkIcon" />
          </div>
        </div>
      </div>

      <div className="Projects__card">
        <div className="Projects__content">
          <div className="Projects__cardTitle">MediSearch</div>
          <div className="Projects__techStack">
            <div className="Projects__techListItem">React</div>
            <div className="Projects__techListItem">NodeJS</div>
            <div className="Projects__techListItem">ExpressJS</div>
            <div className="Projects__techListItem">MongoDB</div>
          </div>
          <div className="Projects__description">
            Currently in Sri Lanka we have an issue of finding medicines as most
            of the medicines are running out of stock from the hospitals and
            nearby pharmacies. So, this solution is being built to mitigate that
            issue up to some extent.
          </div>
          <div className="Projects__links">
            <FaGithub className="Projects__linkIcon" />
            <FaExternalLinkAlt className="Projects__linkIcon" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

// MediSearch (Web – React, NodeJS, ExpressJS, MongoDB)
// Currently in Sri Lanka we have an issue of finding medicines as most of the medicines are running out of stock from the hospitals and nearby pharmacies. So, this solution is being built to mitigate that issue up to some extent.

// CameraRentClub (Web – React, NodeJS, ExpressJS, MongoDB)
// This project is developed for a client who is doing business related to camera rental. This project allows him to manage his inventory, manage the reservations etc.

// Brighterbee (Web – React, NodeJS, ExpressJS, MongoDB)
// A school management system which helps the students and teachers to work collaboratively in pandemic situation like Covid. It allows teachers to upload lessons

// Srr-elapsedtimer (An Angular package)
// This is an opensource contribution for Angular Framework, which can be obtained via NPM. This package lets the user to create a customizable elapsed timer which can be used in their Angular projects.

// HospitalCore (Web – Angular, Firebase | IoT Device - Arduino)
// A website which is built for the doctors to do live consultations with the patients. the system also allows patients to manage their health data on this system. IoT device has the capability to upload the current  temperature and the heart beat rate of the patient during the consultation

// Crossing Assistant (Android – Java | Windows Phone – C++)
// An app which helps the pedestrians to cross the road more safely at night. It was released to general public with the help of Sri Lanka Police in 2017

// News paper articles -  https://www.linkedin.com/posts/sankha-rathnayake_some-articles-about-my-first-mobile-app-activity-6691745556349407232-XJyE

// Released on Rupavahini - https://www.linkedin.com/posts/sankha-rathnayake_released-short-trailer-of-crossing-assistant-activity-6691749704797106176-Uf4J

// Informative app trailer - https://youtu.be/vFQ3hKDM-gY

// EventCorp (Web – Angular, Firebase)
// A website which is built for event organizers to organize events with just few clicks. It would also be helpful for Artists, Venue Owners, Suppliers to manage their event related tasks

// export const Projects = () => {
//   return (
//     <div className="Projects">
//       <div className="Projects__title">Recent Work</div>
//       <div className="Projects__cardContainer">
//         <div className="Projects__card">
//           <div className="Projects__content">
//             <div className="Projects__techStack">
//               <div className="Projects__techListItem">React</div>
//               <div className="Projects__techListItem">NodeJS</div>
//               <div className="Projects__techListItem">ExpressJS</div>
//               <div className="Projects__techListItem">MongoDB</div>
//             </div>
//             <div className="Projects__description">
//               Currently in Sri Lanka we have an issue of finding medicines as
//               most of the medicines are running out of stock from the hospitals
//               and nearby pharmacies. So, this solution is being built to
//               mitigate that issue up to some extent.
//             </div>
//             <div className="Projects__links">
//               <FaGithub className="Projects__linkIcon" />
//               <FaExternalLinkAlt className="Projects__linkIcon" />
//             </div>
//           </div>
//         </div>
//         <div className="Projects__cardTitle">MediSearch</div>
//       </div>
//     </div>
//   );
// };

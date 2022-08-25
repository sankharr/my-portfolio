// packages
import React from "react";

// styling
import "./Profile.scss";

const Profile = ({ refHook }) => {
  return (
    <div className="Profile" ref={refHook}>
      {/* <Tilt className="Profile__card" options={{}}> */}
        <div className="Profile__card">
          <div className="Profile__cardTitle">Education</div>
          <div className="Profile__listItem">
            <div className="Profile__listItemTitle">
              B.Sc. in Computer Science <span>(2018 – 2021)</span>
            </div>
            <div className="Profile__listItemSubtitle">
              University of Colombo
            </div>
          </div>

          <div className="Profile__listItem">
            <div className="Profile__listItemTitle">
              Advanced Level Examination <span>(2016)</span>
            </div>
            <div className="Profile__listItemSubtitle">
              St. Joseph’s College, Colombo 10
            </div>
            <div className="Profile__listItemContent">
              Mathematics – A | Physics – B | IT - B <br />
              District Rank – 07 | Country Rank – 18 
            </div>
          </div>
        </div>
      {/* </Tilt> */}
      <div className="Profile__card">
        <div className="Profile__cardTitle">Experience</div>
        <div className="Profile__listItem">
          <div className="Profile__listItemTitle">
            Frontend Developer <span>(2021 – Present)</span>
          </div>
          <div className="Profile__listItemSubtitle">Freelance</div>
          <div className="Profile__listItemContent">
            <ul>
              <li>Developed and modified frontends with React</li>
              <li>
                Developed and modified backends with Node.js, ExpressJS,
                MongoDB, Firebase
              </li>
              <li>
                Developed a small angular package (srr-elapsedtimer) and
                published to NPM
              </li>
            </ul>
          </div>
        </div>

        <div className="Profile__listItem">
          <div className="Profile__listItemTitle">
            Associate Engineer <span>(2021/05 – 2022/05)</span>
          </div>
          <div className="Profile__listItemSubtitle">
            London Stock Exchange Group
          </div>
          <div className="Profile__listItemContent">
            <ul>
              <li>
                Proposed, Planned and Developed 15+ python scripts to automate
                some time-consuming manual tasks.
              </li>
              <li>
                Improved experience in developing processes and portlets with
                Gel
              </li>
              <li>Improved experience in querying with Microsoft SQL Server</li>
            </ul>
          </div>
        </div>

        <div className="Profile__listItem">
          <div className="Profile__listItemTitle">
            Software Engineer Intern <span>(2020/10 – 2021-04)</span>
          </div>
          <div className="Profile__listItemSubtitle">
            London Stock Exchange Group
          </div>
          <div className="Profile__listItemContent">
            <ul>
              <li>Learned to develop processes and portlets with Gel</li>
              <li>Learned to work with Microsoft SQL Server</li>
              <li>
                Got practical experience in working with agile methodology with
                Jira
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);

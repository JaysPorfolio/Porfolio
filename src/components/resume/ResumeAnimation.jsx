import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. Front-end Engineer`,
    jobType: `Cognify | Remote`,
    jobDuration: `January 2023 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Cognify",
    jobDescription: ` Currently working collaboratively with cross-functional teams to understand user needs and design intuitive and user-friendly interfaces. 
    Create wireframes and prototypes, implementing responsive design principles,
    and optimizing website performance for fast load times and smooth user interactions. `,
    delayAnimation: "",
  },
  {
    jobPosition: `Computer Science Tutor`,
    jobType: `Tutor | Remote`,
    jobDuration: `Mar 2021 - December 2021`,
    timeDuraton: `Part Time`,
    compnayName: "Numerade",
    jobDescription: `Created a range of educational video content that effectively communicated basic computer science concepts to learners of all levels.
    Whilst also creating engaging and informative videos that tackle complex computer science topics or leetcode problems with clarity and depth.
    `,
    delayAnimation: "100",
  },
  {
    jobPosition: `Mechanical Intern`,
    jobType: `Intern | In Person`,
    jobDuration: `June 2023 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "University of Illinois Urbana Champaign ",
    jobDescription: `Honed my skills in assembling and modifying complex machinery, 
    including a Raman spectrometer. Developed a deep understanding of the scientific principles that underlie the operation of civil engineering machines, 
    which has enabled me to troubleshoot and resolve issues quickly and efficiently.`,
    delayAnimation: "200",
  },
];

const educatonContent = [
  {
    passingYear: "2020-2024",
    degreeTitle: "High School Degree",
    instituteName: "Bartlett High School",
  },
  {
    passingYear: "2022-2022",
    degreeTitle: "Computer Science - 50 (Class)",
    instituteName: "Harvard University",
  },

];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="210"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

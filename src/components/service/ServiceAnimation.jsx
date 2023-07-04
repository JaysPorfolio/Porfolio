import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Database Structures",
    descriptions: `Skilled in optimizing database performance, ensuring data integrity and security, and providing seamless access for end-users.`,
    delayAnimation: "",
  },
  {
    icon: "icon-desktop",
    title: "Software Development",
    descriptions: `Proficient in developing high-quality 
    software solutions from concept to deployment, with a focus on scalability, usability, and maintainability.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-phone",
    title: "Mobile Development",
    descriptions: `expertise in developing cross-platform applications for both iOS and Android platforms 
    using modern mobile development frameworks and tools.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div> 
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

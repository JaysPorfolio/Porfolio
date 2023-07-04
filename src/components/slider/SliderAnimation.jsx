import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "224-508-1824",
  email: " J.Patel2054@gmail.com",
};

const sliderContent = {
  name: "Jay Patel",
  designation: "Full-stack Developer",
  description: "I am a freelance Full-stack Developer with expertise in front-end and back-end development, database management, and server configuration.",
  btnText: " Donwload Resume",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:244-508-1824">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:J.patel2054@gmail.com">
              {conctInfo.email}
            </a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Full-stack Developer</p>
                    <p className="loop-text lead"> UI/UX Designer</p>
                    <p className="loop-text lead"> Front-End Developer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        {/* <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div> */}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

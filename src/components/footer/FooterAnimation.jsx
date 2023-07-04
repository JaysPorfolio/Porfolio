import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100057181173986" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/jpatel0505" },
  { Social: <FaLinkedinIn />, link: "linkedin.com/in/jay-patel-527bb1216" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://" //
              target="_blank"
              rel="noreferrer"
            >
              Jay Patel
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;

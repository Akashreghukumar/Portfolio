import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const ProfileCard = () => {
  const [isCopied, setIscopied] = useState("");

  const handleCopy = (val) => {
    setTimeout(() => {
      setIscopied("");
    }, 3000);
    val === "phone"
      ? navigator.clipboard.writeText("+91 8300282594")
      : navigator.clipboard.writeText("akashakash0211@gmail.com");
    setIscopied(val);
  };

  return (
    <div className="profile-card box-shadow">
      <div className="profile-img">
        <img
          style={{ objectFit: "cover", borderRadius: "10px" }}
          height="330px"
          width="100%"
          alt="imagedata"
          src={profileImg}
        />
      </div>
      <div className="profile-content">
        <h2>Akash Reghukumar</h2>
        <h3>
          A Passinated Full Stack Developer with 3+ years of experience in
          React Js, Node Js, MongoDB and Python
        </h3>
        <div className="social-media-links">
          <div className="borders" onClick={() => handleCopy("mail")}>
            {isCopied && isCopied === "mail" ? (
              <FaCopy size={30} />
            ) : (
              <SiGmail size={30} />
            )}
          </div>
          <div className="borders">
            <a href="https://www.linkedin.com/in/akashreghukumar/?trk=public-profile-join-page">
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className="borders">
            <a href="https://github.com/Akashreghukumar">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="borders" onClick={() => handleCopy("phone")}>
            {isCopied && isCopied === "phone" ? (
              <FaCopy size={30} />
            ) : (
              <FaPhone size={30} />
            )}
          </div>
          <div className="borders">
            <a href="https://drive.google.com/file/d/1xRpVYDrvGtFcsdiFfAKWamQ2vBHQQTxw/view?usp=sharing">
              <FaFileDownload size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

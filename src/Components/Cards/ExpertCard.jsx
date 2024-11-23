import React from "react";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

const ExpertCard = () => {
  return (
    <div className="right-card expert-area box-shadow">
      <div>
        <h1>My Expert Area</h1>
      </div>
      <div className="expert-icons">
        <div className="borders">
          <FaReact size={30} />
        </div>
        <div className="borders">
          <FaJs size={30} />
        </div>
        <div className="borders">
          <SiTypescript size={30} />
        </div>
        <div className="borders">
          <SiRedux size={30} />
        </div>
        <div className="borders">
          <FaNodeJs size={30} />
        </div>
        <div className="borders">
          <SiMongodb size={30} />
        </div>
        <div className="borders">
          <FaPython size={30} />
        </div>
        <div className="borders">
          <FaMeta size={30} />
        </div>
        <div className="borders">
          <FaGitAlt size={30}/>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;

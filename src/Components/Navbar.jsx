import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";

const Navbar = ({onHandlePage,setIsDark,isdark}) => {
  return (
    <div className="navbar box-shadow">
      <div className="icon-data">
        <div>
        </div>
        <h1>Akashfolio</h1>
      </div>
      <div className="link-area">
        <div onClick={()=>onHandlePage("home")} className="link-icon">
          <MdHomeFilled size={30}/>
          <div className="link">Home</div>
        </div>
        <div onClick={()=>onHandlePage("experience")} className="link-icon">
          <MdPermContactCalendar size={30} />
          <div className="link">Experience</div>
        </div>
        <div onClick={()=>onHandlePage("projects")} className="link-icon">
          <FaProjectDiagram size={30}/>
          <div className="link">Projects</div>
        </div>
        <div onClick={()=>onHandlePage("contact")} className="link-icon">
          <FaMessage size={30}/>
          <div className="link">Contact</div>
        </div>
      </div>
      <div className="talk-area">
        <div onClick={()=>setIsDark(!isdark)}>
          {
            isdark ? <CiLight color="orange" size={30}/> : <MdDarkMode size={30} />
          }
          
        </div>
        <button  onClick={()=>onHandlePage("contact")} className="button">Let's talk</button>
      </div>
    </div>
  );
};

export default Navbar;

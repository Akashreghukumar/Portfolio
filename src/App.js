import "./App.css";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
import ListCard from "./Components/Cards/ListCard";
import SummaryCard from "./Components/Cards/SummaryCard";
import ExpertCard from "./Components/Cards/ExpertCard";
import { act, useState } from "react";
import Contact from "./Components/Cards/Contact";
import Projects from "./Components/Cards/Projects";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [isdark,setIsDark] = useState(true)

  const onHandlePage = (page) => {
    setActivePage(page);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={isdark ? "dark":"light"}
    >
      <div className="nav-area">
        <Navbar onHandlePage={onHandlePage} isdark={isdark} setIsDark={setIsDark} />
      </div>
      <div className="content">
        <div className="left">
          <ProfileCard />
        </div>
        <div className="right">
          {activePage === "home" && (
            <>
              <SummaryCard />
              <ExpertCard />
            </>
          )}
          {activePage === "experience" && <ListCard />}
          {activePage === "projects" && <Projects/>}
          {activePage === "contact" && <Contact />}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { workExperience } from "../../Constants/WorkExperience";

const ListCard = () => {
  return (
    <div className="workexprience right-card box-shadow">
      <h1>{workExperience.containerTitle}</h1>
      <h2>{workExperience.subTitle}</h2>

      {workExperience.data.map((val) => {
        return (
          <div>
            <h3>
              {val.projectTitle} {val.role}
            </h3>
            <ul>
              {val.projectContributions.map((contributions) => {
                return <li className="list-style">{contributions}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListCard;

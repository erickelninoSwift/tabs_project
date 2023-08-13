import React from "react";
import { Duties } from "./Duties";

export const JobsInfo = ({ myJobInfos, currentJobsItems }) => {
  const { id, order, title, dates, company, duties } =
    myJobInfos[currentJobsItems];
  return (
    <>
      <article className="job-info">
        <div key={id}>
          <h3>{title}</h3>
          <span className="job-company">{company}</span>
          <p className="job-date">{dates}</p>
          <Duties duties={duties} />
        </div>
      </article>
    </>
  );
};

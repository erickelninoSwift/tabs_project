import React from "react";
import { Duties } from "./Duties";

export const JobsInfo = ({ myJobInfos }) => {
  const { id, order, title, dates, company, duties } = myJobInfos[0];
  return (
    <>
      <article className="job-info" key={id}>
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <Duties duties={duties} />
      </article>
    </>
  );
};

import React from "react";
// import { v4 as uuidv4 } from "uuid";

export const ButtonContainer = ({ alljobs, buttonPressedItems }) => {
  //   let allTitle = alljobs.map((data) => {
  //     return data.title;
  //   });

  return (
    <>
      <section className="btn-container">
        {alljobs.map((data, index) => {
          return (
            <button
              key={data.id}
              className="job-btn"
              onClick={() => buttonPressedItems(index)}
            >
              {data.company}
            </button>
          );
        })}
      </section>
    </>
  );
};

import React from "react";
// import { v4 as uuidv4 } from "uuid";

export const ButtonContainer = ({
  alljobs,
  buttonItem,
  buttonPressedItems,
}) => {
  //   let allTitle = alljobs.map((data) => {
  //     return data.title;
  //   });

  return (
    <>
      <div className="btn-container">
        {alljobs.map((data, index) => {
          return (
            <button
              key={data.id}
              onClick={() => buttonPressedItems(index)}
              className={
                index === buttonItem ? "job-btn active-btn" : "job-btn"
              }
            >
              {data.company}
            </button>
          );
        })}
      </div>
    </>
  );
};

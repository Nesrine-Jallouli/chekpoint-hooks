import React from "react";

const Rate = ({ starIndex, rating }) => {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span
            key={i}
            style={{ cursor: "pointer" , width: "60px" }}
            onClick={() => starIndex(i)}
          >
            ★
          </span>
        );
      } else {
        starArray.push(
          <span
            key={i}
            style={{ cursor: "pointer", width: "60px" }}
            onClick={() => starIndex(i)}
          >
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  starIndex: () => {},
  rating: 1,
};

export default Rate;

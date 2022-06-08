import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const ThirdYear = () => {
  var titles = {
    card1: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "CS Fundamentals",
      content: "Learn to build fully functional web applications.",
      link: "/engtrack/thirdyear/cs_fundamentals",
    },
    card2: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Internship",
      content: "Learn Competitive Programming.",
      link: "/engtrack/thirdyear/internship",
    },
    card3: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Leetcode",
      content: "Learn data structures and algorithms.",
      link: "/engtrack/thirdyear/leetcode",
    },
  };
  return (
    <div className="main__card">
      <CardComponent data={titles.card1} />
      <CardComponent data={titles.card2} />
      <CardComponent data={titles.card3} />
    </div>
  );
};

export default ThirdYear;

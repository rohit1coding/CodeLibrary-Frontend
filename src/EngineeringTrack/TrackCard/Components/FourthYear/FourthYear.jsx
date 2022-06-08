import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const FourthYear = () => {
  var titles = {
    card1: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Interview Preparation",
      content: "Learn to build fully functional web applications.",
      link: "#",
    },
    card2: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Aptitude",
      content: "Learn Competitive Programming.",
      link: "#",
    },
    card3: {
      img: "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
      title: "Placement Portal",
      content: "Learn data structures and algorithms.",
      link: "#",
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

export default FourthYear;

import React from "react";
import Gallerys from "react-photo-gallery";
import g1 from "../icons/ideas/Goal1.png";
import g2 from "../icons/ideas/Goal2.png";
import g3 from "../icons/ideas/Goal3.png";
import g4 from "../icons/ideas/Goal4.png";
import g5 from "../icons/ideas/Goal5.png";
import r1 from "../icons/ideas/Reward1.png";
import r2 from "../icons/ideas/Reward2.png";
import r3 from "../icons/ideas/Reward3.png";
import r4 from "../icons/ideas/Reward4.png";
import r5 from "../icons/ideas/Reward5.png";

// USED FOR CREATING NEW CHALLENGE FLOW WHEN DISPLAYING EXAMPLE CHALLENGES THAT
// USER CAN HORIZONTALLY SCROLL THROUGH
const GoalPhotos = [
  {
    src: g1,
    width: 1,
    height: "100%",
  },
  {
    src: g2,
    width: 1,
    height: "100%",
  },
  {
    src: g3,
    width: 1,
    height: "100%",
  },
  {
    src: g4,
    width: 1,
    height: "100%",
  },
  {
    src: g5,
    width: 1,
    height: "100%",
  },
];

const RewardPhotos = [
  {
    src: r1,
    width: 1,
    height: "100%",
  },
  {
    src: r2,
    width: 1,
    height: "100%",
  },
  {
    src: r3,
    width: 1,
    height: "100%",
  },
  {
    src: r4,
    width: 1,
    height: "100%",
  },
  {
    src: r5,
    width: 1,
    height: "100%",
  },
];

const Content = {
  height: "250px",
  display: "inline-flex",
  float: "left",
  width: "auto",
  overflowX: "scroll",
  img: {
    borderRadius: "10px",
  },
};
class Picture extends React.Component {
  render() {
    return (
      <div style={Content}>
        {this.props.isGoal ? (
          <Gallerys direction={"row"} photos={GoalPhotos} />
        ) : (
          <Gallerys direction={"row"} photos={RewardPhotos} />
        )}
      </div>
    );
  }
}

export default Picture;

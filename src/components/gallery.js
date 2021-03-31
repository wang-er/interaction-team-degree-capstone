import React from "react";
import Gallerys from "react-photo-gallery";

// USED FOR CREATING NEW CHALLENGE FLOW WHEN DISPLAYING EXAMPLE CHALLENGES THAT
// USER CAN HORIZONTALLY SCROLL THROUGH
const photo = [
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 1,
    height: 0.1,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 1,
    height: 0.1,
  },

  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 1,
    height: 1,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 1,
    height: 1,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 3,
    height: 3,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 3,
    height: 3,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 3,
    height: 3,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 3,
    height: 3,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 3,
    height: 3,
  },
  {
    src: "https://emojis.wiki/emoji-pics/apple/hot-face-apple.png",
    width: 3,
    height: 3,
  },
];
const Content = {
  height: "200px",
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
        <Gallerys direction={"row"} margin={20} photos={photo} />
      </div>
    );
  }
}

export default Picture;

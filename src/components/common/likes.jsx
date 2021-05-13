import React from "react";

const Likes = props => {
  let classes = "fa fa-heart";
  if (props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer", color: "#DC2B6B" }}
      onClick={props.onClick}
      className={classes}
      area-hidden="true"
    ></i>
  );
};

export default Likes;

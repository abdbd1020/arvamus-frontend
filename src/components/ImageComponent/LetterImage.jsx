import React from "react";
import "./LetterImage.css";

export function LetterImage(props) {
  const { name = "Abdullah Ibne Masud" } = props;
  // make a random class name with color{1-10} and then add this on the class name

  //take only first letter of each word of name
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  // make a random class name with color{1-10} and then add this on the class name
  const randomColor = Math.floor(Math.random() * 10) + 1;

  return <div className={"initials" + " color" + randomColor}>{initials}</div>;
}

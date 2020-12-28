//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
const yourName = "Prashant";
const currentYear = 2021;
ReactDOM.render(
  <div>
    <h1>This is my website.</h1>
    <p>Created by {yourName}</p>
    <p>Copy Right {currentYear}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

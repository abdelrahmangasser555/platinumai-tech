import React from "react";
import  ReactDOM  from "react-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "../solo1.css";
import profile from "../images/joe-amar.jpg";

export default function Header(){
  return (
    <div className="header">
      <div>
      <img src = {profile} alt="profile" className="profile"/>
      </div>
      <div className="buttons">
        <button className="button-left">About</button>
        <button className="button-right">Projects</button>
      </div>
      <div class = "body-text"> 
        <h1 className="header-text">
          Shorse horse
        </h1>
        <p className="paragragh-left">I am a back-end developer dev-ops aws amplify</p>
        <p className="paragragh-right">a langchain developer </p>
        <p className="paragragh-left-1">flutter apps is my game </p>
        <p className="paragragh-right-1">javaskript and type skript</p>
      </div>


    </div>
  )
}
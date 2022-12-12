import React from "react";
import "./App.css";
import Web1 from"../src/images/myabt.png"
import {NavLink} from "react-router-dom"
import Common from "./Common"

function About() {
  return (
    <>
      <Common name="Welcome to About Page" imgsrc={Web1} visit="/contact" btname="Contact Now" biodata="Welcome to our company. We provide development services. Feel free to ask us for any Queries or to get services you want from us. Our team will respond within 24hours."/>
    </>
  );
}

export default About;

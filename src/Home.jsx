import React from "react";
import "./App.css";
import Web9 from"../src/images/img1.png"
import Common from "./Common"

function Home() {
  return (
    <>
      <Common name="Grow your Business with " imgsrc={Web9} visit="/service" btname="Get Started" biodata="We are team of talented developers building websites"/>
    </>
  );
}

export default Home;

import React from "react";
import "./App.css";
import Web from "./images/img1.jpg";
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>
      <div className="container_fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    description={val.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

import React from "react";
import "./PictureSlide2.css";
import pic2 from "../assets/2.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PictureSlide2() {
  const percentage1 = 66;
  const percentage2 = 20;
  const percentage3 = 80;
  const percentage4 = 50;
  const percentage5 = 37;
  return (
    <>
      <div id="Slide2">
        <img src={pic2} alt="" />
        <div className="d-flex justify-content-center">
          <div className="range">
            <p>world</p>
            <div style={{ width: 50, height: 50, margin: "5px 15px" }}>
              <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
              />
            </div>
            <p>time</p>
          </div>
          <div className="range">
            <p>world</p>
            <div style={{ width: 50, height: 50, margin: "5px 15px" }}>
              <CircularProgressbar
                value={percentage2}
                text={`${percentage2}%`}
              />
            </div>
            <p>time</p>
          </div>
          <div className="range">
            <p>world</p>
            <div style={{ width: 50, height: 50, margin: "5px 15px" }}>
              <CircularProgressbar
                value={percentage3}
                text={`${percentage3}%`}
              />
            </div>
            <p>time</p>
          </div>
          <div className="range">
            <p>world</p>
            <div style={{ width: 50, height: 50, margin: "5px 15px" }}>
              <CircularProgressbar
                value={percentage4}
                text={`${percentage4}%`}
              />
            </div>
            <p>time</p>
          </div>
          <div className="range">
            <p>world</p>
            <div style={{ width: 50, height: 50, margin: "5px 15px" }}>
              <CircularProgressbar
                value={percentage5}
                text={`${percentage5}%`}
              />
            </div>
            <p>time</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PictureSlide2;

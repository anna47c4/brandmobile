import React from "react";
import PrimaryButton from "./PrimaryButton";
import testVideo from "../assets/video/video-test.mp4";
import CB from "../assets/caseAssets/carlsberg.webp";
function CaseExamples() {
  return (
    <>
      <div className="case-videos">
        <div className="video-logo-group">
          <div className="phone-container">
            <video autoPlay muted loop src={testVideo}></video>
          </div>
          <div className="img-container">
            <img src={CB} style={{ width: "100px" }}></img>
          </div>
        </div>

        <div className="video-logo-group">
          <div className="phone-container">
            <video autoPlay muted loop src={testVideo}></video>
          </div>
          <div className="img-container">
            <img src={CB} style={{ width: "100px" }}></img>
          </div>
        </div>

        <div className="video-logo-group">
          <div className="phone-container">
            <video autoPlay muted loop src={testVideo}></video>
          </div>
          <div className="img-container">
            <img src={CB} style={{ width: "100px" }}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseExamples;

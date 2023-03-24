import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import Footer from "../components/Footer";
function SoloProject({ caseData }) {
  const location = useLocation();
  /*   console.log(location.state); */
  let theCase;
  caseData.map((soloCase) => {
    if (soloCase.id === location.state.caseId) {
      theCase = soloCase;
    }
  });

  //navigate to the contact page
  const navigate = useNavigate();
  function goToContact() {
    navigate("../contact");
  }

  return (
    <>
      <section className="soloSection">
        {/*      <div className="top-img">
          <img
            src={theCase.img}
            alt={theCase.company}
            className={theCase.company}
          ></img>
        </div> */}
        <div className="top-container">
          <div className="logo">
            {!theCase.logo && <p>no logo.</p>}{" "}
            {theCase.logo && (
              <img
                src={theCase.logo}
                alt={theCase.company}
                className={theCase.company}
                style={{ width: "150px" }}
              ></img>
            )}
          </div>
          <div className="story">
            <p style={{ textTransform: "uppercase" }}>{theCase.story}</p>
          </div>
        </div>
        <div className="case-txt">
          <h1>{theCase.intro}</h1>
          <p className="break-line">{theCase.longdesc}</p>
        </div>
        <div className="btn">
          <PrimaryButton
            desc={"GET IN TOUCH"}
            clickAction={goToContact}
          ></PrimaryButton>
        </div>
        <div className="numbers"></div>
        <div className="case-video">
          <div className="phone-container">
            <video autoPlay muted loop src={theCase.video}></video>
          </div>
        </div>
        <div className="results">
          {theCase.results.resulttitle.map((title, i) => (
            <div>
              <div className="ico-txt-group">
                <img src={theCase.results.resultico[i]}></img>
                <p>{title}</p>
              </div>
              <p>{theCase.results.resulttext[i]}</p>
            </div>
          ))}
        </div>
        <div className="txt">
          <h2>We have worked with some of the top brands across the globe</h2>
          <p>And we would love to help you too</p>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SoloProject;

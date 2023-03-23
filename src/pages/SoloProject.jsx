import React from "react";
import { useLocation } from "react-router-dom";
function SoloProject({ caseData }) {
  const location = useLocation();
  /*   console.log(location.state); */
  let theCase;
  caseData.map((soloCase) => {
    if (soloCase.id === location.state.caseId) {
      theCase = soloCase;
    }
  });

  return (
    <>
      <section className="soloSection">
        <div className="top-container">
          <div className="logo">
            {!theCase.logo && <p>no logo.</p>}{" "}
            {theCase.logo && (
              <img
                src={theCase.logo}
                alt={theCase.company}
                className={theCase.company}
              ></img>
            )}
          </div>
        </div>
        <h1>{theCase.title}</h1>
        <p>{theCase.longdesc}</p>
      </section>
    </>
  );
}

export default SoloProject;

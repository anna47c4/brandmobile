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
      <h1>{theCase.title}</h1>
      <p>{theCase.longdesc}</p>
    </>
  );
}

export default SoloProject;

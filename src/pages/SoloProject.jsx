import React from "react";
import { useLocation } from "react-router-dom";
function SoloProject({ caseData }) {
  const location = useLocation();

  let theCase;
  caseData.map((soloCase) => {
    if (soloCase.name === location.state.name) {
      theCase = soloCase;
    }
  });

  // custom hook to get the current pathname in React

  return (
    <>
      <h1>{theCase.title}</h1>
    </>
  );
}

export default SoloProject;

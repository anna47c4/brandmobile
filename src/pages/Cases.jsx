import BmCases from "../components/BmCases";
import Footer from "../components/Footer";
import { useEffect } from "react";
function Cases({ caseData }) {
  /*   console.log(caseData); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="case-page-wrapper">
        <section className="caseHeroSection">
          <div className="caseHeroText center-place-dir">
            <p>Engagement that moves your Brand.</p>
            <h1>Some cases for your inspiration</h1>
          </div>
        </section>
        <main>
          <section className="caseSection">
            <div className="case-container">
              {caseData.map((soloCase, index) => (
                <BmCases key={index} soloCase={soloCase}></BmCases>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cases;

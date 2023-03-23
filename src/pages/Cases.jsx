import BmCases from "../components/BmCases";
import Footer from "../components/Footer";

function Cases({ caseData }) {
  /*   console.log(caseData); */
  return (
    <>
      <div className="case-page-wrapper">
        <section className="caseHeroSection">
          <div className="caseHeroText center-place-dir">
            <p>We build bridges between brands and people.</p>
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

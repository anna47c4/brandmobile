import WhiteIcon from "../assets/bm-ico-white.webp";
import PlaceHolder from "../assets/bm-placeholder.png";
function HeroSection() {
  return (
    <>
      <section className="heroSection">
        <div className="heroText center-place-dir">
          <h1>
            <img
              src={WhiteIcon}
              className="bm-ico-white"
              alt="Brandmobile white icon"
              style={{ width: "30px" }}
            ></img>
            We build bridges between brands and people.
          </h1>
          <p>And we do it quite well.</p>
        </div>
        {/* THERE IS GOING TO BE A VIDEO HERE, PLACEHOLDER FOR NOW */}
        <div className="heroImg center-place-dir">
          <img
            src={PlaceHolder}
            className="bm-placeholder"
            alt="Brandmobile placeholder work"
            style={{ width: "150px" }}
          ></img>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

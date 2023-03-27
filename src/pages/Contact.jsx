import ContactForm from "../components/ContactForm";
import TestImg from "../assets/svg/big-bg.svg";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <section className="contactSection">
        <main>
          <div className="box">
            {/*    <img src={TestImg} alt="test" className="test-img"></img> */}
            <p className="p-top">Let's work together!</p>
            <p className="p-bottom">
              We’re currently taking on new projects. Would you like to discuss
              yours? Call us at <span>+45 26 85 85 85</span> or send us a
              message through the formular!
            </p>
          </div>
          <div>
            {" "}
            <ContactForm></ContactForm>
          </div>
        </main>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Contact;

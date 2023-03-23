import ContactForm from "../components/ContactForm";
import TestImg from "../assets/svg/big-bg.svg";
function Contact() {
  return (
    <>
      <section className="contactSection">
        <div>
          <img src={TestImg} alt="test" className="test-img"></img>
        </div>
        <div>
          {" "}
          <ContactForm></ContactForm>
        </div>
      </section>
    </>
  );
}

export default Contact;

import React from "react";
import { Link } from "react-router-dom";
/* onSubmit={submit} ref={theForm} */
function ContactForm() {
  return (
    <>
      <form>
        <fieldset>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input required minLength="1" type="name" name="name" id="name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">E-mail</label>
            <input required type="email" name="email" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              required
              minLength="1"
              maxLength="100"
              name="message"
              id="message"
            />
          </div>
          <div className="form-control-check">
            <input type="checkbox" id="my-id"></input>
            <label for="my-id">
              By checking this box, you consent to sending your details to us
              over email. For more info check our{" "}
              <Link classname="link" to="../privacyPolicy">
                privacy policy
              </Link>{" "}
              where you will get more info on where, how and why we store your
              data.
            </label>
          </div>
          <button>SUBMIT</button>
        </fieldset>
      </form>
    </>
  );
}

export default ContactForm;

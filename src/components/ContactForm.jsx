import React from "react";
/* onSubmit={submit} ref={theForm} */
function ContactForm() {
  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="form-name">Name</label>
          <input required type="text" name="name" id="form-name" />
        </div>
        <div className="form-control">
          <label htmlFor="form-email">E-mail</label>
          <input required type="email" name="email" id="form-email" />
        </div>
        <div className="form-control">
          <label htmlFor="form-adress">Message</label>
          <textarea required name="adress" id="form-adress" />
        </div>
        <button>SUBMIT</button>
      </form>
    </>
  );
}

export default ContactForm;

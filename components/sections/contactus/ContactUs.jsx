const ContactUs = () => {
  return (
    <div className="contactus">
      <h1 className="contactusBgtitle">
        Contact <br /> Us
      </h1>
      <div className="container">
        <div className="contactInner">
          <form className="contactForm">
            <div className="contactField">
              <input type="text" placeholder="Name" />
            </div>
            <div className="contactField">
              <input type="text" placeholder="Email" />
            </div>
            <div className="contactField">
              <input type="text" placeholder="Order Number" />
            </div>
            <div className="contactField">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="TYPE YOUR MESSAGE HERE..."
              ></textarea>
            </div>
            <div className="contactField">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

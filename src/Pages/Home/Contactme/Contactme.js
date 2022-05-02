import React from "react";


const Contactme = () => {
  return (
    <div className=" bg-secondary  mt-4">
      
      <div className="container">
      <h2 className="display-6 mb-2 text-center">Contact Me</h2>
        <div className="d-flex row ">
          <div className="col-4">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email : isthy119@gmail.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone : 01843336009</strong>
              </p>
            </address>
          </div>
          <div className="col-7">
            <form className="contact__form w-100">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
              />
              <br />

              <input
                className="form-control "
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <br />
              <textarea
              className="w-100 from-control "
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
            ></textarea>
            <button className="btn btn-primary w-50 m-auto mb-2">Send</button>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Contactme;

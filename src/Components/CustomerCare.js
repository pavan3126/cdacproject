// import React from "react";
// import {Container } from "react-bootstrap";
// import logo from "./images/customercare.png";
// import "./common.css";

// function CustomerCare() {
//   return (
//     <div className="CustomerCare">
//       <Container>
//         <br />
//         <header className="CustomerCare-header">
//           <img
//             src={logo}
//             className="CustomerCare-logo m-auto"
//             width="250"
//             height="250"
//             alt="logo"
//           />
//         </header>
//         <hr />
//         <u>
//           <h3>Customer Care</h3>
//         </u>
//         <br />
//         <hr />
//         <h6>
//           Call Us At:
//           91000222111
//         </h6>
//         <br />
//         <br />
//       </Container>
//     </div>
//   );
// }

// export default CustomerCare;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import location from "./images/location.jpg";
import call from "./images/call.png";
import mail2 from "./images/mail2.jpg";


export default function CustomerCare() {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  // useEffect(() => {
  //   fetch("http://localhost:44364/api/contact/")
  //     .then(res => res.json())
  //     .then((result) => {
  //       setContact(result);
  //     }
  //     );
  // }, {});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    console.log(contact);
    let demo = JSON.stringify(contact);
    console.log(JSON.parse(demo));
    fetch("http://localhost:44364/aboutus", {
      method: "Post",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r.json());
    });
    alert("Thanks for reaching us!!");
    navigate("/");

    event.preventDefault();
  };
  return (
    <>
      <>
        <section className="mb-4">
          {/*Section heading*/}
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          {/*Section description*/}
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                <br />
                {/*Grid row*/}
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <br />
                {/*Grid row*/}
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows={2}
                        className="form-control md-textarea"
                        defaultValue={""}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-outline-dark btn-lg px-5"
                  type="submit"
                >
                  Submit
                </button>

                <br />
                {/*Grid row*/}
              </form>
              {/* <div className="text-center text-md-left">
                <a
                  className="btn btn-primary"
                  onclick="handleSubmit().;"
                >
                 send
                </a>
              </div> */}
              <div className="status" />
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <img src={location} width={70} height={80} />
                <li>
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <p>San Francisco, CA 94126, USA</p>
                </li>
                <img src={call} width={50} height={50} />
                <li>
                  <i className="fas fa-phone mt-4 fa-2x" />
                  <p>+ 01 234 567 89</p>
                </li>
                <img src={mail2} width={70} height={80} />
                <li>
                  <i className="fas fa-envelope mt-4 fa-2x" />
                  <p>contact@mdbootstrap.com</p>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
          </div>
        </section>
        {/*Section: Contact v.2*/}
      </>
    </>
  );
};

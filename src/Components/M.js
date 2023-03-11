// import { React, useState, useEffect } from "react";
// import { Row, Col, Button, Container, Form } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";
// import BookingService from "../services/BookingService";
// import logo from "./images/home.jpg";
// import logo2 from "./images/home2.jpg";
// import logo3 from "./images/home3.jpg";
// import logo4 from "./images/home4.jpg";
// import logo5 from "./images/home5.jpg";
// import logo6 from "./images/home6.jpg";
// import logo7 from "./images/flite.png";
// import FlipClock from "x-react-flipclock";


// export default function Home() {
//   const [validated, setValidated] = useState(false);
//   const [startdate, setStartDate] = useState(new Date());
//   const [enddate, setEndDate] = useState(new Date());
//   const [bid, setBid] = useState("");
//   const [airport, setAirport] = useState([]);
//   const [state, setState] = useState([]);
//   const [spcity, setSpcity] = useState([]);
//   const [srcity, setSrcity] = useState([]);
//   const [pstate, setPstate] = useState({});
//   const [pcity, setPcity] = useState([]);
//   const [pairport, setPairport] = useState({});
//   const [rcity, setRcity] = useState([]);
//   const [rstate, setRstate] = useState({});
//   const [rairport, setRairport] = useState({});
//   let navigate = useNavigate();
//   const [home, setHome] = useState({
//     startdate: "",
//     enddate: "",
//     pcity: "",
//     rcity: "",
//     phubid: "",
//     rhubid: "",
//     cartypeid: "",
//     customerid: ""
//   });

//   home.startdate = startdate;
//   home.enddate = enddate;
//   home.pcity = spcity;
//   home.rcity = srcity;

//   useEffect(() => {
//     fetch("https://localhost:44364/api/states")
//       .then((res) => res.json())
//       .then((result) => {
//         setState(result);
//       });
//   }, []);
//   useEffect(() => {
//     fetch("https://localhost:44364/api/states")
//       .then((res) => res.json())
//       .then((result) => {
//         setAirport(result);
//       });
//   }, []);

//   const getpcities = (Id) => {
//     fetch("https://localhost:44364/api/citiesbystateid/" + Id)
//       .then((res) => res.json())
//       .then((result) => {
//         setPcity(result);
//       });
//   };
//   const getrcities = (Id) => {
//     fetch("https://localhost:44364/api/citiesbystateid/" + Id )
//       .then((res) => res.json())
//       .then((result) => {
//         setRcity(result);
//       });
//   };

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }
//     setValidated(true);
//      sessionStorage.setItem("box", JSON.stringify(home));
//      navigate(
//             "/selectlocation"
//           );

//     // const booking = { startdate, enddate };
//     // {
//     //   BookingService.createBooking(booking)
//     //     .then((response) => {
//     //       setBid(response.data.bookingid);
//     //       console.log(response.data);
//     //       sessionStorage.setItem("box", JSON.stringify(home));
//     //       navigate(
//     //         "/selectlocation/" +
//     //           spcity +
//     //           "/" +
//     //           srcity +
//     //           "/" +
//     //           response.data.bookingid
//     //       );
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });
//     // }
//   };

//   return (
//     <Container>
//       <br />
//       <div className="home-header">
//         <video loop muted autoPlay width="50%" height="50%">
//           <source src={vid} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <Row>
//         <Col>
//           <br />
//           <br /> <hr />
//           <br />
//           <Form noValidate validated={validated} onSubmit={handleSubmit}>
//             <FlipClock
//               type="clock"
//               units={[
//                 {
//                   sep: "",
//                   type: "days",
//                   title: "day",
//                 },
//                 {
//                   sep: "/",
//                   type: "months",
//                   title: "month",
//                 },
//                 {
//                   sep: "/",
//                   type: "years",
//                   title: "year",
//                 },
//                 {
//                   sep: " | ",
//                   type: "hours",
//                   title: "hour",
//                 },
//                 {
//                   sep: ":",
//                   type: "minutes",
//                   title: "minute",
//                 },
//                 {
//                   sep: ":",
//                   type: "seconds",
//                   title: "second",
//                 },
//               ]}
//             />
//             <br /> <hr />
//             <br />
//             <Row>
//               <Col>
//                 <Row>
//                   <Form.Label>
//                     <b>Pickup Date:</b>
//                   </Form.Label>
//                   <DatePicker
//                     selected={startdate}
//                     onChange={(date) => setStartDate(date)}
//                   />
//                 </Row>
//                 <br />
//               </Col>
//               <Col>
//                 <Row>
//                   <Form.Label>
//                     <b>Return Date:</b>
//                   </Form.Label>
//                   <DatePicker
//                     selected={enddate}
//                     onChange={(date) => setEndDate(date)}
//                   />
//                 </Row>
//                 <br />
//               </Col>
//             </Row>
//             <br />
//             <hr />
//             <Row>
//               <Form.Label>
//                 <br />
//                 <h5>
//                   <u>
//                     {" "}
//                     <b>Pick-Up Location</b>
//                   </u>
//                 </h5>
//               </Form.Label>
//               {/* <Col>
//                 <b>Enter Airport Code:</b>
//               </Col>
//               <Col md="auto">
//                 {" "}
//                 <img
//                   src={logo7}
//                   className="ms-auto"
//                   width="30"
//                   height="30"
//                   alt="logo"
//                 />
//               </Col>
//               <Col>
//                 <Form.Select
//                   aria-label="Default select example"
//                   name="pairport"
//                   onChange={(e) => setPstate(e.target.value)}
//                   required
//                 >
//                   <option>Select</option>
//                   {airport.map((e) => (
//                     <option value={e.airportid}>{e.airportname}</option>
//                   ))}
//                 </Form.Select>
//               </Col> */}
//             </Row>
//             <br />
//             {/* <Form.Label>
//               <h5>
//                 <b>
//                   <u>OR</u>
//                 </b>
//               </h5>
//             </Form.Label> */}
//             <Row>
//               <Col>
//                 <Form.Label>
//                   <b>Enter State:</b>
//                 </Form.Label>
//               </Col>
//               <Col>
//                 <Form.Select
//                   aria-label="Default select example"
//                   name={pstate}
//                   onChange={(e) => getpcities(e.target.value)}
//                 >
//                   <Form.Control required isValid="false" />
//                   <option>Select</option>
//                   {state.map((item) => (
//                     <option value={item.stateid}>{item.statename}</option>
//                   ))}
//                 </Form.Select>
//               </Col>
//               <Col>
//                 <Form.Label>
//                   <b>Enter City:</b>
//                 </Form.Label>
//               </Col>
//               <Col>
//                 <Form.Select
//                   aria-label="Default select example"
//                   onChange={(e) => setSpcity(e.target.value)}
//                   name={spcity}
//                 >
//                   <option>Select</option>
//                   {pcity.map((e) => (
//                     <option value={e.cityid}>{e.cityname}</option>
//                   ))}
//                 </Form.Select>
//               </Col>
//             </Row>
//             <br />
//             <hr />
//             <Row>
//               <Form.Label>
//                 <br />
//                 <h5>
//                   <u>
//                     <b>Return Location</b>
//                   </u>
//                 </h5>
//               </Form.Label>
//               {/* <Col>
//                 <b>Enter Airport Code: </b>
//               </Col>
//               <Col md="auto">
//                 {" "}
//                 <img
//                   src={logo7}
//                   className="ms-auto"
//                   width="30"
//                   height="30"
//                   alt="logo"
//                 />
//               </Col>
//               <Col>
//                 <Form.Select
//                   aria-label="Default select example"
//                   name={rairport}
//                   onChange={(e) => setRairport(e.target.value)}
//                 >
//                   <option>Select</option>
//                   {airport.map((e) => (
//                     <option value={e.airportid}>{e.airportname}</option>
//                   ))}
//                 </Form.Select>
//               </Col> */}
//             </Row>
//             <br />
//             {/* <Form.Label>
//               <h5>
//                 <b>
//                   <u>OR</u>
//                 </b>
//               </h5>
//             </Form.Label> */}
//             <Row>
//               <Col>
//                 <Form.Label>
//                   <b>Enter State:</b>
//                 </Form.Label>
//               </Col>
//               <Col>
//                 <Form.Select
//                   aria-label="Default select example"
//                   onChange={(e) => getrcities(e.target.value)}
//                   name="rstate"
//                 >
//                   <option>Select</option>
//                   {state.map((e) => (
//                     <option value={e.stateid}>{e.statename}</option>
//                   ))}
//                 </Form.Select>
//               </Col>
//               <Col>
//                 <Form.Label>
//                   <b>Enter City:</b>
//                 </Form.Label>
//               </Col>
//               <Col>
//                 <Form.Select
//                   aria-label="Default select example"
//                   onChange={(e) => setSrcity(e.target.value)}
//                   name="srcity"
//                 >
//                   <option>Select</option>
//                   {rcity.map((e) => (
//                     <option value={e.cityid}>{e.cityname}</option>
//                   ))}
//                 </Form.Select>
//               </Col>
//             </Row>
//             <br />
//             <Row>
//               {/* <Form.Group className="mb-3">
//                 <Form.Check
//                   required
//                   label={
//                     <h6>
//                       <b>Agree to terms and conditions</b>
//                     </h6>
//                   }
//                   feedback="You must agree before submitting."
//                   feedbackType="invalid"
//                 />
//               </Form.Group> */}
//             </Row>{" "}
//             <hr />
//             <br />
//             <Row>
//               <Col>
//                 <Button variant="outline-success" size="md" type="submit">
//                   <b> Continue Booking</b>
//                 </Button>
//               </Col>
//               <Col>
//                 {/* <Button variant="outline-dark" size="md" type="submit">
//                   <b> Reset </b>
//                 </Button> */}
//               </Col>
//             </Row>
//             <br />
//           </Form>
//         </Col>
//         <Col>
//           <br />
//           <br />
//           <Row>
//             <Col>
//               <img
//                 src={logo}
//                 className="CustomerCare-logo m-auto"
//                 width="250"
//                 height="250"
//                 alt="logo"
//               />
//             </Col>
//             <Col>
//               <img
//                 src={logo2}
//                 className="CustomerCare-logo m-auto"
//                 width="250"
//                 height="250"
//                 alt="logo"
//               />
//             </Col>
//           </Row>
//           <br />
//           <br />
//           <Row>
//             <Col>
//               <img
//                 src={logo3}
//                 className="CustomerCare-logo m-auto"
//                 width="250"
//                 height="250"
//                 alt="logo"
//               />
//             </Col>
//             <Col>
//               <img
//                 src={logo4}
//                 className="CustomerCare-logo m-auto"
//                 width="250"
//                 height="250"
//                 alt="logo"
//               />
//             </Col>
//           </Row>
//           <br />
//           <br />
//           <Row>
//             <Col>
//               <img
//                 src={logo5}
//                 className="CustomerCare-logo m-auto"
//                 width="250"
//                 height="250"
//                 alt="logo"
//               />
//             </Col>
//             <Col>
//               <img
//                 src={logo6}
//                 className="CustomerCare-logo m-auto"
//                 width="250"
//                 height="250"
//                 alt="logo"
//               />
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//       <br />
//     </Container>
//   );
// }
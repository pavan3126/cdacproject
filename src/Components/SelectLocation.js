import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import BookingService from "../services/BookingService";
import logo from "./images/selectlocation.png";
import logo7 from "./images/flite.png";
export default function SelectLocation(props) {
  const [phub, setPhub] = useState([]);
  const [rhub, setRhub] = useState([]);
  const [phubid, setPhubid] = useState({});
  const [rhubid, setRhubid] = useState({});
  const [pairport, setPairport] = useState([]);
  const [rairport, setRairport] = useState([]);

  const [airport, setAirport] = useState([]);

 
  // const { pcity, rcity ,bid } = useParams();
  let navigate = useNavigate();

  const value = sessionStorage.getItem("box");
  const value1 = JSON.parse(value);
  var pcity = value1.pcity;
  var rcity = value1.rcity;
value1.phubid = phubid;
value1.rhubid = rhubid;




  useEffect(() => {
    fetch("http://localhost:44364/gethubbycid/" + pcity )
      .then((res) => res.json())
      .then((result) => {
        setPhub(result);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:44364/gethubbycid/"+ rcity)
      .then((res) => res.json())
      .then((result) => {
        setRhub(result);
      });
  }, []);
  useEffect(() => {
    fetch("https://localhost:44364/airportbystateid/" + pcity)
      .then((res) => res.json())
      .then((result) => {
        setPairport(result);
      });
  },[]);
  useEffect(() => {
    fetch("https://localhost:44364/airportbystateid/" + rcity)
      .then((res) => res.json())
      .then((result) => {
        setRairport(result);
      });
  },[]);

 

  const handleSubmit = (event) => {
     sessionStorage.setItem("box", JSON.stringify(value1));
     //here we store the pickup hub and return hub in the session 
     navigate("/vehicleselection");
    // navigate(
    //   "/vehicleselection/" +
    //     phubid +
    //     "/" +
    //     rhubid +
    //     "/" +
    //     bid
    // );
    // const booking = { phubid, rhubid };
    // {
    //   BookingService.updateBooking(bid, booking)
    //     .then((response) => {
    //       console.log(response.data);
    //       // navigate("/vehicleselection/" + response.data.bookingid);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
  };

  return (
    <div>
      <br />
      <Container>
        <header className="CustomerCare-header">
          <img
            src="https://i.pinimg.com/originals/d7/ae/01/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif"
            className="CustomerCare-logo m-auto"
            width="550"
            height="250"
            alt="logo"
          />
        </header>
        <br />
        <hr />
        <u>
          <h3>Location Selection</h3>
        </u>
        <br /> <hr />
        <Form onSubmit={handleSubmit}>
          <u>
            <h5>Select Pick-up location :</h5>
          </u>
          <br />
          <Row>
          <Col>
                <b>Enter Hub Name :</b>
              </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setPhubid(e.target.value)}
                name="phubid"
              
              >
                <option>Select Hub</option>
                {phub.map((e) => (
                  <option value={e.hubid}>{e.hubname}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
                <Form.Label>
                  <h5>
                    <b>
                      <u>OR</u>
                    </b>
                  </h5>
                </Form.Label>
              </Col>
            <Col>
                <b>Enter Airport Name :</b>
              </Col>
              <Col md="auto">
                <img
                  src={logo7}
                  className="ms-auto"
                  width="30"
                  height="30"
                  alt="logo"
                />
              </Col>

              <Col>
                <Form.Select
                  aria-label="Default select example"
                  name={phubid}
                  onChange={(e) => setPhubid(e.target.value)}
                  required
                >
                  <option>Select</option>
                  {pairport.map((e) => (
                    <option value={e.hubid}>{e.hubname}</option>
                  ))}
                </Form.Select>
              </Col>
             
          </Row>
          <br />
          <hr />
          <u>
            <h5>Select Return location :</h5>
          </u>
          <br />
          <Row>
            
          <Col>
              <b>Enter Hub Name :</b>
              </Col>
            <Col>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setRhubid(e.target.value)}
                name="rhubid"
                // value={rhubid}
             
              >
                <option>Select Hub</option>
                {rhub.map((e) => (
                  <option value={e.hubid}>{e.hubname}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
                <Form.Label>
                  <h5>
                    <b>
                      <u>OR</u>
                    </b>
                  </h5>
                </Form.Label>
              </Col>
            <Col>
                <Form.Label>
                <b>Enter Airport Name :</b>
                </Form.Label>
              </Col>
              <Col md="auto">
                <img
                  src={logo7}
                  className="ms-auto"
                  width="30"
                  height="30"
                  alt="logo"
                />
              </Col>

              <Col>
                <Form.Select
                  aria-label="Default select example"
                  name={rhubid}
                  onChange={(e) => setRhubid(e.target.value)}
                  required
                >
                  <option>Select</option>
                  {rairport.map((e) => (
                    <option value={e.hubid}>{e.hubname}</option>
                  ))}
                </Form.Select>
              </Col>
          </Row>
          <br /> <hr />
          <br />
          <Row>
            <Col>
              <Button variant="outline-success" size="md" type="submit">
                <b>Continue Booking</b>
              </Button>
            </Col>
            <Col>
              <Button
                variant="outline-danger"
                size="md"
                type="submit"
                href="/home"
              >
                <b>Cancel</b>
              </Button>
            </Col>
          </Row>
        </Form>
        <br />
        <br />
      </Container>
    </div>
  );
}




// BookingHeader booking = bookingHeaderDao.getById(id);
// 	        booking.setBookingdate(bookingHeader.setBookingdate);
// 			booking.setCustomerid(bookingHeader.setCustomerid);
// 			booking.setStartdate(bookingHeader.setStartdate);
// 			booking.setEnddate(bookingHeader.setEnddate);
// 			booking.setCartypeid(bookingHeader.setCartypeid);
// 			booking.setBookingdetailid(bookingHeader.setBookingdetailid);
// 			booking.setPhubid(bookingHeader.setPhubid);
// 			booking.setRhubid(bookingHeader.setRhubid);
// 			booking.setCarstatus(bookingHeader.setCarstatus);
// 			booking.setFuelstatus(bookingHeader.setFuelstatus);
// 			booking.setTcarrate(bookingHeader.setTcarrate);
// 			booking.setTaddonrate(bookingHeader.setTaddonrate);
// 			booking.setAddamt(bookingHeader.setAddamt);
// 	        booking.setFinalamt(bookingHeader.setFinalamt);
// 	        booking.setCustomerdetail(bookingHeader.setCustomerdetail);
// 	        bookingHeaderDao.save(booking);
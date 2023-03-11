import {React, useState ,useEffect} from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import BookingService from "../services/BookingService";
import CustomerService from "../services/CustomerService";
import VehicleService from "../services/VehicleService";
import HubService from "../services/HubService";
import DatePicker from "react-datepicker";
import BookingDetailService from "../services/BookingDetailService";

import "./NoPage.css";
import logo from "./images/confirm.svg";
import FlipClock from "x-react-flipclock";
import InvoiceService from "../services/InvoiceService";


export default function ConfirmBooking() {
  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState(new Date());
   const [booking, setBooking] = useState([]);
   const [customer, setCustomer] = useState([]);
 
     const [bookingdetails, setBookingDetails] = useState([]);
    // const [customerid, setCustomerid] = useState("");
     const [phub, setPhub] = useState("");
      const [rhub, setRhub] = useState("");
   const [cartype, setCartype] = useState([]);
  //  const { bid ,customerid ,phubid,rhubid,cartypeid} = useParams();
   const navigate = useNavigate();
   const value = sessionStorage.getItem("box");
   const value1 = JSON.parse(value);

   var bid = value1.bid;
   var startdate = value1.startdate;
   var enddate = value1.enddate;
   var customerid = value1.customerid;
   var carid = value1.cartypeid;
  var phubid = value1.phubid;
  var rhubid = value1.rhubid;
  var cartypeid = value1.cartypeid;
var bookingdetailid=value1.bookingdetailid;
var addondailyrate1=value1.addondailyrate1;
var bookingid=value1.bookingid;
var addonid=value1.addonid;
var addondailyrate=addondailyrate1;
var invoiceid1="";

// alert(bookingdetailid)
// alert(bookingid)



























  useEffect(() => {
    BookingService.getBookingById(bookingid)
      .then((response) => {
       // console.log(response.data);
        setBooking(response.data);


// {
//     BookingDetailService.getBookingDetailsById(response.data.bookingdetailid)
//       .then((response) => {
//         setBookingDetails(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


 useEffect(() => {
   VehicleService.getVehicleById(cartypeid)
     .then((response) => {
       //console.log(response.data);
       setCartype(response.data.cartypename);
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);

  useEffect(() => {
    HubService.getHubById(phubid)
      .then((response) => {
       // console.log(response.data);
        setPhub(response.data.hubname);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

   useEffect(() => {
     HubService.getHubById(rhubid)
       .then((response) => {
         //console.log(response.data);
         setRhub(response.data.hubname);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);


   useEffect(() => {
    CustomerService.getCustomerById(customerid)
       .then((response) => {
         //console.log(response.data);
         setCustomer(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, []);

  //  useEffect(() => {
  //    VehicleService.getVehicleById(booking.cartypeid)
  //      .then((response) => {
  //        console.log(response.data);
  //        setCartype(response.data.cartypename);
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
 




    {
      const Invoice = {
        bookingid,
        customerid,
        carid,
      };
    
    
      {
        InvoiceService.createInvoice(Invoice)
          .then((response) => {
        
            //console.log(response.data);
           invoiceid1=response.data.invoiceid;
            
           value1.invoiceid=invoiceid1;
             
             
            sessionStorage.setItem("box", JSON.stringify(value1));
          
          })
          .catch((error) => {
            console.log(error);
          });
          
          
      }
    
    }
    






    
    sessionStorage.setItem("box", JSON.stringify(value1));
    const bookingdetail = {bookingdetailid, addonid, bookingid, addondailyrate };
   
    BookingDetailService.updateBookingdetail(bookingdetailid,bookingdetail)
          .then((response) => {
            //alert("hi");
            //console.log(response.data);
          })
          .catch((error) => {
          
            console.log(error);
          });
      
    navigate("/bill");
  };

  return (
    <Container>
      <header className="About-header">
        <img
          src={logo}
          className="About-logo m-auto"
          width="370"
          height="300"
          alt="logo"
        />
      </header>
      <hr />
      <u>
        <h3>Confirm Booking</h3>
      </u>
      <br />
      <hr />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <br />
        
        <Row>
          <Col>
            <Row>
              <Form.Group as={Col} md="12" controlId="PickupAt">
                <Form.Label>
                  <b>Pickup :</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Pickup Date"
                  value={startdate}
                  disabled
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group as={Col} md="12" controlId="PickupAt">
                <Form.Label>
                  <b>Pickup At :</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Pickup At"
                  value={phub}
                  disabled
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br />
          </Col>
          <Col>
            <Row>
              <Form.Group as={Col} md="12" controlId="PickupAt">
                <Form.Label>
                  <b>Return :</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Return Date"
                  value={enddate}
                  disabled
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br />
            <Row>
              <Form.Group as={Col} md="12" controlId="ReturnAt">
                <Form.Label>
                  <b>Return At :</b>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Return At"
                  value={rhub}
                  disabled
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <br />
          </Col>
        </Row>
        <br />
        <hr />
        <Row>
          <Form.Group as={Col} md="6" controlId="VehicleType">
            <Form.Label>
              <b>Vehicle Type</b>
            </Form.Label>
            <Form.Control required type="text" placeholder={cartype} disabled />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Col>
            <Form.Label>
              <b>Booking Date:</b>
            </Form.Label>
            <DatePicker
              selected={date}
              disabled
              onChange={(date) => setDate(date)}
            />
          </Col>
          {/* <Form.Group as={Col} md="6" controlId="RentalAddon">
            <Form.Label>
              <b>Rental Addon</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Rental Addon"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>
              <b>First name</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.fname}
              placeholder="First name"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>
              <b>Last name</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.lname}
              placeholder="Last name"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br />
        <hr />
        <Row>
          <Form.Group as={Col} md="12" controlId="Address-1">
            <Form.Label>
              <b>Address-1</b>
            </Form.Label>
            <Form.Control
              required
              as="textarea"
              value={customer.address}
              placeholder="Address-1"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br />

        <Row>
          <Form.Group as={Col} md="12" controlId="Email">
            <Form.Label>
              <b>Email</b>
            </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={customer.email}
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br />
        <hr />
        <Row>
          <Form.Group as={Col} md="6" controlId="City">
            <Form.Label>
              <b>City</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.city}
              placeholder="City"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="ZIP">
            <Form.Label>
              <b>ZIP</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.zip}
              placeholder="ZIP"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Form.Group as={Col} md="6" controlId="HomePhone">
            <Form.Label>
              <b>Home Phone</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.mob1}
              placeholder="Home Phone"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="Cell">
            <Form.Label>
              <b>Cell</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.mob2}
              placeholder="Cell"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br />
        <hr />
        <Row>
          <Form.Group as={Col} md="6" controlId="Driving License">
            <Form.Label>
              <b>Driving License</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.dlno}
              placeholder="Driving License"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="6" controlId="Valid Through">
            <Form.Label>
              <b>Valid Through</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.dlvalidthrough}
              placeholder="Valid Through"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
          {/* </Row>
        <br />

        <br />
        <Row> */}
          <Form.Group as={Col} md="6" controlId="PassportNo">
            <Form.Label>
              <b>Passport No.</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.passportno}
              placeholder="Passport No"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="6" controlId="ValidThrough">
            <Form.Label>
              <b>Valid Through</b>
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={customer.passvalidthrough}
              placeholder="Valid Through"
              disabled
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        <br />
       
        
        <Row>
          <Col>
            <Button variant="outline-success" size="md" type="submit">
              <b>Continue Booking</b>
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-dark"
              size="md"
              type="submit"
              href="/customerinfo"
            >
              <b>Modify</b>
            </Button>
          </Col>
        </Row>
        <br />
        <br />
      </Form>
    </Container>
  );
}
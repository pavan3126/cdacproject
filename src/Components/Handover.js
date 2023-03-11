import "./Login.css";
import logo from "./images/handover.png";
import BookingService from "../services/BookingService";
import { Navigate } from "react-router-dom";

import { React, useState, useEffect } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";

// import CustomerService from "../services/CustomerService";
// import VehicleService from "../services/VehicleService";
// import HubService from "../services/HubService";
// import DatePicker from "react-datepicker";
// import BookingDetailService from "../services/BookingDetailService";
import InvoiceService from "../services/InvoiceService";

export default function Handover() {
  var [cartypeid, setCartypeid] = useState("");
  var [carstatus, setCarstatus] = useState("");
  
  var [fuelstatus, setFuelstatus] = useState("");
  var [bookingdetailid, setBookingdetailid] = useState("");
  var [phubid, setPhubid] = useState("");
  var [rhubid, setRhubid] = useState("");
  var [startdate, setStartdate] = useState("");
  var [bookingdate, setBookingdate] = useState("");
  var [enddate, setEndDate] = useState("");
  var [tcarrate, setTcarrate] = useState("");
  var [addamt, setAddamt] = useState("");
  var [taddonrate, setTaddonrate] = useState("");
  var [estamt, setEstamt] = useState("");
  var [finalamt, setFinalamt] = useState("");
  
  
  var [bookingid, setBookingid] = useState("");
  var [customerid, setCustomerid] = useState("");
  var [carid, setCarid]=useState("");
  var [invoiceid, setInvoiceid] = useState("");
  var [invoicedate,setInvoicedate]=useState("");
  var [handoverdate, setHandoverdate] = useState("");
  var [returndate,setReturndate]=useState("");
  var [rentalamount,setRentalamount]=useState("");
  var [totaladdonamount,setTotaladdonamount]=useState("");
  var [totalamount,setTotalamount]=useState("");
  var [customerdetail, setCustomerdetail] = useState("");
  
  
  var value = sessionStorage.getItem("box");
  
  var value1 = JSON.parse(value);
  const navigate = useNavigate();

  const setInvoice =(invoiceid) => {
      InvoiceService.getInvoiceById(invoiceid)
        .then((response)=>{
          setInvoicedate(response.data.invoicedate)
          setCarid(response.data.carid)
          setRentalamount(response.data.rentalamount)
          setTotaladdonamount(response.data.totaladdonamount)
          setTotalamount(response.data.totalamount);
        })
  
  }
  const setBooking = (bookingid) => {
    {
      BookingService.getBookingById(bookingid)
        .then((response) => {
          setAddamt(response.data.addamt);
          setBookingdetailid(response.data.bookingdetailid);
          setPhubid(response.data.phubid);
          setRhubid(response.data.rhubid);
          setBookingdate(response.data.bookingdate);
          setStartdate(response.data.startdate);
          setEndDate(response.data.enddate);
          setCartypeid(response.data.cartypeid);
          setCustomerid(response.data.customerid);
          setCustomerdetail(response.data.customerdetail);
          setTcarrate(response.data.tcarrate);
          setFinalamt(response.data.finalamt);
          setTaddonrate(response.data.taddonrate);
          setEstamt(response.data.estamt);

          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //   var phubid=value1.phubid;
  //   var rhubid=value1.rhubid;
  //   var startdate=value1.startdate;
  //   // var cartypeid = value1.cartypeid;
  //   var customerid=value1.customerid;
  //  var bookingdate =value1.bookingdate;
  //  var enddate = value1.enddate;
  //  var customerdetail=value1.customerdetail;
  //  var tcarrate=value1.tcarrate;
  //  var addamt=value1.addamt;
  //  var taddonrate=value1.taddonrate;
  // var estamt=value1.estamt;
  // var finalamt=value1.finalamt;

  function validateForm() {
    return bookingid.length > 0 && cartypeid.length > 0 && carstatus.length > 0;
  }

  function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const booking = {
      bookingdetailid,
      phubid,
      rhubid,
      bookingdate,
      startdate,
      enddate,
      cartypeid,
      customerid,
      fuelstatus,
      tcarrate,
      addamt,
      taddonrate,
      estamt,
      finalamt,
      bookingid,
      carstatus,
    };

    if (bookingid) {
      BookingService.updateBooking(bookingid, booking)
        .then((response) => {
          console.log(response.data);

          // navigate("/billing");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("this customer has not registerd");
    }
    const Invoice = {
      bookingid,
      customerid,
      carid,
      invoiceid,
      invoicedate,
      handoverdate,
      returndate,
      rentalamount,
      totaladdonamount,
      totalamount,
      customerdetail,
    };
    
    if (invoiceid) {
     InvoiceService.updateInvoice(invoiceid, Invoice)
        .then((response) => {
          console.log(response.data);
          alert("success")
          navigate("/payment");
        })
        .catch((error) => {
          console.log(error);
        });

    } 
    else{
      alert("invalid invoice id ")
    }
    navigate("/payment");
  }
const call =(e)=>{
  setCarstatus(e.target.value);
  setInvoice(invoiceid);

}
  return (
    <div className="Handover">
      <br />
      <header className="About-header">
        <img
          src={logo}
          className="About-logo m-auto"
          width="200"
          height="200"
          alt="logo"
        />
      </header>
      <Form onSubmit={handleSubmit}>
        <hr />
        <br />
        <Form.Group size="lg" controlId="bookingid">
          <Form.Label>
            <b> Booking Confirmation No :</b>
          </Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={bookingid}
            onChange={(e) => setBookingid(e.target.value)}
          />
        </Form.Group>

        <br />
        <Form.Group size="lg" controlId="cartypeid">
          <Form.Label>
            <b>Vehicle Reg No :</b>
          </Form.Label>
          <Form.Control
            type="text"
            value={cartypeid}
            onChange={(e) => setBooking(bookingid)}
          />
          <br></br>
        </Form.Group>
        <Form.Group size="lg" controlId="handoverdate">
          <Form.Label>
            <b>Enter handoverdate :</b>
          </Form.Label>
          <Form.Control
            type="date"
            value={handoverdate}
            onChange={(e) => setHandoverdate(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="bookingid">
          <Form.Label>
            <b> Enter Invoice id :</b>
          </Form.Label>
          <Form.Control
           
            type="text"
            value={invoiceid}
            onChange={(e) => setInvoiceid(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group size="lg" controlId="carstatus">
          <Form.Label>
            <b>Car Status :</b>
          </Form.Label>
          <Form.Control
            type="text"
            value={carstatus}
            onChange={(e)=>call(e)}
          />
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>
            <b>Enter Fuel Status in liter</b>
          </Form.Label>
          <Form.Control
            type="number"
            value={fuelstatus}
            onChange={(e) => setFuelstatus(e.target.value)}
          />
        </Form.Group>

        <br />
        <hr />
        <br />
        <Row>
          <Col>
            <Button
              variant="outline-success"
              block
              size="md"
              type="submit"
              // disabled={!validateForm()}
            >
              <b> Submit</b>
            </Button>
          </Col>
          <Col>
            <Button variant="outline-danger" block size="md" type="submit">
              <b> Cancel</b>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
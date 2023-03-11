import { React, useState, useEffect } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import logo from "./images/logo.png";
import { useNavigate, Link, useParams } from "react-router-dom";
import BookingService from "../services/BookingService";
import CustomerService from "../services/CustomerService";
import VehicleService from "../services/VehicleService";
import HubService from "../services/HubService";
import Downloadpage from "./Downloadpage";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

import BookingDetailService from "../services/BookingDetailService";
import "./NoPage.css";
import DatePicker from "react-datepicker";
import AddonService from "../services/AddonService";
import InvoiceService from "../services/InvoiceService";

export default function Bill() {
  const [validated, setValidated] = useState(false);
  const [invoicedate, setinvoicedate] = useState(new Date());
  const [booking, setBooking] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [bookingdetails, setBookingDetails] = useState([]);
  // const [customerid, setCustomerid] = useState("");
  const [phub, setPhub] = useState("");
  const [rhub, setRhub] = useState("");
  // const [total, setTotal] = useState("");
  const [cartype, setCartype] = useState([]);
  const [addon, setAddons] = useState([]);
  const [addonName, setAddonsName] = useState([]);
  // const { bid, customerid, phubid, rhubid, cartypeid } = useParams();
  const [dailyrate, setdailyrate] = useState("");
  const [monthlyrate, setMonthlyrate] = useState("");
  const [weeklyrate, setWeeklyrate] = useState("");
  const navigate = useNavigate();

  const value = sessionStorage.getItem("box");
  const value1 = JSON.parse(value);
  var bid = value1.bookingid;
  var customerid = value1.customerid;
  var phubid = value1.phubid;
  var rhubid = value1.rhubid;
  var startdate = value1.startdate;
  var enddate = value1.enddate;
  var cartypeid = value1.cartypeid;
  var addonid = value1.addonid;
  var invoiceid = value1.invoiceid;
  var bookingid=bid;
  var carid=cartypeid;
  var handoverdate;
  var returndate;
  var customerdetail;
  useEffect(() => {
    BookingService.getBookingById(bid)
      .then((response) => {
        console.log(response.data);
        setBooking(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    CustomerService.getCustomerById(customerid)
      .then((response) => {
        console.log(response.data);
        setCustomer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    AddonService.getAddonById(addonid)
      .then((response) => {
        console.log(response.data);
        setAddons(response.data[0]);
        setAddonsName(response.data[0].addonName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    VehicleService.getVehicleById(cartypeid)
      .then((response) => {
        console.log(response.data[0]);
        setCartype(response.data[0]);
        setdailyrate(response.data[0].dailyrate);
        setMonthlyrate(response.data[0].monthlyrate);
        setWeeklyrate(response.data[0].weeklyrate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    HubService.getHubById(phubid)
      .then((response) => {
        console.log(response.data[0]);
        setPhub(response.data[0].hubname);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    HubService.getHubById(rhubid)
      .then((response) => {
        console.log(response.data[0]);
        setRhub(response.data[0].hubname);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    InvoiceService.getInvoiceById(invoiceid)
      .then((response) => {
        console.log(response.data[0]);
        bookingid=response.data[0].bookingid;
        carid=response.data[0].carid;
        invoicedate=response.data[0].invoicedate;
        handoverdate=response.data[0].handoverdate;
        returndate=response.data[0].returndate;
        customerdetail=response.data[0].customerdetail;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const invoice = {
  //   invoicedate,
  //   bookingid,
  //   customerid,
  //   handoverdate,
  //   cartypeid,
  //   mob2,
  //   crtype,
  //   crno,
  //   aadhar,
  //   dob,
  //   nation,
  //   state,
  //   city,
  //   zip,
  //   dlno,
  //   dlvalidthrough,
  //   passportno,
  //   passvalidthrough,
  //   password
  // };

  var total = 0;
  var date1, date2;
  //define two date object variables with dates inside it
  date1 = new Date(startdate);
  date2 = new Date(enddate);

  //calculate time difference
  var time_difference = date2.getTime() - date1.getTime();

  //calculate days difference by dividing total milliseconds in a day
  var daydiff = time_difference / (1000 * 60 * 60 * 24);
  var daydiff2 = daydiff;
  // alert(daydiff)
  while (daydiff !== 0) {
    if (daydiff >= 30) {
      var months = Math.floor(daydiff / 30);
      total += months * monthlyrate;
      daydiff = daydiff % 30;
    }
    if (daydiff >= 7) {
      var week = Math.floor(daydiff / 7);
      total += week * weeklyrate;
      daydiff = daydiff % 7;
    }
    if (daydiff < 7) {
      total += daydiff * dailyrate;
      daydiff -= daydiff;
    }
  }

  var rentalamount = total;
  var totaladdonamount = addon.addondailyrate * daydiff2;
  var totalamount =
    total + 50 + totaladdonamount + (total + 50 + totaladdonamount) * 0.12 * 2;

  useEffect(() => {
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
    console.log(Invoice)
    if (invoiceid) {
      InvoiceService.updateInvoice(invoiceid, Invoice)
        .then((response) => {
          console.log(response.data[0]);

          // navigate("/billing");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
     
    }
  });

  // {
  //   alert(booking.startdate)
  //    alert(booking.enddate);
  //   // JavaScript program to illustrate
  //   // calculation of no. of days between two date

  //   // To set two dates to two variables
  //   var date1 = booking.startdate
  //   var date2 = booking.enddate

  //   // To calculate the time difference of two dates
  //   var Difference_In_Time = date2.getTime() - date1.getTime();

  //   // To calculate the no. of days between two dates
  //   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //   //To display the final no. of days (result)
  //   alert(
  //     "Total number of days between dates <br>" +
  //       date1 +
  //       "<br> and <br>" +
  //       date2 +
  //       " is: <br> " +
  //       Difference_In_Days
  //   );
  // }

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  //   navigate("/billing");
  // };
  return (
    <div className="Bill" id="bill">
      <Container>
        <b>
          <br />
          <header className="Bill-header">
            <img
              src={logo}
              className="About-logo"
              width="150"
              height="80"
              alt="logo"
            />
          </header>
          <br />
          <hr />
          <Row className="justify-content-md-center">
            <h2>Invoice</h2>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <Row>
                Name : {customer.fname} {customer.lname}
              </Row>
              <Row>Address : {customer.address}</Row>
            </Col>
            <Col></Col>
            <Col>
              <Row>
                <Col>Invoice No :</Col> <Col>{invoiceid}</Col>
              </Row>
              <Row>
                <Col>Invoice Date :</Col>{" "}
                <Col>
                  <DatePicker
                    selected={invoicedate}
                    disabled
                    onChange={(date) => setinvoicedate(date)}
                  />
                </Col>
              </Row>
              <Row></Row>
            </Col>
          </Row>
          <Row>From : {phub}</Row>
          <Row>To : {rhub}</Row>
          <br />
          <br />
          <hr />
          <br />
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>#</th>
                <th>Items</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Line Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Car Name</td>
                <td>{cartype.cartypename}</td>
                <td>1</td>
                <td>Rs. {cartype.dailyrate}</td>
                <td>Rs. {total}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Add-Ons</td>
                <td>{addon.addonname}</td>
                <td>1</td>
                <td>Rs. {addon.addondailyrate}</td>
                <td>Rs. {totaladdonamount}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Extra Charges</td>
                <td>Services</td>
                <td>1</td>
                <td>Rs. {50}</td>
                <td>Rs. {50}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Total :</td>
                <td colSpan={3}></td>
                <td>Rs. {total + 50 + totaladdonamount}</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col></Col>
            <Col></Col>
            <Col>
              <Row>Gross Total : Rs. {total + 50}</Row>
              <Row>
                IGST @12% : Rs. {(total + totaladdonamount + 50) * 0.12}
              </Row>
              <Row>
                CGST @12% : Rs. {(total + totaladdonamount + 50) * 0.12}
              </Row>
              <Row>
                Nett Total : Rs. {totalamount}
                {}
              </Row>
            </Col>
          </Row>
          <br />
          <br />
          <hr />
          <br />
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Button variant="outline-success" href="/thankyou">
                <b>Continue</b>
              </Button>
            </Col>
            <Col md="auto">
              <Button variant="outline-danger" href="/payment">
                <b>Pay Now</b>
              </Button>
            </Col>
          </Row>
          
        </b>
      </Container>
      <br></br>
      <div>
        
          <Downloadpage rootElementId="bill" downloadFileName="Invoice" />
       
      </div>
    </div>
  );
}
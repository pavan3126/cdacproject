import { React, useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./images/customerinfo.svg";
import CustomerService from "../services/CustomerService";
import BookingService from "../services/BookingService";
import VehicleService from "../services/VehicleService";
import HubService from "../services/HubService";
import AddonService from "../services/AddonService";
import BookingDetailService from "../services/BookingDetailService";
import YourBooking from "../Components/YourBooking";

export default function CustomerDetails(props) {
  const [validated, setValidated] = useState(false);
  const [dob, setDob] = useState(new Date());
  const [customerid, setCustomerid] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mob1, setMob1] = useState("");
  const [mob2, setMob2] = useState("");
  const [crtype, setCrtype] = useState("");
  const [crno, setCrno] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [nation, setNation] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [dlno, setDlno] = useState("");
const [dlvalidthrough, setDlvalidthrough] = useState(new Date());
  const [passportno, setPassportno] = useState("");
  const [passvalidthrough, setPassvalidthrough] = useState(new Date());
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [startdate, setStartdate] = useState("");
  // const [enddate, setEnddate] = useState("");
  const [cartypename, setCartypename] = useState("");
  const [dailyrate, setDailyrate] = useState("");
  const [weeklyrate, setWeeklyrate] = useState("");
  const [monthlyrate, setMonthlyrate] = useState("");
  const [phub, setPhub] = useState("");
  const [rhub, setRhub] = useState("");
  const [bookingdetails, setBookingDetails] = useState([]);
  const [addons, setAddons] = useState([]);
  const [booking, setBooking] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [customerdetail, setCustomerdetail] = useState("");
  const [fuelstatus, setFuelstatus] = useState("");
  const [tcarrate, setTcarrate] = useState("");
  const [taddonrate, setTaddonrate] = useState("");
  const [addamt, setAddamt] = useState("");
  const [bookingdate, setBookingdate] = useState(new Date());
  const [estamt, setEstamt] = useState("");
  const [finalamt, setFinalamt] = useState("");
  // const [customerid, setCustomerid] = useState("");
  // const [bookingdetailid, setBookingdetailid] = useState("");
    // const [bid, setBid] = useState("");
  // const { phubid, rhubid, bid, cartypeid } = useParams();

 const value = sessionStorage.getItem("box");
 const value1 = JSON.parse(value);
 var startdate = value1.startdate;
 var enddate = value1.enddate;
 var pcity = value1.pcity;
 var rcity = value1.rcity;
 var phubid = value1.phubid;
 var rhubid = value1.rhubid;
 var addonid = value1.addonid;
 var cartypeid = value1.cartypeid;
 value1.customerid = customerid;
 var bookingdetailid=value1.bookingdetailid;
let bookingid="";
let originalpass="";
let originalid="";
// value1.bookingid=bookingid;

// alert(bookingdetailid);

  // value1.bid=bid;
  // useEffect(() => {
  //   BookingDetailService.getBookingDetailsById(bid)
  //     .then((response) => {
  //       console.log(response.data);
  //       setBookingDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    AddonService.getAddonById(addonid)
      .then((response) => {
       // console.log(response.data);
        setAddamt(1);
        setTaddonrate(response.data.addondailyrate);
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
      //  console.log(response.data);
        setRhub(response.data.hubname);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    VehicleService.getVehicleById(cartypeid)
      .then((response) => {
        console.log(response.data);
        setCartypename(response.data[0].cartypename);
        setTcarrate(response.data[0].dailyrate);
        setDailyrate(response.data[0].dailyrate);
        
        setWeeklyrate(response.data[0].weeklyrate);
        setMonthlyrate(response.data[0].monthlyrate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   BookingDetailService.getBookingDetailById(bookingdetailid)
  //     .then((response) => {
  //       setBookingDetails(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const saveOrUpdateCustomer = (e) => {
   
    e.preventDefault();
    const customer = {
      customerid,
      fname,
      lname,
      address,
      email,
      mob1,
      mob2,
      crtype,
      crno,
      aadhar,
      dob,
      nation,
      state,
      city,
      zip,
      dlno,
      dlvalidthrough,
      passportno,
      passvalidthrough,
      password
    };
   
    {
      if (customerid) {
        CustomerService.updateCustomer(customerid, customer)
          .then((response) => {
           
           setCustomerid(response.data[0].customerid);
            navigate("/Bill");//billing was there at the place of Thankyou
          })
          .catch((error) => {
            console.log(error);
          });
       } 
       else 
      {
        alert("please fill membership form first");
        // CustomerService.createCustomer(customer)
        //   .then((response) => {
        //     var cid = response.data.customerid;
        //     alert(response.data.customerid);
        //     setCustomerid(cid);
         
            navigate("/membership");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      }

if(customerid)
{

  const booking = {
    bookingdetailid,
    phubid,
    rhubid,
    bookingdate,
    startdate,
    enddate,
    cartypeid,
    customerid,
    customerdetail,
    fuelstatus,
    tcarrate,
    addamt,
    taddonrate,
    estamt,
    finalamt,
  
  };
  sessionStorage.setItem("box", JSON.stringify(booking)); 
{
  BookingService.createBooking(booking)
    .then((response) => {
  
      console.log(response.data);
     
     bookingid=response.data.bookingid;
     value1.bookingid=bookingid;
      alert("booking sucessfull your booking id: "+value1.bookingid)
       
      sessionStorage.setItem("box", JSON.stringify(value1));
      navigate("/confirmbooking");
    })
    .catch((error) => {
      console.log(error);
    });
    
    
}

   
// const bookingdetail = { addonid, bookingid, addondailyrate };
// alert("bookingid"+{bookingid})
// alert("addon bookingrate"+addondailyrate);
// alert("addonid"+addonid);
//   {
//     BookingDetailService.updateBookingdetail(bookingdetailid,bookingdetail)
//       .then((response) => {
//         console.log(response.data);
//         navigate("/confirmbooking");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
}

    }
  };
  const title = () => {
    if (customerid) {
      return <h2 className="text-center">Update Customer</h2>;
    } else {
      return <h2 className="text-center">Add Customer</h2>;
    }
  };

  function validateForm() {
    return customerid.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() == false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    {
      CustomerService.getCustomerById(customerid)
        .then((response) => {
          console.log("data from customer info")
          console.log(response.data);
          originalpass=response.data[0].password;
          originalid=response.data[0].customerid;
          if(true){
          setFname(response.data[0].fname);
          setLname(response.data[0].lname);
          setAddress(response.data[0].address);
          setEmail(response.data[0].email);
          setMob1(response.data[0].mob1);
          setMob2(response.data[0].mob2);
          setCrtype(response.data[0].crtype);
          setCrno(response.data[0].crno);
          setAadhar(response.data[0].aadhar);
          setTcarrate(response.data[0].dailyrate);
          setAddamt(1);
          setDob(response.data[0].dob);
          setNation(response.data[0].nation);
          setState(response.data[0].state);
          setCity(response.data[0].city);
          setZip(response.data[0].zip);
          setDlno(response.data[0].dlno);
          setDlvalidthrough(response.data[0].dlvalidthrough);
          setPassportno(response.data[0].passportno);
          setPassvalidthrough(response.data[0].passvalidthrough);
          }
          else
          {
              alert("invalid credential");
              navigate("/customerinfo");
          }
        })
        .catch((error) => {
          alert("invalid credential");
              navigate("/customerinfo");
          console.log(error);
        });
    }


  };

  // const Submit = (event) => {
  //   const booking = {
  //     bookingdetailid,
  //     phubid,
  //     rhubid,
  //     bookingdate,
  //     startdate,
  //     enddate,
  //     cartypeid,
  //     customerid,
  //     customerdetail,
  //     fuelstatus,
  //     tcarrate,
  //     addamt,
  //     taddonrate,
  //     estamt,
  //     finalamt,
  //   };
  //   {
  //     BookingService.updateBooking(bid, booking)
  //       .then((response) => {
  //         console.log(response.data);
  //         navigate("/confirmbooking/" + bid);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   {
  //     // navigate("/addon/" + bid);
  //   }
  // };

  return (
    <div>
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
          <h3>Customer Information</h3>
        </u>
        <br /> <hr />
        <Row>
          <Col sm={4}>
            <br /> <br />
            <Row>
              <div className="Mlogin">
                <Container>
                  {/* <Form onSubmit={handleSubmit}> */}
                  <Form.Group size="lg" controlId="customerid">
                    <Form.Label>
                      <b>Membership No.</b>
                    </Form.Label>
                    <Form.Control
                      autoFocus
                      type="input"
                      name="customerid"
                      value={customerid}
                      onChange={(e) => setCustomerid(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group size="lg" controlId="password">
                    <Form.Label>
                      <b>Password</b>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <br />
                  <Button
                    block
                    size="lg"
                    type="submit"
                    onClick={handleSubmit}
                    // disabled={!validateForm()}
                  >
                    Go
                  </Button>
                  {/* </Form> */}
                </Container>
              </div>
            </Row>
            <br />
            <hr />
            <Row>
              <Row>
                <u>
                  <b>
                    <h4>Your Booking</h4>
                  </b>
                </u>
                <Col>
            <Form.Label>
              <b>Booking Date:</b>
            </Form.Label>
            <DatePicker
              selected={bookingdate}
              disabled
              onChange={(date) => setBookingdate(date)}
            />
          </Col>
              </Row>
            </Row>
            <br />
            <hr /> <br />
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>Pick-Up :</b>
                </label>
                <input
                  type="text"
                  placeholder="Date"
                  className="form-control"
                  disabled
                  value={startdate}
                ></input>
              </div>
            </Col>{" "}
            <br />
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>Pick-Up At :</b>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="form-control"
                  disabled
                  value={phub}
                ></input>
              </div>
            </Col>{" "}
            <br />
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>Return :</b>
                </label>
                <input
                  type="text"
                  placeholder="Date"
                  className="form-control"
                  disabled
                  value={enddate}
                ></input>
              </div>
            </Col>{" "}
            <br />
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>Return At :</b>
                </label>
                <input
                  type="text"
                  placeholder="Location"
                  className="form-control"
                  disabled
                  value={rhub}
                ></input>
              </div>
            </Col>
            <br />
            <hr /> <br />
            <Row>
              <Col>
                <h4>
                  <u>Vehicle Selection</u>
                </h4>
              </Col>
              <Col>
                <h4>
                  <a href="/vehicleselection">Modify</a>
                </h4>
              </Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <h5>
                  {" "}
                  <b>Car Id :</b>
                </h5>
              </Col>
              <Col>
                <h5>{cartypeid}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>
                  {" "}
                  <b>Car Name</b>
                </h5>
              </Col>
              <Col>
                <h5>{cartypename}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>
                  {" "}
                  <b>Daily Rate</b>
                </h5>
              </Col>
              <Col>
                <h5>{dailyrate}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>
                  {" "}
                  <b>Weekly Rate</b>
                </h5>
              </Col>
              <Col>
                <h5>{weeklyrate}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>
                  {" "}
                  <b>Monthly Rate</b>
                </h5>
              </Col>
              <Col>
                <h5>{monthlyrate}</h5>
              </Col>
            </Row>
            <br />
            <hr />
            {/*<Row>
              <Row>
                <Col>
                  <Col>
                    <h4>
                      <u>Rental Add-Ons</u>
                    </h4>
                  </Col>
                </Col>
                <Col>
                  <Col>
                    <h4>
                      <a href="/addon">Modify</a>
                    </h4>
                  </Col>
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col>
                  <h5>
                    <b>Addon Id :</b>
                  </h5>
                </Col>
                <Col>
                  <h5>{cartypeid}</h5>
                </Col>
              </Row>
               <Row>
                <Col>
                  <h5>
                    {" "}
                    <b>Addon Name</b>
                  </h5>
                </Col>
                <Col>
                  <h5>{cartypename}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>
                    {" "}
                    <b>Addon Daily Rate</b>
                  </h5>
                </Col>
                <Col>
                  <h5>{dailyrate}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>
                    {" "}
                    <b>Weekly Rate</b>
                  </h5>
                </Col>
                <Col>
                  <h5>{weeklyrate}</h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>
                    {" "}
                    <b>Monthly Rate</b>
                  </h5>
                </Col>
                <Col>
                  <h5>{monthlyrate}</h5>
                </Col>
              </Row>
            </Row>*/}
          </Col>
          <Col>
            <form>
              {title()}
              <hr />
              <Row className="mb-3">
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      {" "}
                      <b>First Name</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      name="fname"
                      className="form-control"
                      value={fname}
                      required
                      onChange={(e) => setFname(e.target.value)}
                    ></input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Last Name</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      name="lname"
                      className="form-control"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    ></input>
                  </div>
                </Col>
              </Row>

              <hr />
              <br />
              <Row>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      {" "}
                      <b>Mobile No.</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Mobile No."
                      name="mob1"
                      className="form-control"
                      value={mob1}
                      onChange={(e) => setMob1(e.target.value)}
                    ></input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Alternate Mobile No.</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Alternate Mobile No."
                      name="mob2"
                      className="form-control"
                      value={mob2}
                      onChange={(e) => setMob2(e.target.value)}
                    ></input>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      {" "}
                      <b>Credit Card Type</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Credit Card Type"
                      name="crtype"
                      className="form-control"
                      value={crtype}
                      onChange={(e) => setCrtype(e.target.value)}
                    ></input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Credit Card No.</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Credit Card No."
                      name="crno"
                      className="form-control"
                      value={crno}
                      onChange={(e) => setCrno(e.target.value)}
                    ></input>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      {" "}
                      <b>Aadhar No.</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Aadhar No."
                      name="aadhar"
                      className="form-control"
                      value={aadhar}
                      onChange={(e) => setAadhar(e.target.value)}
                    ></input>
                  </div>
                </Col>
                {/* <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      {" "}
                      <b> Date of Birth </b>
                    </label>
                    <input
                      type="date"
                      placeholder="Enter Date of Birth"
                      name="dob"
                      className="form-control"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    ></input>
                  </div>
                </Col> */}
                {/* <Col>
                  <Row>
                    <Form.Label>
                      <b>Date Of Birth</b>
                    </Form.Label>
                    <DatePicker
                      selected={dob}
                      onChange={(date) => setDob(date)}
                    />
                  </Row>
                  <br />
                </Col> */}
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Nationality</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Nationality"
                      name="nation"
                      className="form-control"
                      value={nation}
                      onChange={(e) => setNation(e.target.value)}
                    ></input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>State</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter State"
                      name="state"
                      className="form-control"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    ></input>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>City</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      name="city"
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    ></input>
                  </div>
                </Col>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Zip</b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Zip"
                      name="zip"
                      className="form-control"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    ></input>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <div className="form-group mb-2">
                  <label className="form-label">
                    {" "}
                    <b>Address :</b>
                  </label>
                  <input
                    type="textarea"
                    placeholder="Enter Address :"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
                </div>
              </Row>
              <br />
              <Row>
                <div className="form-group mb-2">
                  <label className="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </Row>
              <br />
              <hr />
              <br />
              <Row>
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Driving Lisence No. </b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Driving Lisence No."
                      name="dlno"
                      className="form-control"
                      value={dlno}
                      onChange={(e) => setDlno(e.target.value)}
                    ></input>
                  </div>
                </Col>
                {/* <Col>
                  <div className="form-group mb-2">
                    <Row>
                      <Form.Label>
                        <b>Driving Lisence Valid Through</b>
                      </Form.Label>
                      <DatePicker
                        selected={dlvalidthrough}
                        onChange={(Date) => setDlvalidthrough(Date)}
                      />
                    </Row>
                  </div>
                </Col> */}
              
                <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Passport No. </b>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Passport No."
                      name="passportno"
                      className="form-control"
                      value={passportno}
                      onChange={(e) => setPassportno(e.target.value)}
                    ></input>
                  </div>
                </Col>
                {/* <Col>
                  <div className="form-group mb-2">
                    <label className="form-label">
                      <b>Passport No. </b>
                    </label>
                    <input
                      type="date"
                      placeholder="Enter Passport Valid Through"
                      name="passportno"
                      className="form-control"
                      value={passvalidthrough}
                      onChange={(e) => setPassvalidthrough(e.target.value)}
                    ></input>
                  </div>
                </Col> */}
              </Row>
              <br />
              <hr />
              <br />
              <Row>
                <Col>
                  <Button
                    variant="success"
                    size="md"
                    type="submit"
                    onClick={(e) => saveOrUpdateCustomer(e)}
                    // href="/confirmbooking/"
                  >
                    <b> Continue Booking</b>
                  </Button>
                  {/* <button
                    className="btn btn-success"
                    onClick={(e) => saveOrUpdateCustomer(e)}
                  >
                    Submit{" "}
                  </button> */}
                </Col>
                <Col>
                  <Link to="/" className="btn btn-danger">
                    {" "}
                    Cancel{" "}
                  </Link>
                </Col>
              </Row>
            </form>
            <br />
          </Col>
        </Row>
        {/* <Form onSubmit={Submit}> */}
        <hr />
        <br />
        {/* <Row>
          <Col>
            <Button
              variant="outline-success"
              size="md"
              type="submit"
              onClick={(e) => Submit(e)}
              // href="/confirmbooking/"
            >
              <b> Continue Booking</b>
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              size="md"
              type="submit"
              href="/home"
            >
              <b> Cancel </b>
            </Button>
          </Col>
        </Row> */}
        {/* </Form> */}
        <br />
      </Container>
    </div>
  );
}
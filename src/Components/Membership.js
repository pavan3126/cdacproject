import { React, useState, useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { Container, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./images/membership.png";
import MemberService from "../services/MemberService";

export default function Membership() {
  const [dob, setDob] = useState(new Date());
   const [fname, setFname] = useState("");   
   const [lname, setLname] = useState("");
   const [address , setAddress ] = useState("");
   const [email , setEmail ] = useState("");
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
   const [password, setPassword] = useState("");
   const [dlvalidthrough, setDlvalidthrough] = useState("");
   const [passportno, setPassportno] = useState("");
   const [passvalidthrough, setPassvalidthrough] = useState("");
   const navigate = useNavigate();

   const save = (e) => {
     e.preventDefault();

     const customer = {
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
     if(password.length>0 && fname.length>0 &&lname.length>0 &&mob1.length>0 &&aadhar.length>0 &&email.length>0 )
     {
{
       MemberService.createMember(customer)
         .then((response) => {
           console.log(response.data);
          //  alert(passportno)
alert("Your Membership Number is" +" "+ response.data.customerid);
           navigate("/");
         })
         .catch((error) => {
           console.log(error);
         });
     }
    }
    else{
      alert("please fill all required fields")
    }
   };

  return (
    <div>
      <br />
      <Container>
        <header className="About-header">
          <img
            src={logo}
            className="About-logo m-auto"
            width="170"
            height="170"
            alt="logo"
          />
        </header>
        <hr />
        <u>
          <h3>Membership Registration</h3>
        </u>
        <br /> <hr />
        <form>
          <br />
          <Row className="mb-3">
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>*First Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  autoFocus
                  name="fname"
                  className="form-control"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                ></input>
              </div>
            </Col>
           
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>*Last Name</b>
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
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>*Create Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="fname"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <hr />
          <Row>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>*Mobile No.</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Mob1"
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
                  placeholder="Enter Mob2"
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
                  placeholder="Enter Credit Card No"
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
                  <b>*Aadhar No.</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Aadhar"
                  name="aadhar"
                  className="form-control"
                  value={aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                ></input>
              </div>
            </Col>
            <Col>
              <Row>
                <Form.Label>
                  <b>Date Of Birth</b>
                </Form.Label>
                <DatePicker selected={dob} onChange={(date) => setDob(date)} />
              </Row>
              <br />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>*Nationality</b>
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
                  placeholder="Enter State name"
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
                placeholder="Enter Address"
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
                <b>*Email</b>
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
          <Row>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>*Driving Lisence No. </b>
                </label>
                <input
                  type="text"
                  placeholder="Enter Driving Licence no."
                  name="dlno"
                  className="form-control"
                  value={dlno}
                  onChange={(e) => setDlno(e.target.value)}
                ></input>
              </div>
            </Col>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>Driving Licence Valid Through</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter driving licence valid through"
                  name="dlvalidthrough"
                  className="form-control"
                  value={dlvalidthrough}
                  onChange={(e) => setDlvalidthrough(e.target.value)}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
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
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>Passport Valid Through</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter passport valid through"
                  name="passvalidthrough"
                  className="form-control"
                  value={passvalidthrough}
                  onChange={(e) => setPassvalidthrough(e.target.value)}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <hr />
          <br />
          <Row>
            <Col>
              <button className="btn btn-success" onClick={(e) => save(e)}>
                Submit{" "}
              </button>
            </Col>
            <Col>
              <Link to="/" className="btn btn-danger">
                {" "}
                Cancel{" "}
              </Link>
            </Col>
          </Row>
          <br />
        </form>
        <br />
      </Container>
    </div>
  );
}

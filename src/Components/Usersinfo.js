import { React, useState, useEffect } from "react";
import { useNavigate, Link ,useParams} from "react-router-dom";
import { Container, Form, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import CustomerService from "../services/CustomerService";

export default function Usersinfo(props) {
  const [dob, setDob] = useState("");
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
  const [dlvalidthrough, setDlvalidthrough] = useState("");
  const [passportno, setPassportno] = useState("");
  const [passvalidthrough, setPassvalidthrough] = useState("");
  const { id } = useParams();

  useEffect(() => {
    CustomerService.getCustomerById(id)
      .then((response) => {
        setFname(response.data.fname);
        setLname(response.data.lname);
        setAddress(response.data.address);
        setEmail(response.data.email);
        setMob1(response.data.mob1);
        setMob2(response.data.mob2);
        setCrtype(response.data.crtype);
        setCrno(response.data.crno);
        setAadhar(response.data.aadhar);
        setDob(response.data.dob);
        setNation(response.data.nation);
        setState(response.data.state);
        setCity(response.data.city);
        setZip(response.data.zip);
        setDlno(response.data.dlno);
        setDlvalidthrough(response.data.dlvalidthrough);
        setPassportno(response.data.passportno);
        setPassvalidthrough(response.data.passvalidthrough);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <br />
      <Container>
        <br />
        <hr />
        <u>
          <h3>Customer Details</h3>
        </u>
        <br /> <hr />
        <form>
          <br />
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
                  className="form-control"
                  disabled
                  value={fname}
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
                  disabled
                  value={lname}
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
                  <b>Mobile No.</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="mob1"
                  className="form-control"
                  disabled
                  value={mob1}
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
                  placeholder="Enter last name"
                  name="mob2"
                  className="form-control"
                  disabled
                  value={mob2}
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
                  placeholder="Enter first name"
                  name="crtype"
                  className="form-control"
                  disabled
                  value={crtype}
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
                  placeholder="Enter last name"
                  name="crno"
                  className="form-control"
                  disabled
                  value={crno}
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
                  placeholder="Enter first name"
                  name="aadhar"
                  className="form-control"
                  disabled
                  value={aadhar}
                ></input>
              </div>
            </Col>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  {" "}
                  <b>Date Of Birth</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="dob"
                  className="form-control"
                  disabled
                  value={dob}
                ></input>
              </div>
            </Col>
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
                  placeholder="Enter last name"
                  name="nation"
                  className="form-control"
                  disabled
                  value={nation}
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
                  placeholder="Enter last name"
                  name="state"
                  className="form-control"
                  disabled
                  value={state}
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
                  placeholder="Enter last name"
                  name="city"
                  className="form-control"
                  disabled
                  value={city}
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
                  placeholder="Enter last name"
                  name="zip"
                  className="form-control"
                  disabled
                  value={zip}
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
                placeholder="Enter first name"
                name="address"
                className="form-control"
                disabled
                value={address}
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
                placeholder="Enter last name"
                name="email"
                className="form-control"
                disabled
                value={email}
              ></input>
            </div>
          </Row>
          <br />
          <hr />
          <Row>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>Driving Lisence No. </b>
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="dlno"
                  className="form-control"
                  disabled
                  value={dlno}
                ></input>
              </div>
            </Col>
            <Col>
              <div className="form-group mb-2">
                <label className="form-label">
                  <b>Driving Lisence Valid Through</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="dlvalidthrough"
                  className="form-control"
                  disabled
                  value={dlvalidthrough}
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
                  placeholder="Enter Passportno"
                  name="passportno"
                  className="form-control"
                  disabled
                  value={passportno}
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
                  placeholder="Enter last name"
                  name="passvalidthrough"
                  className="form-control"
                  disabled
                  value={passvalidthrough}
                ></input>
              </div>
            </Col>
          </Row>
          <br />
          <hr />
          <br />
          <Row>
            <Col>
              <Link to="/allcustomer" className="btn btn-danger">
                {" "}
                Back{" "}
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

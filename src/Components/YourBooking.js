import {React,useEffect,useState} from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BookingService from "../services/BookingService";
import VehicleService from "../services/VehicleService";
import BookingDetailService from "../services/BookingDetailService";
import "./common.css";

function YourBooking() {
  const { bid } = useParams();
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [phubid, setPhubid] = useState("");
  const [rhubid, setRhubid] = useState("");
  const [cartypeid, setCartypeid] = useState("");
  const [cartypename, setCartypename] = useState("");
  const [dailyrate, setDailyrate] = useState("");
  const [weeklyrate, setWeeklyrate] = useState("");
  const [monthlyrate, setMonthlyrate] = useState("");
  const [bookingdetailid, setBookingDetailid] = useState("");
  const [bookingdetails, setBookingDetails] = useState([]);

useEffect(() => {
  BookingService.getBookingById(bid)
    .then((response) => {
      setStartdate(response.data.startdate);
      setEnddate(response.data.enddate);
      setPhubid(response.data.phubid);
      setRhubid(response.data.rhubid);
      setCartypeid(response.data.cartypeid);
      setBookingDetailid(response.data.bookingdetailid);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

useEffect(() => {
  VehicleService.getVehicleById(cartypeid)
    .then((response) => {
      setCartypeid(response.data.cartypeid);
      setCartypename(response.data.cartypename);
      setDailyrate(response.data.dailyrate);
      setWeeklyrate(response.data.weeklyrate);
      setMonthlyrate(response.data.monthlyrate);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

useEffect(() => {
  BookingDetailService.getBookingDetailById(bookingdetailid)
    .then((response) => {
      setBookingDetails(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  return (
    <div className="CustomerCare">
      <Container>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Pick-Up :</b>
            </Form.Label>
            <Form.Control placeholder="Date" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Pick-Up At :</b>
            </Form.Label>
            <Form.Control placeholder="Location" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Return :</b>
            </Form.Label>
            <Form.Control placeholder="Date" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Return At :</b>
            </Form.Label>
            <Form.Control placeholder="Location" disabled />
          </Form.Group>
        </Row>
        <Row>
          <Row>
            <Col>
              <h5>
                {" "}
                <u>Vehicle Selection</u>
              </h5>
            </Col>
            <Col>
              <h5>
                <a href="/vehicleselection">Modify</a>
              </h5>
            </Col>
          </Row>
          <Row>
            <Row>
              <col>
                <b>Car Id</b>
              </col>
              <col>
                <b>{cartypeid}</b>
              </col>
            </Row>
            <Row>
              <col>
                <b>Car Name</b>
              </col>
              <col>
                <b>{cartypename}</b>
              </col>
            </Row>
            <Row>
              <col>
                <b>Daily Rate</b>
              </col>
              <col>
                <b>{dailyrate}</b>
              </col>
            </Row>
            <Row>
              <col>Weekly Rate</col>
              <col>
                <b>{weeklyrate}</b>
              </col>
            </Row>
            <Row>
              <col>Monthly Rate</col>
              <col>
                <b>{monthlyrate}</b>
              </col>
            </Row>
          </Row>
        </Row>
        <Row>
          <Row>
            <Col>
              <Col>
                <h5>
                  <u>Rental Add-Ons</u>
                </h5>
              </Col>
            </Col>
            <Col>
              <Col>
                <h5>
                  <a href="/addon">Modify</a>
                </h5>
              </Col>
            </Col>
          </Row>
          <Row>
            {bookingdetails.map((addon) => (
              <tr key={addon.addonid}>
                <tr>
                  <b>Addon Id :</b>
                  <b> {addon.addonid} </b>
                </tr>
                <tr>
                  <b>Addon Name :</b>
                  <b> {addon.addonname}</b>{" "}
                </tr>
                <tr>
                  <b>Addon Rate :</b>
                  <b>{addon.addondailyrate}</b>
                </tr>
              </tr>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default YourBooking;

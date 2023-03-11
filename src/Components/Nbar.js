import React from "react";
import logo from "./images/logo.png";
import { Container,Nav,Navbar,Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

export default function Nbar(props) {
    return (
      <div>
        <Marquee>
          <h5>
            <b>BOOK ONLINE OR CALL +2-432434-DRIVE</b>
          </h5>
        </Marquee>
        <Navbar bg="secondary" variant="dark">
          <Container>
            <Navbar.Brand href="/home">
              <img
                alt=""
                src={logo}
                width="150"
                height="80"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <div className="mb-2">
              <Button variant="primary" size="lg" href="/login">
                <b>Host Login</b>
              </Button>
            </div>
          </Container>
        </Navbar>
        <br />
       
        <br />

        <Nav justify variant="tabs" bg="dark" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">
              <b>Home</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="customerinfo">
              <b>Modify Booking</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/membership">
              <b>Membership Registration</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">
              <b>About India Drive</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="customercare">
              <b>Customer Care</b>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }


import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";

export default function Footer(props) {
  return (
    <div>
      <Navbar bg="dark" variant="primary">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="/about">
              <b>About Us</b>
            </Nav.Link>
            <Nav.Link href="#Affiliated Hotels">
              <b>Affiliated Hotels</b>
            </Nav.Link>
            <Nav.Link href="#Weather">
              <b>Weather </b>
            </Nav.Link>
            <Nav.Link href="#Contact Us">
              <b>Contact Us</b>
            </Nav.Link>
            <Nav.Link href="#Site Map">
              <b>Site Map </b>
            </Nav.Link>
            <Nav.Link href="#Career">
              {" "}
              <b>Career </b>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light"></Navbar>
      <Navbar bg="secondary" variant="light">
        <Container>
          <Nav className="m-auto">
            <Nav.Link href="/home">
              <b>@ India Drive</b>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

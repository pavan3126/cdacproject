import { List } from "antd";
import React from "react";
import { Container, Card, CardGroup, Button } from "react-bootstrap";
import logo from "./images/logo.png";
import photo from "./images/thankyou.jpg";
import Accordion from 'react-bootstrap/Accordion';
function About() {
  return (
    <div className="About">
      <Container>
        <br />
        <header className="About-header">
          <img
            src={logo}
            className="About-logo m-auto"
            width="170"
            height="100"
            alt="logo"
          />
        </header>
        <br />
        <hr />
        <u>
          <h2>About India Drive</h2>
        </u>
        <br /> <hr />
        <h2>

          We are IndiaDrive, Rent-A-Car. Founded in 2000, IndiaDrive Rent-A-Car is India's most distinguished rental car company.We provide customers with approximately 56 locations and 2000 vehicles throughout India.
          Rather than let vehicles age, we also replace our most popular passenger vehicles every few years.
          Replacing used vehicles eliminates uncomfortable wear and tear, and reduces the risk of breakdown and other inconveniences to our customers.
          The most trusted name in vehicle rentals.
        </h2>
        <br />
        <br />
        <h2>Check Our Pricing</h2>
        <CardGroup>
          <Card>

            <Card.Body>
              <Card.Title>Hatchback Cars</Card.Title>
              <Card.Text>

                <p><b>₹300.00 / Day</b></p>
                <p><b>₹2100.00 / Week</b></p>
                <p><b>₹9400.00 / Month</b></p>
                <Button variant="outline-secondary" size="lg" href="http://localhost:3000/home">Book Now </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Limited time Deal!</small>
            </Card.Footer>
          </Card>
          <Card>

            <Card.Body>
              <Card.Title>Sedan Cars</Card.Title>
              <Card.Text>

                <p><b>₹400.00 / Day</b></p>
                <p><b>₹2500.00 / Week</b></p>
                <p><b>₹9800.00 / Month</b></p>
                <Button variant="outline-secondary" size="lg" href="http://localhost:3000/home">Book Now </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Limited time Deal!</small>
            </Card.Footer>
          </Card>

          <Card>

            <Card.Body>
              <Card.Title>SUV Cars</Card.Title>
              <Card.Text>

                <p><b>₹500.00 / Day</b></p>
                <p><b>₹2800.00 / Week</b></p>
                <p><b>₹10400.00 / Month</b></p>
                <Button variant="outline-secondary" size="lg" href="http://localhost:3000/home">Book Now </Button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Limited time Deal!</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
      <br/>
      <br/>
      <Container>
        <h2>Frequently Asked Questions</h2>
        <br/>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Is there a km limit to how much I can drive?</Accordion.Header>
        <Accordion.Body>
          There is no such limit as per your rental plan is concerned
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Do I have to return the car to the same location where I picked it up?</Accordion.Header>
        <Accordion.Body>
        Yes. You must bring the vehicle back to the same place you picked it up before the end of your reservation. If you return the car at a location different from your pickup point, you will be charged INR 500 with full hourly rate.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What happens if I return the car late?</Accordion.Header>
        <Accordion.Body>
        In addition to the standard hourly fee, every hour of delay would be charged at Rs. 300/hour.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How will I receive my Refund if booking cancelled?</Accordion.Header>
        <Accordion.Body>
        Refund will be initiated to the card used to make the payment and will take upto 10 days to settle.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>
      <Container>
        
      </Container>
    </div>
  );
}

export default About;



        
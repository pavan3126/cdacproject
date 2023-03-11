import React from "react";
import { Container } from "react-bootstrap";
import vid from "./images/vid.mp4";
import "./common.css";

function Vid() {
  return (
    <div className="CustomerCare">
      <Container>
        <br />
        <header>
          <video loop autoPlay width="50%" height="50%">
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
        <hr />

        <br />
        <br />
      </Container>
    </div>
  );
}

export default Vid;

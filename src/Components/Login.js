import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, Button, Container } from "react-bootstrap";
import "./Login.css";
import LoginService from "../services/LoginService";
import logo from "./images/login.jpg";
import { Row } from "antd";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    {
      LoginService.getLoginById(name)
        .then((response) => {
          console.log(response.data);
          if (
            name === response.data.name &&
            password === response.data.password
          ) {
            navigate("/allcustomer");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // useEffect(() => {
  //   fetch("https://localhost:44364/api/login/" + name)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setLogin(result);
  //     });
  // }, []);

  return (
    <div className="Login">
      <Container>
        <Row>
          <Col>
            <header className="About-header">
              <img src={logo} width="350" height="525" alt="logo" />
            </header>
          </Col>
          <Col>
            <div className="shubham">
              <Form.Group size="lg" controlId="name">
                <Form.Label>
                  <b> Name</b>
                </Form.Label>
                <Form.Control
                  autoFocus
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <br />
              <Form.Group size="lg" controlId="password">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <br />

              <Button
                block
                size="lg"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
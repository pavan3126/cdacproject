import React, { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomerService from "../services/CustomerService";

const AllCustomer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers();
  }, []);

  const getAllCustomers = () => {
    CustomerService.getAllCustomers()
      .then((response) => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCustomer = (CustomerId) => {
    let confirm=prompt("type yes to delete","");
    if (confirm=="yes" | confirm==="YES" | confirm==="Yes"){
    CustomerService.deleteCustomer(CustomerId)
      .then((response) => {
        getAllCustomers();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div> <Navbar bg="primary" variant="light">

    <Container>
    <Navbar.Brand href="/listemployee">
              <Button variant="light" size="md" href="/listemployee">
                <b>All Host</b>
              </Button>
              
            </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="/home">
          <b>Booking</b>
        </Nav.Link>
        <Nav.Link href="/Cancellation">
          <b>Cancellation</b>
        </Nav.Link>
        <Nav.Link href="/handover">
          <b>Handover</b>
        </Nav.Link>
        <Nav.Link href="/return">
          <b>Return</b>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <br></br>
    <div className="container">
      <h2 className="text-center"> List Of Customers </h2>
      <table className="table table-bordered table-striped">
        {" "}
        <br />
        <thead>
          <th> Customer Id </th>
          <th> Customer First Name </th>
          <th> Customer Last Name </th>
          <th> Customer Email Id </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerid}>
              <td>
                <b> {customer.customerid} </b>
              </td>
              <td>
                <b> {customer.fname}</b>{" "}
              </td>
              <td>
                <b>{customer.lname}</b>
              </td>
              <td>
                <b>{customer.email}</b>
              </td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/usersinfo/${customer.customerid}`}
                >
                  Details
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCustomer(customer.customerid)}
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      
      <Link to="/" className="btn btn-danger">
        {" "}
        Back{" "}
      </Link>
      <br />
    </div>
    </div>
  );
};

export default AllCustomer;

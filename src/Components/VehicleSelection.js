import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, Container, Button, Table } from "react-bootstrap";
import logo from "./images/selectcar.gif";
import VehicleService from "../services/VehicleService";
// import BookingService from "../services/BookingService";

export default function VehicleSelection(props) {
   const [cartypeid, setCartypeid] = useState("");
  const [vehicles, setVehicles] = useState([]);
  // const [booking, setBooking] = useState([]);
  const { phubid,rhubid,bid } = useParams();
  let navigate = useNavigate();

  const value = sessionStorage.getItem("box");
  const value1 = JSON.parse(value);
  value1.cartypeid = cartypeid;

  useEffect(() => {
    getAllVehicles();
  }, []);
//By using this Hook, you tell React that your component needs to do something after render.
  const getAllVehicles = () => {
    VehicleService.getAllVehicles()
    //from here we get the all vehicles from the database 
    //here we use services instead of using direct fetch method 
      .then((response) => {
        setVehicles(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ;
  // const selectVehicle = (vehicleId) => {
  //   BookingService.getBookingById(bid)
  //     .then((response) => {
  //      setBooking(response.data);
  //      console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //    { booking.cartypeid = vehicleId}
  //    {
  //      BookingService.updateBooking(bid, booking)
  //        .then((response) => {
  //          navigate("/addon");
  //        })
  //        .catch((error) => {
  //          console.log(error);
  //        });
  //    }
  // };
  
   const handleSubmit = (event) => {
     sessionStorage.setItem("box", JSON.stringify(value1));
     //on handlesubmit here we store the vehicles in the session 
     //whenever we need we can retrive it from the session by using getitem(key) function
     navigate(
       "/Addon"
     );
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // navigate(
    //   "/addon/" + phubid + "/" + rhubid + "/" + bid + "/" + cartypeid
    // );
    //  console.log(cartypeid);
    // navigate("/customerinfo/" + phubid + "/" + rhubid + "/" + bid + "/" + cartypeid);
// const booking = { cartypeid };
// {
//   BookingService.updateBooking(bid, booking)
//     .then((response) => {
//       navigate("/addon/" + bid);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
   }

  return (
    <div>
      <Container>
        <br />
        <header className="CustomerCare-header">
          <img
            src={logo}
            className="CustomerCare-logo m-auto"
            width="420"
            height="250"
            alt="logo"
          />
        </header>
        <hr />
        <u>
          <h3>Vehicle Selection</h3>
        </u>
        <br /> <hr />
        <Table striped bordered hover variant="info">
          <thead>
            <tr>
              <th></th>
              <th>Car Class</th>
              <th>Car Type</th>
              <th colSpan={4}>Base Rate</th>
            </tr>
            <tr>
              <th>No.</th>
              <th colSpan={2}></th>
              <th>Daily</th>
              <th>Weekly</th>
              <th>Monthly</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.cartypeid}>
                <td>
                  <b>{vehicle.cartypeid}</b>
                </td>
                <td>
                  <img width="150" height="100" src={vehicle.imagepath}></img>
                </td>
                <td>
                  <b>{vehicle.cartypename}</b>
                </td>
                <td>
                  <b>{vehicle.dailyrate}</b>
                </td>
                <td>
                  <b>{vehicle.weeklyrate}</b>
                </td>
                <td>
                  <b>{vehicle.monthlyrate}</b>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => setCartypeid(vehicle.cartypeid)}
                    style={{ marginLeft: "10px" }}
                  >
                    {" "}
                    select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr />
        <br />
        <Row>
          <Col>
            <Button
              variant="outline-success"
              size="md"
              type="submit"
              onClick={handleSubmit}
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
              <b> Cancel</b>
            </Button>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

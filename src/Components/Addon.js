import React from "react";
import { useState ,useEffect} from "react";
import { Col, Container, Form, Button, Row ,Table} from "react-bootstrap";
import { Link , useNavigate,useParams } from "react-router-dom";
import logo from "./images/addon.png";
import AddonService from "../services/AddonService";
import BookingDetailService from "../services/BookingDetailService";
import BookingService from "../services/BookingService";

export default function Addon() {
  const [addons, setAddons] = useState([]);
  const [addonid, setAddonid] = useState("");
  //  const [bookingdetailid, setBookingdetailid] = useState("");
  const [addondailyrate, setAddondailyrate] = useState("");
   let addondailyrate1="";
  const [addonname, setAddonname] = useState("");
  const [saddon, setSaddon] = useState([]);
  const { phubid, rhubid, bookingid, cartypeid } = useParams();
  const value = sessionStorage.getItem("box");
  const value1 = JSON.parse(value);
  let bookingdetailid="";
  let sessionaddonid="";
  let navigate = useNavigate();
  
//By using this Hook, you tell React that your component needs to do something after render.
useEffect(() => {
  AddonService.getAllAddons()
    .then((response) => {
      setAddons(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

 const setAddon = (addonid) => {
{
    AddonService.getAddonById(addonid)
      .then((response) => {
        setAddonid(response.data.addonid);
        setAddondailyrate(response.data.addondailyrate)
        addondailyrate1=response.data.addondailyrate;
        value1.addondailyrate1=addondailyrate1;
        value1.addonid=addonid;
       
        sessionStorage.setItem("box", JSON.stringify(value1));
        console.log(response.data);
     
      })
      .catch((error) => {
        console.log(error);
      });
  }

 }


 const handleSubmit = (event) => {

   {
   const bookingdetail = { addonid, bookingid, addondailyrate };
   
     BookingDetailService.createBookingdetail(bookingdetail)
       .then((response) => {
         console.log(response.data);
     
         bookingdetailid=response.data.bookingdetailid;
         const value = sessionStorage.getItem("box");
         const value1 = JSON.parse(value);
         value1.bookingdetailid=bookingdetailid;
        //  alert(value1.bookingdetailid);
         sessionStorage.setItem("box", JSON.stringify(value1));
        
         navigate(
            "/customerinfo"// +
          //    phubid +
          //    "/" +
          //    rhubid +
          //    "/" +
          //    bookingid +
          //    "/" +
          //    cartypeid +
          //    "/" +
          //   bookingdetailid
         );
         
       })
       .catch((error) => {
         console.log(error);
       });
       navigate(
        "/customerinfo"
      );
       }

  //  const booking = { bookingdetailid };
  //  {
  //    BookingService.updateBooking(bid, booking)
  //      .then((response) => {
  //        console.log(response.data);
  //        navigate("/customerinfo/" + 34);
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  }


 };
  return (
    <div>
      <br />
      <Container>
        <header className="About-header">
          <img
            src={logo}
            className="About-logo m-auto"
            width="400"
            height="300"
            alt="logo"
          />
        </header>
        <hr />
        <u>
          <h3>Rental Add-ons</h3>
        </u>
        <br /> <hr />
        <br />
        <Table striped bordered hover variant="info">
          <thead>
            <th> Addon Id </th>
            <th> Addon Name </th>
            <th> Addon Daily Rate </th>
            <th> Actions </th>
          </thead>
          <tbody>
            {addons.map((addon) => (
              <tr key={addon.addonid}>
                <td>
                  <b> {addon.addonid} </b>
                </td>
                <td>
                  <b> {addon.addonname}</b>{" "}
                </td>
                <td>
                  <b>{addon.addondailyrate}</b>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => setAddon(addon.addonid)}
                    style={{ marginLeft: "10px" }}
                  >
                    select
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <br /> <hr />
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
            <Button variant="outline-danger" size="md" type="submit">
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

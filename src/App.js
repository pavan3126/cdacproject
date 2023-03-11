import React from "react";
import "./App.css";
import Nbar from "./Components/Nbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Membership from "./Components/Membership";
import Home from "./Components/Home";
import Addon from "./Components/Addon";
import SelectLocation from "./Components/SelectLocation";
import CustomerInfo from "./Components/CustomerInfo";
import ConfirmBooking from "./Components/ConfirmBooking";
import VehicleSelection from "./Components/VehicleSelection";
import NoPage from "./Components/NoPage";
import Login from "./Components/Login";
import About from "./Components/About";
import CustomerCare from "./Components/CustomerCare";
import Handover from "./Components/Handover";
import Payment from "./Components/Payment";
import Billing from "./Components/Billing";
import Bill from "./Components/Bill";
import ThankYou from "./Components/ThankYou";
import PrintComponent from "./Components/PrintComponent";
import Invoice from "./Components/Invoice";
import AddEmployeeComponent from "./Components/AddEmployeeComponent";
import M from "./Components/M";
import AllCustomer from "./Components/AllCustomer";
import Usersinfo from "./Components/Usersinfo";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import CustomerLogin from "./Components/CustomerLogin";
import AllBooking from "./Components/Cancellation";
import Return from "./Components/return";

function App() {
  return (
    <div className="gradient">
      <BrowserRouter>
        <Nbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Addon" element={<Addon />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/selectlocation" element={<SelectLocation />} />
          <Route path="/confirmbooking" element={<ConfirmBooking />} />
          <Route path="/vehicleselection" element={<VehicleSelection />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path="/about" element={<About />} />
          <Route path="/addon" element={<Addon />} />
          <Route path="/customercare" element={<CustomerCare />} />
          <Route path="/handover" element={<Handover />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/customerinfo" element={<CustomerInfo />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/printcomponent" element={<PrintComponent />} />
          <Route path="/add-customer" component={CustomerInfo}></Route>
          <Route path="/edit-customer/:id" component={CustomerInfo}></Route>
          <Route path="/addempcomponent" element={<AddEmployeeComponent />} />
          <Route path="/m" element={<M />} />
          <Route path="/allcustomer" element={<AllCustomer />} />
          <Route path="/listemployee" element={<ListEmployeeComponent />} />
          <Route path="/addemployee" element={<AddEmployeeComponent />} />
          <Route path="/editemployee/:id" element={<AddEmployeeComponent />} />
          <Route path="/usersinfo/:id" element={<Usersinfo />} />
          <Route path="/Cancellation" element={<AllBooking />} />
          <Route path="/return" element={<Return />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";

function Nav() {
  const flag = useContext(UserContext);
  let username = flag.state.userfname;
  let userpass = flag.state.Userpass;
  let Nav = useNavigate();

  let flag1 = flag.state.flag;

  const onLogout = () => {
    flag.setState({
      "customerid": "",
        "fname": "",
        "lname": "",
        "address": "",
        "email": "",
        "mob1": "",
        "mob2": "",
        "crtype": "",
        "crno": "",
        "aadhar": "",
        "dob": "",
        "nation": "",
        "state": "",
        "city": "",
        "zip": "",
        "dlno": "",
        "dlvalidthrough": "",
        "passportno": "",
        "passvalidthrough": "",
        "prefcartype": "",
        "password": "",
        "flag": "0"
    });
    Nav("/");
  };

  const onLogin = () => {
    flag.setState({
      "customerid": "",
        "fname": "",
        "lname": "",
        "address": "",
        "email": "",
        "mob1": "",
        "mob2": "",
        "crtype": "",
        "crno": "",
        "aadhar": "",
        "dob": "",
        "nation": "",
        "state": "",
        "city": "",
        "zip": "",
        "dlno": "",
        "dlvalidthrough": "",
        "passportno": "",
        "passvalidthrough": "",
        "prefcartype": "",
        "password": "",
        "flag": "0"
    });
    Nav("/Login");
  };

  if (flag1 == 0) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div className="container-fluid ">
            <NavLink className="navbar-brand" to="/">
              Ninja Car Services
            </NavLink>
            {/* <Link to={"/"}>Ninja Car Services</Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/Aboutus">
                    About Us
                  </NavLink>
                  {/* <Link to={"/Aboutus"}>About Us</Link> */}
                  {/* <Link></Link> */}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Careers">
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/City">
                        Cities
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Feature">
                        Features
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Teams">
                        Our Team
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Contactus">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Help">
                        Help
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link " to="/Login">Login</NavLink> */}

                  <button
                    className="btn btn-dark btn-md px-3 "
                    type="submit"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/SignUp">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
  if (flag1 == 1) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div className="container-fluid ">
            <NavLink className="navbar-brand" to="/">
              Ninja Car Services
            </NavLink>
            {/* <Link to={"/"}>Ninja Car Services</Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/Aboutus">
                    About Us
                  </NavLink>
                  {/* <Link to={"/Aboutus"}>About Us</Link> */}
                  {/* <Link></Link> */}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Careers">
                    Careers
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/City">
                        Cities
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Feature">
                        Features
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Teams">
                        Our Team
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Contactus">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/Help">
                        Help
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {/* <NavLink className="nav-link " to="/Login">Login</NavLink> */}

                  <button
                    className="btn btn-dark btn-md px-5"
                    type="submit"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/Bookings">
                    Welcome {username}
                  </NavLink>
                  {/* <button className="btn btn-outline-light btn-lg px-5" type="submit">Welcome {username}</button> */}
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;

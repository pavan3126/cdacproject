import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import Homeform from "./homeform";
import { useContext } from "react";
import UserContext from "./UserContext";

function CustomerLogin() {
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);

  let nav = useNavigate();
  const flag = useContext(UserContext);
//   let username = flag.state.Username;
//   let password = flag.state.password;

//   let flag1 = flag.state.flag;
  // alert(JSON.stringify(user))

  useEffect(() => {
    fetch("http://localhost:44364/customer")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  const onlogin = (event) => {
    var verify;
    user.map((val) => {
      // if (val.email == data.email && val.password == data.password) {
    {    let obj = {
        customerid: val.customerid,
        fname: val.fname,
        lname: val.lname,
        address: val.address,
        email: val.email,
        mob1: val.mob1,
        mob2: val.mob2,
        crtype: val.crtype,
        crno: val.crno,
        aadhar: val.aadhar,
        dob: val.dob,
        nation: val.nation,
        state: val.state,
        city: val.city,
        zip: val.zip,
        dlno: val.dlno,
        dlvalidthrough: val.dlvalidthrough,
        passportno: val.passportno,
        passvalidthrough: val.passvalidthrough,
        password: val.password,
      
      }
        verify = obj;

        flag.setState({
          customerid: verify.customerid,
              "fname": verify.fname,
              "lname": verify.lname,
              "address": verify.address,
              "email": verify.email,
              "mob1": verify.mob1,
              "mob2": verify.mob2,
              "crtype": verify.crtype,
              "crno": verify.crno,
              "aadhar": verify.aadhar,
              "dob": verify.dob,
              "nation": verify.nation,
              "state": verify.state,
              "city": verify.city,
              "zip": verify.zip,
              "dlno": verify.dlno,
              "dlvalidthrough": verify.dlvalidthrough,
              "passportno": verify.passportno,
              "passvalidthrough": verify.passvalidthrough,
              "password": verify.password,
              
              flag: "1",
        });

        alert("Login Successfull");
        nav("/");

        // if(catmaster_id == "undefined"){
        //     navigate('/homepage');
        // }
        // else{
        //     navigate('/bookingpage/'+catmaster_id);
        // }
      }
      console.log(verify);
    });
    if (verify == null) {
      alert("Incorrect User Id or Password");
    }

    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <form>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          name="useremail"
                          required
                          onChange={handleChange}
                        />
                        <label className="form-label" for="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          autoComplete=""
                          name="password"
                          required
                          onChange={handleChange}
                        />
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        onClick={onlogin}
                      >
                        Login
                      </button>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div>
                    </div>

                    <div>
                      {/* <p className="mb-0">Don't have an account? <a href=""  className="text-white-50 fw-bold">Sign Up</a></p> */}
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <NavLink to="/SignUp" className="text-white-50 fw-bold">
                          Sign Up
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default CustomerLogin;

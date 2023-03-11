import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {
const [email, setEmail] = useState("");
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { email ,name, password };

        if(id){
            EmployeeService.updateEmployee(email, employee).then((response) => {
                navigate('/listemployee')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate("/listemployee");
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setEmail(response.data.email);
            setName(response.data.name)
            setPassword(response.data.password)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
      <div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {title()}
              <div className="card-body">
                <form>
                  <div className="form-group mb-2">
                    <label className="form-label"> Email Id :</label>
                    <input
                      type="email"
                      placeholder="Enter email Id"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">Name :</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>

                  <div className="form-group mb-2">
                    <label className="form-label"> Password :</label>
                    <input
                      type="text"
                      placeholder="Enter Password"
                      name="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={(e) => saveOrUpdateEmployee(e)}
                  >
                    Submit{" "}
                  </button>
                  <Link to="/listemployee" className="btn btn-danger">
                    {" "}
                    Cancel{" "}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
      </div>
    );
}

export default AddEmployeeComponent

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteEmployee = (name) => {
      let confirm=prompt("type yes to delete","");
      if (confirm=="yes" | confirm==="YES" | confirm==="Yes"){
       EmployeeService.deleteEmployee(name).then((response) =>{
        getAllEmployees();

       }).catch(error =>{
           console.log(error);
       })
      }
    }

    return (
      <div className="container">
        <h2 className="text-center"> List Employees </h2>
        <Link to="/addemployee" className="btn btn-primary mb-2">
          {" "}
          Add Employee{" "}
        </Link>
        <table className="table table-bordered table-striped">
          {" "}
          <br />
          <thead>
            <th> Employee Name </th>
            <th> Employee Email Id </th>
            <th> Employee Password </th>
            <th> Actions </th>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.name}>
                <td> {employee.email} </td>
                <td>{employee.name}</td>
                <td>{employee.password}</td>
              
                <td>
                  <Link
                    className="btn btn-info"
                    to={`/editemployee/${employee.name}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmployee(employee.name)}
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
        <Link to="/allcustomer" className="btn btn-danger">
          {" "}
          Back{" "}
        </Link>
        <br />
      </div>
    );
}

export default ListEmployeeComponent
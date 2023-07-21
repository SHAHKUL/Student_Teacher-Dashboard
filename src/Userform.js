import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./Usercontext";

import { useContext } from "react";

import axios from "axios";
import { useEffect } from "react";

function Userform() {
  // const useData = useContext(UserContext);
  const [a, b] = useState([]);

  useEffect(async () => {
    let user = await axios.get(
      "https://6209f1fc92946600171c55e5.mockapi.io/teach"
    );
    b(user.data);
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teacher List</h1>
        <Link
          href="#"
          to={"/create"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create Teacher
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Salary</th>
               
                  <th>Gender</th>
                  <th>Date Of Birth</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                  
                  <th>Gender</th>
                  <th>Date Of Birth</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {/* {useData.users.map((usr, index) => { */}
                {a.map((usr, index) => {
                  return (
                    <tr key={index}>
                      <td>{usr.name}</td>
                      <td>{usr.age}</td>
                      <td>{usr.salary}</td>
                      <td>{usr.gender}</td>
                      <td>{usr.dob}</td>
                     
                      <td>
                        {/* <Link
                          to={`/user-view/${index}`}
                          classNameName="btn btn-warning btn-sm"
                        >
                          view
                        </Link>
                        <Link
                          to={`/user-edit/${index}`}
                          classNameName="btn btn-primary btn-sm"
                        >
                          edit
                        </Link> */}

                        {/* By using axios */}
                        <Link
                          to={`/user-view/${usr.id}`}
                          className="btn btn-warning btn-sm"
                        >
                         <i className="fas fa-eye"></i>
                        </Link>
                        <Link
                          to={`/user-edit/${usr.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <Link to={`/user-delete/${usr.id}`} className="btn btn-danger btn-sm">
                        <i class="fas fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userform;

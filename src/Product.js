import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import swal from "sweetalert";

function Product() {
  const [a, b] = useState([]);
  let params = useParams();

  useEffect(async () => {
    let user = await axios.get(
      "https://6209f1fc92946600171c55e5.mockapi.io/stu"
    );
    b(user.data);
  }, []);

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List</h1>
        <Link
          href="#"
          to={"/crprod"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Student
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Class</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Class</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {a.map((pro) => {
                  return (
                    <tr>
                      <td>{pro.id}</td>
                      <td>{pro.roll}</td>
                      <td>{pro.name}</td>
                      <td>{pro.age}</td>
                      <td>{pro.class}</td>
                      <td>{pro.gender}</td>

                      <td>
                        <Link
                          to={`/product-view/${pro.id}`}
                          className="btn btn-warning btn-sm"
                        >
                          <i class="fas fa-eye"></i>
                        </Link>
                        <Link
                          to={`/product-edit/${pro.id}`}
                          className="btn btn-primary btn-sm"
                        >
                          <i class="fas fa-edit"></i>
                        </Link>
                        <Link
                          to={`/product-delete/${pro.id}`}
                          className="btn btn-danger btn-sm"
                        >
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

export default Product;

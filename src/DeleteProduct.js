import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";



function DeleteProduct() {
  let params = useParams();

  let formik = useFormik({
    initialValues: {
      roll: "",
      name: "",
      age: "",
      class: "",
      gender:"",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name box cannot be blank";
      }

      return errors;
    },
    onSubmit: (values) => {
      // useData.setUsers([...useData.users, values]);

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(
            `https://6209f1fc92946600171c55e5.mockapi.io/stu/${params.id}`,
            values
          );
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });

    },
  });

  useEffect(async () => {
    try {
      let user = await axios.get(
        `https://6209f1fc92946600171c55e5.mockapi.io/stu/${params.id}`
      );
      formik.setValues(user.data);
    } catch (error) {}
  }, []);
  return (
    <div className="container">
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>Roll Number</label>
          <input
            type={"number"}
            name="roll"
            onChange={formik.handleChange}
            value={formik.values.roll}
            className="form-control"
          ></input>
        </div>
        <div className="col-lg-6">
          <label>Name</label>
          <input
            style={{
              border: formik.errors.name
                ? " 1px solid red"
                : !formik.errors.name
                ? "1px solid green"
                : "",
            }}
            type={"text"}
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="form-control"
          ></input>
          <span style={{ color: "red" }}>{formik.errors.name} </span>
        </div>

        <div className="col-lg-6">
          <label>Age</label>
          <input
            type={"number"}
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            className="form-control"
          ></input>
        </div>
        <div className="col-lg-6">
          <label>Class</label>
          <input
            type={"text"}
            name="class"
            onChange={formik.handleChange}
            value={formik.values.class}
            className="form-control"
          ></input>
        </div>

        <div className="col-lg-6">
          <label>Gender</label>
          <input
            type={"text"}
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
            className="form-control"
          ></input>
        </div>

        <div className="col-lg-12 " style={{margin:"5px"}}>
          <button
            type={"submit"}
            disabled={Object.keys(formik.errors).length !== 0}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
        {/* <div className="col-lg-4"></div> */}
        <Link to={'/prod'} type="submit" class="btn btn-warning" style={{margin:"5px"}} >
        <i class="fas fa-arrow-circle-left fa-2x" ></i>
        </Link>
      </div>
    </form>
  </div>
  );
}

export default DeleteProduct;





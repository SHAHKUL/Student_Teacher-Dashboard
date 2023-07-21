import { useFormik } from "formik";
import React from "react";
import UserContext from "./Usercontext";
import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Createform() {
  const useData = useContext(UserContext);
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      salary: "",
      gender: "",
      dob: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name box cannot be blank";
      }
      if (!values.age || values.age < 18) {
        errors.age = "Age box cannot be blank and greter than 18";
      }

      return errors;
    },
    onSubmit: async (values) => {
      // useData.setUsers([...useData.users,values])
      // console.log(values)
      try {
        await axios.post(
          "https://6209f1fc92946600171c55e5.mockapi.io/teach",
          values
          
        );
        useData.setUsers([...useData.users, values]);
        navigate("/ush")
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
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
            <label>Salary</label>
            <input
              type={"number"}
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
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
          <div className="col-lg-6">
            <label>DATE OF BIRTH</label>
            <input
              type={"date"}
              name="dob"
              onChange={formik.handleChange}
              value={formik.values.dob}
              className="form-control"
            ></input>
          </div>

          <div className="col-lg-8" style={{margin:"5px"}}>
            <button
              className="btn btn-success"
              disabled={Object.keys(formik.errors).length !== 0}
              type={"submit"}
            >
              Create
            </button>
            
        </div>
          </div>
          
      </form>
    </div>
  );
}

export default Createform;

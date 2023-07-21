import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "./Usercontext";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import swal from "sweetalert";

function Useredit() {
  let params = useParams();
  let navigate = useNavigate();
  const useData = useContext(UserContext);

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
      // if (!values.age || values.age < 18) {
      //   errors.age = "Age box cannot be blank and greter than 18";
      // }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.put(
          `https://6209f1fc92946600171c55e5.mockapi.io/teach/${params.id}`,
          values
        );
        useData.setUsers([...useData.users, values]);
      } catch (error) {
        console.log(error);
      }

      swal({
        title: "UPDATE",
        text: "Are you sure Do you want to Update this file?",
        // icon: "success",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.put(
            `https://6209f1fc92946600171c55e5.mockapi.io/teach/${params.id}`,
            values
          );
          swal("Sucessfully Your File is Updated!", {
            icon: "success",
          });
        } else {
          swal("Your  file is not Updated!");
        }
      });
    },
  });

  useEffect(async () => {
    try {
      let user = await axios.get(
        `https://6209f1fc92946600171c55e5.mockapi.io/teach/${params.id}`
      );
      formik.setValues(user.data);
    } catch (error) {}
  }, []);
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
            />
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
            <label>Date Of Birth</label>
            <input
              type={"date"}
              name="dob"
              onChange={formik.handleChange}
              value={formik.values.dob}
              className="form-control"
            ></input>
          </div>

          <div className="col-lg-12 " style={{ margin: "5px" }}>
            <button
              type={"submit"}
              disabled={Object.keys(formik.errors).length !== 0}
              className="btn btn-success"
            >
              Update
            </button>
          </div>
          {/* <div className="col-lg-4"></div> */}
          <Link
            to={"/ush"}
            type="submit"
            class="btn btn-warning"
            style={{ margin: "5px" }}
          >
            <i class="fas fa-arrow-circle-left fa-2x"></i>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Useredit;

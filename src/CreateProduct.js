import React from "react";
import { useFormik } from "formik";
import UserContext from "./Usercontext";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";

function CreateProduct() {
  let navigate = useNavigate();

  const useData=useContext(UserContext)
  let formik = useFormik({
    initialValues: {
      roll: "",
      name: "",
      age: "",
      class: "",
      gender:"",
    },

    validate:(values)=>{
      
      const errors={};
      if(!values.name){
        errors.name="Name box cannot be blank"
      }
     

      return errors

    },
    onSubmit:async (values) => {
     
      try {
        await axios.post("https://6209f1fc92946600171c55e5.mockapi.io/stu",values)
        useData.setUsers([...useData.users,values])
        navigate("/prod")
      } catch (error) {
        console.log(error)
      }
    },
  });
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
              type={"text"}
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            ></input>
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
            <label>Class
            </label>
            <input
              type={"text"}
              name="class"
              onChange={formik.handleChange}
              value={formik.values.class}
              className="form-control"
            ></input>
          </div>

          <div className="col-lg-6">
            <label>Gender
            </label>
            <input
              type={"text"}
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
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

export default CreateProduct;

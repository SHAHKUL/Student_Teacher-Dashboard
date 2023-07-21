import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";

function Userview() {
  let params = useParams();

  const [user, setUser] = useState({});

  useEffect(async () => {
    let Singledata = await axios.get(
      `https://6209f1fc92946600171c55e5.mockapi.io/teach/${params.id}`
    );
    setUser(Singledata.data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                value={user.name}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Age</label>
              <input
                type="email"
                className="form-control"
                value={user.age}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Salary</label>
              <input
                type="email"
                className="form-control"
                value={user.salary}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">Gender</label>
              <input
                type="email"
                className="form-control"
                value={user.gender}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Date Of Birth</label>
              <input
                type="email"
                className="form-control"
                value={user.dob}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <Link to={"/ush"} type="submit" className="btn btn-primary">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Userview;

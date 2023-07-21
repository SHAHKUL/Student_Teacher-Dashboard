import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewProduct() {

  let params=useParams()

  let [user,setUser]=useState({})

  useEffect(async () => {
    let Singledata = await axios.get(
      `https://6209f1fc92946600171c55e5.mockapi.io/stu/${params.id}`
    );
    setUser(Singledata.data);
    {
      console.log(user.name);
    }
  }, [])


  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Roll</label>
            <input
              type="email"
              className="form-control"
              value={user.roll}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="email"
              className="form-control"
              value={user.name}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Age</label>
            <input
              type="number"
              className="form-control"
              value={user.age}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          
          <div className="form-group">
            <label for="exampleInputEmail1">className</label>
            <input
              type="email"
              className="form-control"
              value={user.className}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Gender</label>
            <input
              type="text"
              className="form-control"
              value={user.gender}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Date Of Birth</label>
            <input
              type="date"
              className="form-control"
              value={user.dob}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          
          
         

          <Link to={'/prod'} type="submit" className="btn btn-primary">
            Back
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ViewProduct
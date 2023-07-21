import React, { useEffect } from "react";
import Component from "./Component";

function Card() {
  const data = [
    {
      primary: true,
      price: "$40,000",
      earnings: "Earning (Monthly)",
      primaryfont: true,
      calender: true,
    },
    {
      success: true,
      price: "$2,15,000",
      earnings: "Earnings (Annual)",
      successfont: true,
      dollar: true,
    },
    {
      info: true,
      price: "50%",
      earnings: "Tasks",
      clipboard: true,
      progbar: true,
    },

    {
      warning: true,
      price: "18",
      earnings: "Pending Requests",
      comment: true,
    },
  ];

  // useEffect(() => {
  //   console.log("IN");
  // }, []);

  // useEffect(() => {
  //   return ()=>{
  //     console.log("OUT")

  //   } 
  // }, []);

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        {data.map((ele) => {
          return <Component e={ele} />;
        })}
      </div>
    </>
  );
}

export default Card;

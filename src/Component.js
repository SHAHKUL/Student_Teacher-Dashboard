import React from "react";

function Component(props) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div
        className={
          props.e.primary
            ? "card border-left-primary shadow h-100 py-2"
            : props.e.success
            ? "card border-left-success shadow h-100 py-2"
            : props.e.info
            ? "card border-left-info shadow h-100 py-2"
            : props.e.warning
            ? "card border-left-warning shadow h-100 py-2"
            : ""
        }
      >
        <div className="card-body">
          <div classNameName="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={
                  props.e.primaryfont
                    ? "text-xs font-weight-bold text-primary text-uppercase mb-1"
                    : props.e.successfont
                    ? "text-xs font-weight-bold text-success text-uppercase mb-1"
                    : props.e.info
                    ? "text-xs font-weight-bold text-info text-uppercase mb-1"
                    : props.e.warning
                    ? "text-xs font-weight-bold text-warning text-uppercase mb-1"
                    : ""
                }
              >
                {props.e.earnings}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {props.e.price}
              </div>
            </div>
              {
              props.e.progbar?
              <div className="col">
                  <div className="progress progress-sm mr-2">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{width: "50%"}}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>:" "
              }

            <div className="col-auto">
              <i
                className={
                  props.e.calender
                    ? "fas fa-calendar fa-2x text-gray-300"
                    : props.e.dollar
                    ? "fas fa-dollar-sign fa-2x text-gray-300"
                    : props.e.clipboard
                    ? "fas fa-clipboard-list fa-2x text-gray-300"
                    : props.e.comment
                    ? "fas fa-comments fa-2x text-gray-300"
                    : ""
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;

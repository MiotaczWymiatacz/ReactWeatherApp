import React from "react";
import "./City.css";

const City = (props) => {
  return (
    <div className="input">
      <form onSubmit={props.submit} className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="City"
          aria-label="City"
          aria-describedby="button-addon2"
          value={props.value}
          onChange={props.change}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-light" id="button-addon2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default City;

import React from "react";
import "./Result.css";

const Result = (props) => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const tempFloor = Math.round(temp);
    console.log(tempFloor);
    content = (
      <div className="content">
        <div>
          Weather for <strong>{city}</strong>
        </div>
        <div>{date}</div>
        <div className="box temp">
          <svg
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            className="bi bi-thermometer-half"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z"
            />
            <path d="M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path
              fillRule="evenodd"
              d="M8 1.75a.25.25 0 0 1 .25.25v10a.25.25 0 1 1-.5 0V2A.25.25 0 0 1 8 1.75z"
            />
          </svg>
          <div> {tempFloor}&#176;C</div>
        </div>
        <div className="box">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-brightness-alt-high"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.041 10.5h5.918a3 3 0 0 0-5.918 0zM4 11a4 4 0 1 1 8 0 .5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 11zm4-8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM4.464 7.464a.5.5 0 0 1-.707 0L2.343 6.05a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"
            />
          </svg>
          <div> {sunriseTime}</div>
        </div>
        <div className="box">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-brightness-alt-low"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
            <path
              fillRule="evenodd"
              d="M5.041 10.5h5.918a3 3 0 0 0-5.918 0zM4 11a4 4 0 1 1 8 0 .5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 11z"
            />
          </svg>
          <div> {sunsetTime}</div>
        </div>
        <div>Wind {wind} m/s</div>
        <div>Pressure {pressure} hPa</div>
      </div>
    );
  }

  return <div className="result">{err ? `${city} not found` : content}</div>;
};

export default Result;

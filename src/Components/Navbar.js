  import React from "react";
  import PropTypes from "prop-types";
  import { Link } from "react-router-dom";

  export default function Navbar(props) {
    // const colorGenerator = () => {
    //   const randomNumber = Math.random();
    //   const randomColor = Math.floor(randomNumber * 16777215);
    //   const color = "#" + randomColor.toString(16);
    //   const g = document.querySelector(".btn");
    //   g.style.borderColor = color;
    //   document.body.style.background = color;
    // };
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  py-2`}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            {props.tittle}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link " aria-current="page" href="#">
                  {props.Home}
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.About}
                </a>
              </li> */}
            </ul>

            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.bootsColor("primary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                onClick={() => {
                  props.bootsColor("danger");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                onClick={() => {
                  props.bootsColor("success");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                onClick={() => {
                  props.bootsColor("warning");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
               <div
                className="bg-info rounded mx-2"
                onClick={() => {
                  props.bootsColor("info");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>

              <div
                className="bg-secondary rounded mx-2"
                onClick={() => {
                  props.bootsColor("secondary");
                }}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>

            <div
              className={` form-check px-5 py-2 form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                onClick={() => {
                  props.toggleMode();
                }}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === "light" ? "dark" : "light"}
              </label>
            </div>

            <button
              className={`btn btn-outline-success`}
              onClick={() => {
                props.colorGenerator();
              }}
              type="submit"
            >
              ColorPellet
            </button>
          </div>
        </div>
      </nav>
    );
  }

  Navbar.prototype = {
    tittle: PropTypes.string.isRequired,
    Home: PropTypes.string,
  };

  // props declaring----->>>
  Navbar.defaultProps = {
    tittle: "TextUtils",
    Home: "Home",
    About: "About",
  };

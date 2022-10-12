import React from "react";
import "../home/home.css";
import typeImage from "./types";
import "./navbar.css";
import { getName, getType } from "../../redux/action";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar({ setCurrentPage }) {
  const typesFilter = Object.entries(typeImage);
  console.log(typesFilter, "typesFilter");
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleType(e) {
    console.log(e);
    dispatch(getType(e));
    setCurrentPage(1);
  }

  function handleInput(e) {
    console.log(e.target.value, "e.target.value");
    setName(e.target.value);
  }

  function handleClick(e) {
    console.log(name);
    dispatch(getName(name.toLowerCase()));
    setCurrentPage(1);
  }

  return (
    <nav class="navbar navbar-dark bg-dark w-100 m-0">
      <div class="container-fluid">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt=""
          style={{ width: "150px", height: "50px" }}
        />

        <div class="container text-center " className="hola">
          <div class="col g-2 g-lg-3 w-100 ">
            {typesFilter?.map((a, i) => {
              return (
                <button
                  style={{
                    height: "60px",
                    width: "60px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  key={i}
                  value={a[0]}
                  onClick={(e) => handleType(a[0])}
                >
                  <img class="w-0 m-1" src={a[1]} alt={a[0]} height={"45px"} />
                </button>
              );
            })}
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Poke Nav
            </h5>
            <img
              src="https://art.pixilart.com/3ed0c0f489c0303.png"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search"
              onChange={(e) => handleInput(e)}
            />
            <button
              class="btn btn-success"
              type="submit"
              onClick={() => handleClick()}
            >
              Search
            </button>

            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/create">
                  Create pokemon
                </a>
              </li>
            </ul>
          </div>
          <div class="container text-center" className="oculto">
            <div class="col g-2 g-lg-3 w-100 ">
              {typesFilter?.map((e) => {
                return (
                  <button
                    style={{
                      height: "60px",
                      width: "60px",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <img class="w-0 m-1" src={e[1]} alt="" height={"45px"} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

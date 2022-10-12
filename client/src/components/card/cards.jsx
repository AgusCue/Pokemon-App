import React from "react";
import "../home/home.css";

export default function Card({
  image,
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
  // typesImg,
}) {
  return (
    <div
      class="row row-cols-1 row-cols-md-5 g-4 "
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      data-aos-offset="100"
      data-aos-delay="50"
      style={{ marginTop: "-5px" }}
    >
      <div class="card w-100 bg-secondary bg-opacity-50 ">
        <div class="row g-0 d-flex align-items-center text-center d-flex justify-content-between w-100 ">
          <h1 class="card-title position-relative">{name}</h1>
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start w-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body w-100 shadow m-1 p-1">
              <ul class="list-group list-group-horizontal w-100">
                <li class="list-group-item w-75 list-group-item-primary">
                  {" "}
                  <strong>HP</strong>
                </li>
                <li class="list-group-item d-flex justify-content-center list-group-item-primary w-25">
                  {hp}
                </li>
              </ul>
              <ul class="list-group list-group-horizontal ">
                <li class="list-group-item w-75 list-group-item-danger">
                  <strong>ATTACK</strong>
                </li>
                <li class="list-group-item d-flex justify-content-center list-group-item-danger w-25">
                  {attack}
                </li>
              </ul>
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item w-75 list-group-item-success">
                  <strong>DEFENSE</strong>
                </li>
                <li class="list-group-item d-flex justify-content-center list-group-item-success w-25">
                  {defense}
                </li>
              </ul>
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item w-75 list-group-item-warning ">
                  <strong>SPEED</strong>
                </li>
                <li class="list-group-item list-group-item-warning d-flex justify-content-center w-25">
                  {speed}
                </li>
              </ul>
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item w-75 list-group-item-info">
                  <strong>HEIGHT</strong>
                </li>
                <li class="list-group-item d-flex justify-content-center list-group-item-info w-25">
                  {height}
                </li>
              </ul>
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item w-75 list-group-item-light">
                  <strong>WEIGHT</strong>
                </li>
                <li class="list-group-item d-flex justify-content-center list-group-item-light w-25">
                  {weight}
                </li>
              </ul>
            </div>
          </div>

          {types?.map((e) => {
            return (
              <div class="row g-0 text-center w-50 justify-content-center d-flex align-items-center mt-2 mb-2">
                <div class="col-sm-6 col-md-6">
                  <h5>{e.name}</h5>
                </div>
                <div class="col-6 col-md-1">
                  <img src={e.img} alt={e.img} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

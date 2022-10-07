import React from "react";
import video from "./video.mp4";
import { Link } from "react-router-dom";

import "./landingPage.css";

export default function LandigPage() {
  return (
    <div className="landigpage">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemon"
        id="pokemon"
      />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <img
        src="https://i.pinimg.com/originals/9f/1d/58/9f1d582d5a8045fec25f03530d73dd24.gif"
        alt="gif"
        id="grupo"
      />
      <img
        src="https://24.media.tumblr.com/tumblr_mcm1ec68fN1qfqgb9o1_1280.gif"
        alt="gif"
        id="pikachu"
      />
      <p>
        <button
          class="boton"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <img
            id="bola"
            src="https://haotso.carrd.co/assets/images/image01.gif?v34939071545061"
            alt="bola"
          />
        </button>
      </p>
      <div className="message">
        <div class="collapse collapse-horizontal " id="collapseWidthExample">
          <div class="card card-body border border-5 border-dark">
            <h1 id="h1">
              Hi, Wellcome to the Poke App. <br />
              <Link className="btnhome" to="/home">
                <button type="button" class=" btn btn-outline-danger w-100">
                  Les´t go
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

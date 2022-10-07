import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/action";

export default function Carousel() {
  const allpokemon = useSelector((state) => state.pokemons);
  console.log(allpokemon, "allpokemon");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
  }, []);

  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        {allpokemon.map((e, i) => {
          return (
            <div class="carousel-item active" key={i}>
              <img src={e.img} class="d-block w-20 " alt="..." />
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

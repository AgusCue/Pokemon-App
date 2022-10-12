import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/action";

import Navbar from "../navbar/navbar";
import Card from "../card/cards";
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
// import Carousel from "../carousel/carousel";

import "./home.css";

export default function Home() {
  const allpokemon = useSelector((state) => state.pokemons);
  const [count, setCount] = useState(false);
  const dispatch = useDispatch();

  const [orden, setOrden] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const indexOflastRecipe = currentPage * recipesPerPage;
  const indexOffirstRecipe = indexOflastRecipe - recipesPerPage;
  const currentRecipe = allpokemon.slice(indexOffirstRecipe, indexOflastRecipe);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemon());
    setTimeout(() => {
      setCount(true);
    }, 1000);
  }, []);

  return (
    <div style={{ height: "100%", backgroundColor: "#b0c2f2" }}>
      {count ? (
        <div class="w-100 h-100 ">
          <Navbar setCurrentPage={setCurrentPage} />
          <div
            className="cards row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around w-100 m-0 "
            style={{ backgroundColor: "#b0c2f2" }}
          >
            {currentRecipe?.map((e) => {
              return (
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.img}
                  hp={e.hp}
                  attack={e.attack}
                  defense={e.defense}
                  speed={e.speed}
                  height={e.height}
                  weight={e.weight}
                  types={e.types}
                />
              );
            })}
          </div>
          <Paginado
            recipesPerPage={recipesPerPage}
            allpokemon={allpokemon.length}
            paginado={paginado}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

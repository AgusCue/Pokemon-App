import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/action";

import Navbar from "../navbar/navbar";
import Card from "../card/cards";
import Loading from "../Loading/Loading";
// import Carousel from "../carousel/carousel";

import "./home.css";

export default function Home() {
  const allpokemon = useSelector((state) => state.pokemons);
  const [count, setCount] = useState(false);
  console.log(allpokemon, "allpokemon");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
    setTimeout(() => {
      setCount(true);
    }, 2000);
  }, []);

  return (
    <div>
      {count ? (
        <div>
          <Navbar />
          <div className="cards row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around w-100 m-0 ">
            {allpokemon?.map((e) => {
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
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

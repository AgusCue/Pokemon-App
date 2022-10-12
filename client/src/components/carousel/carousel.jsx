// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPokemon } from "../../redux/action";
// import typeImage from "../navbar/types";

// import "./carousel.css";

// export default function Carousel() {
//   // const allpokemon = useSelector((state) => state.pokemons);
//   // console.log(allpokemon, "allpokemon");
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(getPokemon());
//   // }, []);

//   const typesFilter = Object.entries(typeImage);
//   console.log(typesFilter);

//   return (
//     <div
//       id="carouselExampleControls"
//       class="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <div class="row">
//             <div class="col-lg-4">
//               <img
//                 src={typesFilter[0][1]}
//                 class="d-block w-100 h-50"
//                 alt={typesFilter[0][0]}
//               />
//             </div>
//             <div class="col-lg-4">
//               <img
//                 src={typesFilter[1][1]}
//                 class="d-block w-100 h-50"
//                 alt="..."
//               />
//             </div>
//             <div class="col-lg-4">
//               <img
//                 src={typesFilter[2][1]}
//                 class="d-block w-100 h-50"
//                 alt="..."
//               />
//             </div>
//             <div class="col-lg-4">
//               <img
//                 src={typesFilter[3][1]}
//                 class="d-block w-100 h-50"
//                 alt="..."
//               />
//             </div>
//             <div class="col-lg-4">
//               <img
//                 src={typesFilter[4][1]}
//                 class="d-block w-100 h-50"
//                 alt="..."
//               />
//             </div>
//             <div class="col-lg-4">
//               <img
//                 src={typesFilter[5][1]}
//                 class="d-block w-100 h-50"
//                 alt="..."
//               />
//             </div>
//           </div>
//           <div class="carousel-item">
//             <div class="row">
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[6][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[7][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[8][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[9][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[10][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[11][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <div class="row">
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[12][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[13][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[14][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[15][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[16][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//               <div class="col-lg-4">
//                 <img
//                   src={typesFilter[17][1]}
//                   class="d-block w-100 h-50"
//                   alt="..."
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button
//         class="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="prev"
//       >
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//       </button>
//       <button
//         class="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="next"
//       >
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }

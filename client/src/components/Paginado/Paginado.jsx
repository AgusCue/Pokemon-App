import React from "react";

import "./Paginado.css";

export default function Paginado({ allpokemon, recipesPerPage, paginado }) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allpokemon / recipesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <div class="mt-5 ">
      <nav aria-label="Page navigation example" className="paginado">
        <ul class="pagination justify-content-center d-flex align-items-center">
          {pageNumber &&
            pageNumber.map((number) => (
              <li class="page-item" key={number}>
                <button class="page-link" onClick={() => paginado(number)}>
                  {number}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>

    // <nav className="paginado">
    //   <ul>
    //     {pageNumber &&
    //       pageNumber.map((number) => (
    //         <li className="paginado" key={number}>
    //           <a onClick={() => paginado(number)}>{number}</a>
    //         </li>
    //       ))}
    //   </ul>
    // </nav>
  );
}

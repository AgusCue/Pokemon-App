import axios from "axios";

export function getPokemon() {
  return async function (dispatch) {
    axios.get("http://localhost:3001/pokemons").then((json) => {
      return dispatch({
        type: "GET_POKEMON",
        payload: json.data,
      });
    });
  };
}

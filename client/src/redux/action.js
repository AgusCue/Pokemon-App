import axios from "axios";

export const getPokemon = () => {
  return async (dispatch) => {
    const url = "/pokemons";
    const info = await axios.get(url);
    return dispatch({
      type: "GET_POKEMON",
      payload: info.data,
    });
  };
};

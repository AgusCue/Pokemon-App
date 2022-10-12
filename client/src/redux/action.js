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

export const getName = (name) => {
  return async (dispatch) => {
    const url = "/pokemons?name=" + name;
    const info = await axios.get(url);
    return dispatch({
      type: "GET_NAME",
      payload: info.data,
    });
  };
};

export const getType = (type) => {
  return async (dispatch) => {
    const url = "/pokemons?type=" + type;
    const info = await axios.get(url);
    return dispatch({
      type: "GET_TYPE",
      payload: info.data,
    });
  };
};

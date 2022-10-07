const initialState = {
  pokemons: [],
  allPokemons: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMON":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;

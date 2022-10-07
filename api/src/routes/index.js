const { Router } = require("express");
const axios = require("axios");
const e = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  try {
    const apiURL = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const totalReq = await apiURL.data.results.map(async (el) => {
      const pokemon = await axios.get(el.url);
      const img = pokemon.data.sprites.versions;
      const imagenes = Object.entries(img)[4];
      const imagenes1 = Object.entries(imagenes)[1][1];
      const imagenes2 = Object.entries(imagenes1)[0][1].animated.front_default;

      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        img: imagenes2,
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
      };
    });
    const MainInfoPoke = await Promise.all(totalReq);
    return MainInfoPoke;
  } catch (error) {
    console.log(error);
  }
};

const allPokemons = getApiInfo();
console.log(allPokemons);

router.get("/pokemons", async (req, res) => {
  try {
    const allPokemons = await getApiInfo();
    res.status(200).send(allPokemons);
  } catch (error) {
    res.status(404).send("Error in /pokemon", error);
  }
});

module.exports = router;

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
        types: pokemon.data.types.map((e) => {
          return {
            name: e.type.name,
            img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
          };
        }),
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

router.get("/pokemons", async (req, res) => {
  const { name, type } = req.query;

  const allPokemons = await getApiInfo();
  console.log(type);

  if (name) {
    const filterName = await allPokemons.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(filterName, "filterName");
    filterName.length
      ? res.status(200).send(filterName)
      : res.status(400).send("No existe ese Pokemon");
  } else if (type) {
    const array = allPokemons.filter((poke) =>
      poke.types.find((t) => t.name === type)
    );

    console.log(array);

    array.length
      ? res.status(200).send(array)
      : res.status(400).send("No hay pokemones con ese Type");
  } else {
    res.status(200).send(allPokemons);
  }
});

module.exports = router;

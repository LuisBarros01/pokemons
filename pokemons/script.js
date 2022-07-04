const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`
const imgPoke = document.getElementById('pokemon')
const pokeInput = document.getElementById('poke-input')
const pokeBtn = document.getElementById('poke-btn')
const imgId = document.getElementById('id')
const idInput = document.getElementById('id-input')
const idBtn = document.getElementById('id-btn')

const getPokemon = async () => {
  try {
    const pokemon = pokeInput.value
    if (!pokemon) {
      alert(`Coloque um nome válido!`)
    } else {
      const URL_POKEMON = `${BASE_URL}${pokemon}`
      const data = await fetch(URL_POKEMON)
      const json = await data.json()

      return json.sprites.front_default
    }
  } catch (e) {
    console.log(e.message)
  }
}

const getId = async () => {
  try {
    const id = idInput.value
    if (!id) {
      alert(`Coloque um id válido!`)
    } else {
      const URL_ID = `${BASE_URL}${id}`
      const data = await fetch(URL_ID)
      const json = await data.json()

      return json.sprites.front_default
    }
  } catch (e) {
    console.log(e.message)
  }
}

const loadPokeImg = async () => {
  imgPoke.src = await getPokemon()
}

const loadIdImg = async () => {
  imgId.src = await getId()
}

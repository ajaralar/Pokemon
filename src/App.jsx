import { useState } from "react"
import { getRandomPokemon } from "./utils/getRandomPokemon"

function App() {
  const [pokemon, setPokemon] = useState({})
  const generatePokemon = async () => {
    const data = await getRandomPokemon()
    setPokemon(data)
  }

  return (
    <>
      <button onClick={generatePokemon}>Random Pokemon</button>
      {pokemon && <h1>{pokemon.name}</h1>}
    </>
  )
}

export default App

import { useState } from "react"
import { getRandomPokemon } from "./utils/getRandomPokemon"

function App() {
  // Initial pokemon state
  const [pokemon, setPokemon] = useState(null)

  // Generate random pokemon using API
  const generatePokemon = async () => {
    try {
      const randomPokemon = await getRandomPokemon()
      console.log(randomPokemon)
      setPokemon(randomPokemon)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button onClick={generatePokemon}>Random Pokemon</button>

      {/* If pokemon is "truthy, display" */}
      {pokemon && (
        <div>
          {/* Pokemon name */}
          <h1>{pokemon.name}</h1>

          {/* Pokemon types */}
          {pokemon.types.map((type, index) => (
            <h1 key={index}>{type.type.name}</h1>
          ))}
        </div>
      )}
    </>
  )
}

export default App

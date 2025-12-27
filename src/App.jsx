import { getRandomPokemon } from "./utils/getRandomPokemon"

function App() {
  return (
    <>
      <p>Hello</p>
      <button onClick={getRandomPokemon}>Random Pokemon</button>
    </>
  )
}

export default App

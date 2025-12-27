const POKEAPI_URL = import.meta.env.VITE_POKEAPI_URL

export const getRandomPokemon = async () => {
    const randomNum = Math.floor(Math.random() * 101)
    try {
        const response = await fetch(`${POKEAPI_URL}/pokemon/${randomNum}`)
        if (response.ok) {
            const json = response.json()
            console.log(json)
        }
    } catch (error) {
        console.log(error)
    }
}
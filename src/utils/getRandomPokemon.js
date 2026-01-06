// Import API URL from env file
const POKEAPI_URL = import.meta.env.VITE_POKEAPI_URL

export const getRandomPokemon = async () => {
    // Random number generator (0 to 100)
    const randomNum = Math.floor(Math.random() * 100) + 1

    try {
        // API endpoint
        const response = await fetch(`${POKEAPI_URL}/pokemon/${randomNum}`)
        if (!response.ok) {
            throw new Error(`getRandomPokemon response status: ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        console.error('getRandomPokemon error:', error)
        throw error
    }

}
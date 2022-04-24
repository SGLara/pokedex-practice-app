import { API_URL } from '../utils/Constants';

export async function getPokemons() {
    try {
        const url = `${API_URL}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetails(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
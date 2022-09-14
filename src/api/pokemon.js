import { API_HOST } from '../utils/contants';

export async function getPokemonApi(urlNext){
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(urlNext || url);
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}

export async function testApiFetch(){
    try {
        const response = await fetch(`${API_HOST}/pokemon?limit=20&offset=0`)
        const result = await response.json()
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

export async function getPokemonDetailsApi(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error
    }
}
import { POKEMON_TYPE_COLORS } from './contants'

const getColorByPokemonType = (type)=> POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByPokemonType;
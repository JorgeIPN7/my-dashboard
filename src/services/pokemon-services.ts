import { PokemonSimpleResult } from '@/pokemons/interfaces/pokemon-simple-result';

export const getPokemon = async (id: string): Promise<PokemonSimpleResult> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

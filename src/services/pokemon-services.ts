import { PokemonSimpleResult } from '@/pokemons/interfaces/pokemon-simple-result';
import { notFound } from 'next/navigation';

export const getPokemon = async (id: string): Promise<PokemonSimpleResult> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    notFound();
  }
};

import { PokemonGridCards } from '@/pokemons/components/PokemonGridCards';
import { PokemonSimpleResult } from '@/pokemons/interfaces/pokemon-simple-result';
import { PokemonsResponse } from '@/pokemons/interfaces/pokemons-response';

const fetchPokemons = async (
  limit: number = 10,
  offset: number = 0
): Promise<PokemonSimpleResult[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await response.json();

  const result: PokemonSimpleResult[] = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  return result;
};

export default async function PokemonsPage() {
  const pokemons = await fetchPokemons(69);

  return (
    <div>
      <h1 className="text-4xl">Title Page</h1>
      <PokemonGridCards pokemons={pokemons} />
    </div>
  );
}

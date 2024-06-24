import { PokemonGridCards } from '@/pokemons/components/PokemonGridCards';
import { PokemonSimpleResponse } from '@/pokemons/interfaces/pokemon-simple-response';
import { PokemonsResponse } from '@/pokemons/interfaces/pokemons-response';

const fetchPokemons = async (
  limit: number = 10,
  offset: number = 0
): Promise<PokemonSimpleResponse[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await response.json();

  const result = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));

  return result;
};

export default async function PokemonsPage() {
  const pokemons = await fetchPokemons(69);

  return (
    <div className="p-2">
      <h1 className="pb-6 text-4xl">Lista de pokémons</h1>
      <PokemonGridCards pokemons={pokemons} />
    </div>
  );
}

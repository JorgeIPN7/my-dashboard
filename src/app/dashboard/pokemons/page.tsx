import { PokemonSimpleResult } from "@/app/pokemons/interfaces/pokemon-simple-result";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import Image from "next/image";
import { resolve } from "path";

const fetchPokemons = async (
  limit: number = 10,
  offset: number = 0,
): Promise<PokemonSimpleResult[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data: PokemonsResponse = await response.json();

  const result: PokemonSimpleResult[] = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return result;
};

export default async function PokemonsPage() {
  const pokemons = await fetchPokemons(69);

  return (
    <div>
      <h1 className="text-4xl">Pokemons Page</h1>
      <div className="flex flex-wrap items-center justify-center gap-9">
        {pokemons.map((pokemon) => (
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            className="h-[100px] w-[100px] items-center rounded-full border-4 border-solid border-[#3761A9] bg-[#FECA1C] p-3"
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}

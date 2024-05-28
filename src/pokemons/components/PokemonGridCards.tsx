import { PokemonSimpleResult } from "../interfaces/pokemon-simple-result";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: PokemonSimpleResult[];
}

export const PokemonGridCards = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-9">
      <PokemonCard pokemon={pokemons[0]} />

      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

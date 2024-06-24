import { PokemonSimpleResponse } from '../interfaces/pokemon-simple-response';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemons: PokemonSimpleResponse[];
}

export const PokemonGridCards = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-9">
      <PokemonCard pokemon={pokemons[0]} />

      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

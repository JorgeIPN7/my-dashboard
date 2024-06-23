import { Metadata } from 'next';
import Image from 'next/image';
import { getPokemon } from '@/services/pokemon-services';

export interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: 'Descripción del pokémon'
  };
}

export default async function PokemonPage({ params }: Props) {
  const { id } = params;

  const pokemonData = await getPokemon(id);

  return (
    <div className="mt-5 flex flex-col items-center text-slate-800">
      <div className="relative mx-auto flex w-[700px] flex-col items-center rounded-[20px] bg-white bg-clip-border  p-3  shadow-lg">
        <div className="mb-8 mt-2 w-full">
          <h1 className="px-2 text-xl font-bold capitalize text-slate-700">
            #{pokemonData.id} {pokemonData.name}
          </h1>

          <div className="flex flex-col items-center justify-center">
            <Image
              src={pokemonData.sprites.other?.dream_world.front_default ?? ''}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemonData.name}`}
              className="mb-5 h-44 w-44"
            />

            <div className="flex flex-wrap">
              {pokemonData.moves.map(move => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 px-2">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-navy-700 flex text-base font-medium">
              {pokemonData.types.map(type => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-navy-700 flex text-base font-medium">
              {pokemonData.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemonData.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemonData.name}`}
              />

              <Image
                src={pokemonData.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemonData.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemonData.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemonData.name}`}
              />

              <Image
                src={pokemonData.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemonData.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

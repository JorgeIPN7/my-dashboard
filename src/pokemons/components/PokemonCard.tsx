import Link from "next/link";
import Image from "next/image";
import { PokemonSimpleResult } from "../interfaces/pokemon-simple-result";
import { IoHeart, IoHeartCircle, IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: PokemonSimpleResult;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="overflow-hidden rounded bg-white shadow-lg">
        <div className="border-b bg-[#273238] p-6 text-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            className="mx-auto h-24 w-24 items-center rounded-full border-4 border-solid border-[#3761A9] bg-[#FECA1C] p-3"
            width={32}
            height={32}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          <p className="text-sm text-gray-100"></p>
          <div className="mt-5">
            <a className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100">
              Ver información
            </a>
          </div>
        </div>
        <div className="border-b">
          <Link href="/" className="flex px-4 py-2 hover:bg-gray-100">
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                Agregar a favoritos
              </p>
              <p className="text-xs text-gray-500"></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

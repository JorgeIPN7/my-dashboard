"use client";
import { useState } from "react";

export const CarCounter = () => {
  const [counter, setCounter] = useState(0);

  function subtractCounter() {
    setCounter(counter - 1);
  }

  function addCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div className="col-span-2 mb-6">
        <h1 className="text-4xl text-white">Contador:</h1>
        <p className="p-2 text-center text-8xl text-white">{counter}</p>
      </div>

      <button
        className="mb-1 mr-1 w-72 rounded-full border-2 border-slate-100 bg-slate-700
         px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg
         focus:outline-none active:bg-teal-600"
        type="button"
        onClick={subtractCounter}
      >
        <i className="fas fa-heart"></i> -1
      </button>

      <button
        className="mb-1 mr-1 w-72 rounded-full border-2 border-slate-100 bg-slate-700
         px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg
         focus:outline-none active:bg-teal-600"
        type="button"
        onClick={addCounter}
      >
        <i className="fas fa-heart"></i> +1
      </button>
    </>
  );
};

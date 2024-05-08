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
        <p className="text-8xl text-white p-2 text-center">{counter}</p>
      </div>

      <button
        className="w-72 bg-slate-500 text-white active:bg-teal-600 font-bold uppercase text-sm
         px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
         border-2 border-slate-100"
        type="button"
        onClick={subtractCounter}
      >
        <i className="fas fa-heart"></i> -1
      </button>

      <button
        className="w-72 bg-slate-700 text-white active:bg-teal-600 font-bold uppercase text-sm
         px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
         border-2 border-slate-100"
        type="button"
        onClick={addCounter}
      >
        <i className="fas fa-heart"></i> +1
      </button>
    </>
  );
};

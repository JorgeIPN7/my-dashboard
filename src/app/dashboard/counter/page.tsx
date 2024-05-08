import { CarCounter } from "@/app/shopping-car/components/CarCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito de compras",
  description: "Creado por aburrimiento",
};

export default function CounterPage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 place-content-center justify-items-center w-full h-screen bg-cyan-700">
        <CarCounter />
      </div>
    </>
  );
}

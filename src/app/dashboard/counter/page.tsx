import { CarCounter } from "@/shopping-car/components/CarCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrito de compras",
  description: "Creado por aburrimiento",
};

export default function CounterPage() {
  return (
    <>
      <div className="grid h-screen w-full grid-cols-2 place-content-center justify-items-center gap-2 bg-cyan-700">
        <CarCounter />
      </div>
    </>
  );
}

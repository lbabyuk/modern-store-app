import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HeroCarousel } from "@/components";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center px-8 xl:px-0">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl capitalize ">
          Transform Your Home with Timeless Furniture
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Explore our curated collection of stylish and comfortable furniture.
          From modern designs to classic pieces, find the perfect fit for every
          room in your home.
        </p>

        <Button asChild size="lg" className="mt-10">
          <Link to="/products" className="capitalize">
            our products
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

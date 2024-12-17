import hero2 from "../assets/hero2.webp";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl capitalize">
              About us
            </h1>

            <p className="mt-8 max-w-xl leading-8 text-lg">
              At{" "}
              <Link
                to="/products"
                className="text-primary font-bold capitalize hover:underline hover:underline-offset-4"
              >
                Crafting, Comfort & Style
              </Link>
              , we believe that a home should be a reflection of your
              personality. With years of expertise in crafting premium-quality
              furniture, we bring you a blend of comfort, durability, and
              design. Our mission is to transform your living spaces into
              inspiring environments where memories are made. From contemporary
              to classic styles, every piece we create tells a story of
              craftsmanship, sustainability, and passion. Discover furniture
              that feels like home.
            </p>

            <Button asChild size="lg" className="mt-10">
              <Link to="/products" className="capitalize">
                Learn more about us
              </Link>
            </Button>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={hero2}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md p-2 shadow-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

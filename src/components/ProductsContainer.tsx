import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { LayoutGrid, List } from "lucide-react";

import { ProductsList, ProductsGrid } from "@/components";
import { type ProductResponse } from "@/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ProductsContainer() {
  const { meta } = useLoaderData() as ProductResponse;

  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <div>
      <section>
        <div className="flex justify-between items-center mt-8">
          <h4 className="font-medium text-md">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              size="icon"
              variant={layout === "grid" ? "default" : "ghost"}
              onClick={() => setLayout("grid")}
            >
              <LayoutGrid />
            </Button>
            <Button
              size="icon"
              variant={layout === "list" ? "default" : "ghost"}
              onClick={() => setLayout("list")}
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>

      {totalProducts === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, no products matched your search...
        </h5>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </div>
  );
}

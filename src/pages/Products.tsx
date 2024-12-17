import { Filters, ProductsContainer, PaginationContainer } from "@/components";

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

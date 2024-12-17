import { Form, useLoaderData, Link } from "react-router-dom";
import { type ProductsResponseWithParams } from "@/utils";

import { Button } from "./ui/button";
import { FormInput, FormSelect, FormRange, FormCheckbox } from "@/components";

export default function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="border rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center shadow-md">
      <FormInput
        type="search"
        label="search product"
        name="search"
        defaultValue={search}
      />
      <FormSelect
        label="select category"
        name="category"
        options={meta.categories}
        defaultValue={category}
      />

      <FormSelect
        label="select company"
        name="company"
        options={meta.companies}
        defaultValue={company}
      />

      <FormSelect
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
        defaultValue={order}
      />
      <FormRange label="price" name="price" defaultValue={price} />
      <FormCheckbox label="shipping" name="shipping" defaultValue={shipping} />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
}

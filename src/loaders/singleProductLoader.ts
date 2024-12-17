import { type LoaderFunction } from "react-router-dom";
import { customFetch, type SingleProductResponse } from "@/utils";

export const singleProductLoader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const response = await customFetch<SingleProductResponse>(
    `/products/${params.id}`
  );

  return { ...response.data };
};

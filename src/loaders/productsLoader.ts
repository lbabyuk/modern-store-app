import { LoaderFunction } from "react-router-dom";
import {
  customFetch,
  type ProductResponse,
  type ProductsResponseWithParams,
  PRODUCTS_URL,
} from "@/utils";

export const productsLoader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductResponse>(PRODUCTS_URL, { params });
  return { ...response.data, params };
};

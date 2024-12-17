import { LoaderFunction } from "react-router-dom";
import { customFetch, ProductResponse, FEATURE_PRODUCTS_URL } from "@/utils";

export const landingLoader: LoaderFunction =
  async (): Promise<ProductResponse> => {
    const response = await customFetch<ProductResponse>(FEATURE_PRODUCTS_URL);
    return { ...response.data };
  };

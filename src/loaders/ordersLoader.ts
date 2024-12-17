import { LoaderFunction, redirect } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { customFetch } from "@/utils";
import { ReduxStore } from "@/store";
import { type OrdersResponse } from "@/utils";

export const ordersLoader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to continue" });
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get<OrdersResponse>("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      });

      return { ...response.data };
    } catch (error) {
      console.log(error);
      toast({ description: "Failed to fetch orders" });
      return null;
    }
  };

import { ActionFunction, redirect } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { clearCart } from "../features/cart/cartSlice";
import { ReduxStore } from "@/store";

import {
  customFetch,
  formatAsDollars,
  type Checkout,
  errorMessageHandler,
} from "@/utils";

export const checkoutAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const address = formData.get("address") as string;
    const name = formData.get("name") as string;
    if (!name || !address) {
      toast({ description: "Please fill out all fields" });
      return null;
    }

    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please login to place an order" });
      return redirect("/login");
    }

    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast({ description: "order placed" });
      return redirect("/orders");
    } catch (error) {
      const errorMsg = errorMessageHandler(error, "Order Failed");
      toast({ description: errorMsg });
      return null;
    }
  };

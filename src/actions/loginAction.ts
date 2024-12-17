import { redirect, type ActionFunction } from "react-router-dom";
import { AxiosResponse } from "axios";

import { customFetch, errorMessageHandler } from "@/utils";
import { toast } from "@/hooks/use-toast";
import { type ReduxStore } from "@/store";
import { loginUser } from "@/features/user/userSlice";

export const loginAction =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response: AxiosResponse = await customFetch.post(
        "/auth/local",
        data
      );
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      store.dispatch(loginUser({ username, jwt }));
      return redirect("/");
    } catch (error) {
      const errorMsg = errorMessageHandler(error, "Login Failed");
      toast({ description: errorMsg });
      return null;
    }
  };

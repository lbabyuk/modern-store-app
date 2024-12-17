import { ActionFunction, redirect } from "react-router-dom";

import { customFetch, errorMessageHandler } from "@/utils";
import { toast } from "@/hooks/use-toast";

export const registerAction: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/local/register", data);
    toast({ description: "Registered" });
    return redirect("/login");
  } catch (error) {
    const errorMsg = errorMessageHandler(error, "Registration Failed");
    toast({ description: errorMsg });
    return null;
  }
};

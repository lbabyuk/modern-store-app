import { Form, Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubmitBtn, FormInput } from "@/components";
import { customFetch } from "@/utils";
import { toast } from "@/hooks/use-toast";

import { loginUser } from "@/features/user/userSlice";
import { useAppDispatch } from "@/hooks";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({ description: "Login Failed" });
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput type="email" label="email" name="identifier" autoFocus  />
            <FormInput type="password" name="password" />

            <SubmitBtn text="login" className="w-full mt-4 capitalize" />
            <Button
              type="button"
              variant="outline"
              onClick={loginAsGuestUser}
              className="w-full mt-4 capitalize"
            >
              guest user
            </Button>
            <p className="text-center mt-4">
              Not a member yet?
              <Button type="button" asChild variant="link">
                <Link to="/register" className="capitalize">register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

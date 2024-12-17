import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button } from "./ui/button";
import { logoutUser } from "@/features/user/userSlice";
import { clearCart } from "@/features/cart/cartSlice";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatCase } from "@/utils";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const user = useAppSelector((state) => state.userState.user);

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    toast({ description: "Logged Out" });
    navigate("/");
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            {user && user.username === "demo user" ? (
              <p className="text-xs sm:text-sm capitalize">{user.username}</p>
            ) : (
              <Avatar className="shadow-md">
                <AvatarFallback className="text-primary font-semibold">
                  {formatCase(user.username)}
                </AvatarFallback>
              </Avatar>
            )}
            <Button
              onClick={handleLogout}
              variant="link"
              className="capitalize"
            >
              logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <Button asChild variant="link" size="sm">
              <Link to="/login" className="capitalize">
                Sign in / Guest
              </Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register" className="capitalize">
                register
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

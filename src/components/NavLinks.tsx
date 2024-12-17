import { NavLink } from "react-router-dom";
import { links } from "@/utils";
import { useAppSelector } from "@/hooks";

export default function NavLinks() {
  const user = useAppSelector((state) => state.userState.user);
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        const restrictedRoutes =
          link.href === "checkout" || link.href === "orders";
        if (restrictedRoutes && !user) return null;
        return (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) => {
              return `capitalize font-normal tracking-wide ${
                isActive ? "text-primary" : ""
              }`;
            }}
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
}
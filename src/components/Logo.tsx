import { Link } from "react-router-dom";
import { Sofa } from "lucide-react";

export default function Logo() {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <Sofa className="w-8 h-8" />
    </Link>
  );
}

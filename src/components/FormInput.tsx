import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Search, ArrowBigUpDash } from "lucide-react";
import { useKeyLock } from "@/hooks/useKeyLocke";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  autoFocus?: boolean;
};

export default function FormInput({
  label,
  name,
  type,
  defaultValue,
  autoFocus,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const capsLock = useKeyLock("CapsLock");

  return (
    <div className="relative w-full mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        autoFocus={autoFocus}
        id={name}
        name={name}
        type={isPassword && showPassword ? "text" : type}
        defaultValue={defaultValue}
        className={`w-full pl-${
          capsLock || type === 'search' ? "10" : "4"
        } pr-10 outline-none border rounded`}
      />

      {type === "search" && (
        <div className="absolute left-3 top-1/2 bottom-1/2 transform -translate-y-1/2 text-gray-800">
          <Search className="h-5 w-5" />
        </div>
      )}
      {capsLock ? (
        <div
          className={`absolute ${type === "search" ? "right-3" : "left-3"} 
         top-1/2 bottom-1/2 transform -translate-y-1/2 text-gray-800`}
        >
          <ArrowBigUpDash className="h-5 w-5" />
        </div>
      ) : null}

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 bottom-1/2 transform -translate-y-1/2 text-gray-800"
        >
          {showPassword ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}

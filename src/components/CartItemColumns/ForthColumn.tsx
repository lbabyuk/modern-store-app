import { formatAsDollars } from "@/utils";

export default function ForthColumn({ price }: { price: string }) {
  return <p className="font-medium sm:ml-auto">{formatAsDollars(price)}</p>;
}

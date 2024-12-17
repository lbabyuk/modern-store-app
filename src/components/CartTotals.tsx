import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "@/components/ui/card";
import CartTotalRow from "./CartTotalRow";

export default function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );
  return (
    <Card className="p-8 bg-muted shadow-md">
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CardTitle className="mt-8">
        <CartTotalRow label="Order Total" amount={orderTotal} />
      </CardTitle>
    </Card>
  );
}

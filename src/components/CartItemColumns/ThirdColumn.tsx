import { useAppDispatch } from "@/hooks";
import { Button } from "../ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount from "../SelectProductAmount";
import { Mode } from "../SelectProductAmount";

export default function ThirdColumn({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) {
  const dispatch = useAppDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem(cartID));
  };
  const setAmount = (value: number) => {
    dispatch(editItem({ cartID, amount: value }));
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button variant="link" className="-ml-4 capitalize" onClick={removeItemFromTheCart}>
        remove
      </Button>
    </div>
  );
}

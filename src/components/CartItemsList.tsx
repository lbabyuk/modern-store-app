import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import ForthColumn from "./CartItemColumns/ForthColumn";
import FirstColumn from "./CartItemColumns/FirstColumn";
import SecondColumn from "./CartItemColumns/SecondColumn";
import ThirdColumn from "./CartItemColumns/ThirdColumn";

export default function CartItemsList() {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartID, title, price, image, amount, company, productColor } =
          cartItem;
        return (
          <Card
            key={cartID}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8 shadow-md shadow-gray-400"
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <ForthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}

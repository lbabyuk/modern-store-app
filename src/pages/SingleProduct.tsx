import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  formatAsDollars,
  type SingleProductResponse,
  type CartItem,
} from "@/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectProductColor, SelectProductAmount } from "@/components";
import { Mode } from "@/components/SelectProductAmount";
import { useAppDispatch } from "@/hooks";
import { addItem } from "@/features/cart/cartSlice";
import InnerImageZoom from "react-inner-image-zoom";

export default function SingleProduct() {
  const dispatch = useAppDispatch();
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { image, title, price, description, colors, company } =
    product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dollarsAmount = formatAsDollars(price);

  const cartProduct: CartItem = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem(cartProduct));
  };
  return (
    <section>
      <div className="flex gap-x-2 h-6 items-center">
        <Button asChild variant="link" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Separator orientation="vertical" />
        <Button asChild variant="link" size="sm">
          <Link to="/products">Products</Link>
        </Button>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div>
          <InnerImageZoom
            src={image}
            zoomSrc={image}
            className="w-96 h-auto object-cover rounded-lg lg:w-full transition-shadow duration-500 cursor-pointer shadow-md shadow-gray-400"
          />
        </div>

        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8">{description}</p>

          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />

          <SelectProductAmount
            amount={amount}
            setAmount={setAmount}
            mode={Mode.SingleProduct}
          />
          <Button size="lg" className="mt-10 capitalize" onClick={addToCart}>
            add to cart
          </Button>
        </div>
      </div>
    </section>
  );
}

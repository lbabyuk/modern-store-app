import { Form } from "react-router-dom";
import { SubmitBtn, FormInput } from "@/components";

export default function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl mb-4">Shipping Information</h4>
      <FormInput label="first name" name="name" type="text" autoFocus />
      <FormInput label="address" name="address" type="text" />
      <SubmitBtn text="place your order" className="mt-4 capitalize" />
    </Form>
  );
}

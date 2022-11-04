import { useEffect, useState } from "react";
import { useCartStore, CartItems } from "@/store/cart";

export const useCartItems = () => {
  const { items } = useCartStore((state) => state);
  const [cartItems, setCartItems] = useState<CartItems>({});
  const cartTotal = Object.values(cartItems).reduce((acc, items) => acc + items.price * items.quantity, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCartItems(items);
    }
  }, [items]);

  return { cartItems, cartTotal };
};
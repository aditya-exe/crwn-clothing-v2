import { ShopItemType } from "@/types/shop-item-type";
import create from 'zustand';
import { persist, devtools } from "zustand/middleware";

export type Item = ShopItemType & { quantity: number };
export type CartItems = { [key: number]: Item };
interface CartState {
  items: CartItems;
  // restoreCart: (cart: CartItems) => void;
  addToCart: (product: ShopItemType, quantity: number) => void;
  removeFromCart: (product: ShopItemType, quantity: number) => void;
  // restoreCart: (items: any) => void;
}

const storageItems: CartItems = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '{}') : {};

export const useCartStore = create<CartState>((set) => ({
  items: storageItems,
  // move actions to separate file
  addToCart: (product, quantity) => {
    set((state) => {
      const item: Item = { ...product, quantity };

      const updatedCart = {
        items: {
          ...state.items,
          [product.itemId]: {
            ...item,
            quantity: (state.items[product.itemId]?.quantity || 0) + quantity,
          },
        },
      };

      // persist cart to local storage
      localStorage.setItem('cart', JSON.stringify(updatedCart.items));

      return updatedCart;
    });
  },
  removeFromCart: (product, quantity) => {
    set((state) => {
      const item: Item = { ...product, quantity };


      if (state.items[item.itemId]?.quantity == 1) {
        const updatedCart = {
          items: {
            ...state.items,
          }
        }

        delete updatedCart.items[item.itemId];
        localStorage.setItem('cart', JSON.stringify(updatedCart.items));
        return updatedCart;
      }


      const updatedCart = {
        items: {
          ...state.items,
          [item.itemId]: {
            ...item,
            quantity: state.items[item.itemId]?.quantity! - 1,
          }
        }
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart.items));
      return updatedCart;
    })
  },
}));
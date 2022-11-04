import ShopItemType from "@/types/shop-item-type";
import create from 'zustand';

type Item = ShopItemType & { quantity: number };
export type CartItems = { [key: string]: Item };
interface CartState {
  items: CartItems;
  // restoreCart: (cart: CartItems) => void;
  addToCart: (product: ShopItemType, quantity: number) => void;
  removeFromCart: (product: ShopItemType, quantity: number) => void;
}

const storageItems: CartItems = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || '{}') : {};

export const useCartStore = create<CartState>((set) => ({
  items: {},
  // move actions to separate file
  addToCart: (product, quantity) => {
    set((state) => {
      const item: Item = { ...product, quantity };

      const updatedCart = {
        items: {
          ...state.items,
          [product.id]: {
            ...item,
            quantity: (state.items[product.id]?.quantity || 0) + quantity,
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


      if (state.items[item.id]?.quantity == 1) {
        const updatedCart = {
          items: {
            ...state.items,
          }
        }

        delete updatedCart.items[item.id];
        return updatedCart;
      }

      return {
        items: {
          ...state.items,
          [item.id]: {
            ...item,
            quantity: state.items[item.id]?.quantity!! - 1,
          }
        }
      }
    })
  }
}));
import TopNavigation from "@/components/top-navigation";
import { useCartItems } from "@/lib/hooks/useCartItems";
import { useCartStore } from "@/store/cart";
import ShopItemType from "@/types/shop-item-type";
import Head from "next/head";

const Cart = () => {
  const { cartItems, cartTotal } = useCartItems();
  const { addToCart, removeFromCart } = useCartStore((state) => state);

  const addItem = (item: ShopItemType) => {
    addToCart(item, 1);
  }

  const removeItem = (item: ShopItemType) => {
    removeFromCart(item, 1);
  }

  return (
    <>
      <Head>
        <title>Sign In | CRWN Clothing</title>
      </Head>

      <main className="h-full w-full items-center">
        <TopNavigation />
        <div className="flex mx-auto">TOTAL: {cartTotal}</div>
        <div className="bg-slate-500 flex flex-col p-4 rounded-xl shadow-2xl gap-2 shadow-purple-500 w-[500px] mx-auto mt-10">
          {Object.entries(cartItems).map(([id, item]) => (
            <div className="bg-red-900 grid grid-cols-4 gap-3 min-h-[100px] p-4 rounded-xl ml-2">
              <div className="h-[65px] w-[65px] rounded-lg overflow-hidden">
                <img src={item.imageUrl} className="object-fill" alt="" />
              </div>
              <div className="text-md bg-blue-900">
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>{item.quantity}</p>
              </div>
              <div>
                {item.price * item.quantity}
              </div>
              <div>
                <button onClick={() => addItem(item)}>
                  Plus
                </button>
                <button onClick={() => removeItem(item)}>
                  Minus
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

    </>
  )
}

export default Cart;

function removeFromCart(item: ShopItemType, arg1: number) {
  throw new Error("Function not implemented.");
}

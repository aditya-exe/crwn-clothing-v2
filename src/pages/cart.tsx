import TopNavigation from "@/components/top-navigation";
import { useCartItems } from "@/lib/hooks/useCartItems";
import { useCartStore } from "@/store/cartStore";
import { ShopItemType } from "@/types/shop-item-type";
import getStripe from "@/utils/get-stripejs";
import axios from "axios";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { HiMinus, HiPlus } from "react-icons/hi";


const Cart = () => {
  const { cartItems, cartTotal } = useCartItems();
  const { addToCart, removeFromCart } = useCartStore((state) => state);
  const { data: session } = useSession();
  const router = useRouter();

  const addItem = (item: ShopItemType) => {
    addToCart(item, 1);
  }

  const removeItem = (item: ShopItemType) => {
    removeFromCart(item, 1);
  }

  const handleCheckout = async () => {
    if (session) {
      const { data: { id } } = await axios.post("/api/checkout_sessions", {
        items: Object.entries(cartItems).map(([_, { price, quantity }]) => ({
          price, quantity
        }))
      });
      const stripe = await getStripe();
      await stripe?.redirectToCheckout({ sessionId: id });
    } else {
      alert("Please sign in first");
      router.push("signin");
    }
  }

  return (
    <>
      <Head>
        <title>Cart | CRWN Clothing</title>
      </Head>

      <main>
        <TopNavigation />
        <div className="h-screen w-full">
          <h1 className="text-purple-900 flex flex-col text-center font-bold text-5xl uppercase">Shopping Cart</h1>
          {/* <hr className="min-w-4xl" /> */}
          <div className="bg-resd-900 max-w-4xl flex flex-col text-center mx-auto  min-h-[510px] rounded-xl">
            {Object.values(cartItems).map(item => (
              <div key={item.itemId}>
                <div className="bg-gsreen-900 min-h-[150px] flex items-center  min-w-xl">
                  <div className="overflow-hidden h-[180px] w-[150px] mt-2 mb-2 ml-14 rounded-lg">
                    <img src={item.imageUrl} className="object-fill" alt="" />
                  </div>
                  <div className="text-black flex ml-2 justify-between w-[500px]">
                    <div className="flex flex-col justify-start">
                      <div className="flex space-x-1">
                        <span className="font-bold">{item.name}</span>
                        <span>- ${item.price}</span>
                      </div>
                    </div>
                    <div className="space-x-3 flex items-center">
                      <HiPlus onClick={() => addItem(item)} className="text-xl cursor-pointer" />
                      <p>
                        {item.quantity}
                      </p>
                      <HiMinus onClick={() => removeItem(item)} className="text-xl cursor-pointer" />
                    </div>
                  </div>
                </div>
                <hr className="font-extrabold" />
              </div>
            ))}
            <div className="mt-2 items-center space-x-2 flex justify-end text-black">
              <p className="font-bold ml-3">
                TOTAL:
                ${cartTotal}
              </p>
              <button onClick={() => handleCheckout()} className="bg-purple-600 text-white rounded-xl p-2">Checkout</button>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default Cart;
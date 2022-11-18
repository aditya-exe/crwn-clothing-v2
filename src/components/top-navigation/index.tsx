import { useCartItems } from "@/lib/hooks/useCartItems";
import { CartItems } from "@/store/cartStore";
import { trpc } from "@/utils/trpc";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import CartIcon from "../cart-icon";

const TopNavigation = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { cartItems }: { cartItems: CartItems } = useCartItems();
  // const persistCart = trpc.useMutation(["cart.add-cart"]);

  const handleSignIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("./signin");
  }

  const handleSignOut = (e: { preventDefault: () => void; }) => {
    // e.preventDefault();
    // const x = Object.values(cartItems);
    // if (Object.keys(x).length) {
    //   console.log("updating cart");
    //   persistCart.mutate(x);
    // }
    signOut();
  }

  return (
    <div className="flex min-w-full justify-between bg-purple-800 shadow-md rounded-b-xl items-center p-8">
      <div>
        <img onClick={() => router.push("/")} className="cursor-pointer bg-gray-300 rounded-full p-2" src="/favicon.ico" />
      </div>

      <div className="flex items-center">
        <button className="p-2" onClick={() => router.push("./shop")}>SHOP</button>
        <button className="p-2">CONTACT</button>
        {/* <button className="p-2">SIGN IN</button> */}
        {session ? (
          <button onClick={handleSignOut} className="p-2">SIGN OUT</button>
        ) : (
          <button onClick={handleSignIn} className="p-2">SIGN IN</button>
        )}
        <CartIcon />
      </div>
    </div>
  )
}

export default TopNavigation;
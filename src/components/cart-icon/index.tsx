import { useCartItems } from "@/lib/hooks/useCartItems";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  const router = useRouter();
  const { cartSize } = useCartItems();

  return (
    <Link href={"/cart"}>
      <div className="cursor-pointer items-center justify-content-center flex relative rounded-full ml-2 bg-gray-300">
        <img src="/shopping-bag.svg" className="h-[55px] p-4 object-contain" alt="cart-icon" />
        <p className="absolute left-[21px] text-[10px] translate-y-[2px] text-gray-900">{cartSize}</p>
      </div>
    </Link>
  )
};

export default CartIcon;
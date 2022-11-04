import { useRouter } from "next/router";

const CartIcon = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("./cart")} className="cursor-pointer items-center rounded-full ml-2 bg-gray-300">
      <img src="./shopping-bag.svg" className="h-[55px] p-4 object-contain " />
    </div>
  )
};

export default CartIcon;
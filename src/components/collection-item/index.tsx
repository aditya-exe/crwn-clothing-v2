import ShopItemType from "@/types/shop-item-type";
import { trpc } from "@/utils/trpc";
import { useSession } from "next-auth/react";

const CollectionItem = ({ coll }: { coll: string }) => {
  const collection = trpc.useQuery(["shop.get-four", { collection: coll }]);
  const cart = trpc.useQuery(["cart.get-all-items"]);
  const addToCart = trpc.useMutation(["cart.add-single-item"]);
  const { data: session } = useSession();


  if (collection.isLoading) {
    return <p>Loading</p>
  }

  const addItem = (item: ShopItemType) => {
    if (session?.user?.id) {
      addToCart.mutate({ id: item.id, userId: session.user.id });
      console.log(cart.data);
      return;
    }
    addToCart.mutate({ id: item.id });
  }

  return (
    <>
      <p className="text-4xl font-bold ml-[63px] uppercase p-2">{coll}</p>
      <div className="flex justify-around">
        {collection?.data?.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="border-solid items-center flex flex-col border-gray-900 border-2 rounded-2xl">
              <img className="object-fill rounded-xl" src={item.imageUrl} />
              <button onClick={() => addItem(item)}>ADD</button>
            </div>
            <div className="flex justify-between p-1">
              <p className="font-">{item.name}</p>
              <p className="">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CollectionItem;
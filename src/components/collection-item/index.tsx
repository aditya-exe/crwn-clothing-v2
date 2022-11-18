import { useCartStore } from "@/store/cartStore";
import ShopItemType from "@/types/shop-item-type";
import { trpc } from "@/utils/trpc";
import { useSession } from "next-auth/react";

const CollectionItem = ({ coll }: { coll: string }) => {
  const collection = trpc.useQuery(["shop.get-four", { routeName: coll }]);
  const { addToCart } = useCartStore((state) => state);



  if (collection.isLoading) {
    return <p>Loading</p>
  }

  const addItem = (item: ShopItemType) => {
    addToCart(item, 1);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-violet-500 font-bold text-5xl uppercase">{coll}</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {collection.data?.map((product: ShopItemType) => (
            <a key={product.id} className="group cursor-pointer" onClick={() => addItem(product)}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 border-purple-900 border-2">
                <img
                  src={product.imageUrl}
                  // alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="mt-4 text-sm text-gray-700">{product.name}</h2>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionItem;
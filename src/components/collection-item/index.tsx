import { useCartStore } from "@/store/cartStore";
import { ShopItemType } from "@/types/shop-item-type";
import { trpc } from "@/utils/trpc";
import Image from "next/future/image";

const CollectionItem = ({ coll }: { coll: string }) => {
  // const { addItem, removeItem } = useShoppingCart();
  const { addToCart } = useCartStore((state) => state);
  const collection = trpc.useQuery(["shop.get-four", { routeName: coll }]);
  const addItem = (item: ShopItemType) => {
    addToCart(item, 1);
  }

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-2 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {collection.data?.map((product: ShopItemType) => (
            <a key={product.itemId} className="group cursor-pointer bg-transparent" onClick={() => addItem(product)}>
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-transparent xl:aspect-w-7 xl:aspect-h-8 border-purple-900 border-2">
                <Image src={product.imageUrl} // alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  alt="item-image"
                  width={24}
                  height={24}
                  unoptimized={true}
                  loading={"lazy"}
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

function createSSGHelpers(arg0: { router: any; ctx: {}; transformer: any; }) {
  throw new Error("Function not implemented.");
}

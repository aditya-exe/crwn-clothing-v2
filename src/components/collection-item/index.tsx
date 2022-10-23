import { trpc } from "@/utils/trpc";

const CollectionItem = ({ coll }: { coll: string }) => {
  const collection = trpc.useQuery(["shop.get-four", { collection: coll }]);

  if (collection.isLoading) {
    return <p>Loading</p>
  }

  return (
    <>
      <p className="text-4xl font-bold ml-[63px] uppercase p-2">{coll}</p>
      <div className="flex justify-around">
        {collection?.data?.map((item) => (
          <div className="flex flex-col">
            <div className="border-solid items-center flex flex-col border-gray-900 border-2 rounded-2xl">
              <img className="object-fill rounded-xl" src={item.imageUrl} />
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
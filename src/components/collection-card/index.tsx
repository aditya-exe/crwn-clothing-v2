import Link from "next/link";

const CollectionCard = ({ collection, imageUrl }: { collection: string, imageUrl: string }) => {
  return (
    <Link href={{
      pathname: "/[collection]",
      query: {
        collection: collection,
      }
    }}>
      <div className="group   relative overflow-hidden w-[500px] h-[290px] rounded-xl cursor-pointer transition ease-in hover:text-purple-800">
        <img src={imageUrl} className="h-full w-full object-cover hover:blur-sm" alt="" />
        <p className="uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold text-violet-200">
          {collection}
        </p>
      </div>
    </Link >
  )
}

export default CollectionCard;
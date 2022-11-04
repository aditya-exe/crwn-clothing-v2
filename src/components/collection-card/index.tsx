import {useRouter} from "next/router";

const CollectionCard = ({collection, imageUrl}: { collection: string, imageUrl: string }) => {
  const router = useRouter();

  return (
    <div>
      <div onClick={() => router.push({pathname: "./[id]", query: {id: collection}})}
           className="group   relative overflow-hidden w-[500px] h-[290px] rounded-xl cursor-pointer transition ease-in">
        <img src={imageUrl} className="h-full w-full object-cover hover:blur-sm" alt=""/>
        <p className="uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold text-violet-200">
          {collection}
        </p>
      </div>
    </div>
  )
}

export default CollectionCard;
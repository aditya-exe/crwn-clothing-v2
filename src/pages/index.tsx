import type { NextPage } from "next";
import Head from "next/head";
import TopNavigation from "@/components/top-navigation";
import { useRouter } from "next/router";
import CollectionCard from "@/components/collection-card";
import SHOP_DATA from "@/server/router/routes/data";
import { trpc } from "@/utils/trpc";
// const rubik = Rubik();

const Home: NextPage = () => {
  // const x = SHOP_DATA[4]?.items;
  // const a = trpc.useMutation(["shop.fill"]);

  // const go = () => {
  //   if (x) {
  //     x.map(item => {
  //       a.mutate({
  //         id: item?.id,
  //         name: item?.name,
  //         imageUrl: item?.imageUrl,
  //         price: item?.price,
  //       })
  //     })
  //   }
  // }

  return (
    <>
      <Head>
        <title>CRWN Clothing</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopNavigation />
        <div className="mb-6" />
        <div className="flex flex-wrap justify-around">
          <CollectionCard collection={"mens"} imageUrl={"https://i.ibb.co/R70vBrQ/men.png"} />
          <CollectionCard collection={"womens"} imageUrl={"https://i.ibb.co/GCCdy8t/womens.png"} />
        </div>
        <div className="mt-5" />
        <div className="flex flex-wrap justify-around">
          <CollectionCard collection={"jackets"} imageUrl={"https://i.ibb.co/px2tCc3/jackets.png"} />
          <CollectionCard collection={"sneakers"} imageUrl={"https://i.ibb.co/0jqHpnp/sneakers.png"} />
          <CollectionCard collection={"hats"} imageUrl={"https://i.ibb.co/cvpntL1/hats.png"} />
        </div>

      </main>
    </>
  );
};

export default Home;
import Head from "next/head";
import TopNavigation from "@/components/top-navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "http://localhost:3000" });
  }

  return (
    <>
      <Head>
        <title>Sign In | CRWN Clothing</title>
      </Head>

      <main>
        <TopNavigation />
        <div className="flex">
          <div
            className="p-4 mt-[80px] flex mx-auto flex-col shadow-2xl shadow-purple-500 border-0 bg-violet-700 rounded-xl min-w-[400px]">
            <p className="text-xl font-bold tracking-tighter">Sign In using...</p>

            <div className="flex flex-col mt-4">
              <div onClick={() => handleSignIn("google")}
                className="flex justify-between border-2 bg-blue-600 rounded-xl p-2 hover:bg-blue-400 cursor-pointer transition ease-in">
                <img className="h-8 cursor-pointer" src="./google.svg" alt="" />
                <p className="font-bold mr-[140px] text-xl">Google</p>
              </div>
              <div onClick={() => handleSignIn("discord")}
                className="flex justify-between mt-3 border-2 bg-purple-600 rounded-xl p-2 hover:bg-purple-700 cursor-pointer transition ease-in">
                <img className="h-7 cursor-pointer" src="./discord.svg" alt="" />
                <p className="font-bold mr-[135px] text-xl">Discord</p>
              </div>
              <div onClick={() => handleSignIn("github")}
                className="flex justify-between mt-3 border-2 bg-green-600 rounded-xl p-2 hover:bg-green-500 transition ease-in cursor-pointer">
                <img className="h-8 cursor-pointer" src="./github.svg" alt="" />
                <p className="font-bold mr-[140px] text-xl">Github</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn;
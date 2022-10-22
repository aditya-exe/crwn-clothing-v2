import { NextPage } from "next";
import Head from "next/head";
import * as reactHookForm from "react-hook-form";
import TopNavigation from "@/components/top-navigation";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";


const SignIn: NextPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (session) {
        router.push("./");
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
                        className="p-4 flex mx-auto flex-col border-2 border-gray-400 rounded-xl bg-gray-200 min-w-[400px]">
                        <p className="text-xl font-bold tracking-tighter">Sign In using...</p>

                        <div className="flex flex-col mt-4">
                            <div onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" })} 
                                className="flex justify-between border-2 border-gray-600 rounded-xl p-2 hover:bg-blue-600 cursor-pointer transition ease-in">
                                <img className="h-8 cursor-pointer" src="./google.svg" alt="" />
                                <p className="font-bold mr-[140px] text-xl">Google</p>
                            </div>
                            <div onClick={() => signIn("discord", { callbackUrl: "http://localhost:3000" })} 
                                className="flex justify-between mt-3 border-2 border-gray-600 rounded-xl p-2 hover:bg-purple-700 cursor-pointer transition ease-in">
                                <img className="h-7 cursor-pointer" src="./discord.svg" alt="" />
                                <p className="font-bold mr-[135px] text-xl">Discord</p>
                            </div>
                            <div onClick={() => signIn("github", { callbackUrl: "http://localhost:3000" })} 
                                className="flex justify-between mt-3 border-2 border-gray-600 rounded-xl p-2 hover:bg-green-500 transition ease-in cursor-pointer">
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
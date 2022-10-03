import { NextPage } from "next";
import Head from "next/head";
import TopNavigation from "@/components/top-navigation";

const SignIn: NextPage = () => {


  return (
    <>
      <Head>
        <title>Sign In | CRWN Clothing</title>
      </Head>

      <main>
        <TopNavigation />
        <div className="flex justify-between">
          <div className="ml-80 p-4 flex flex-col">
            <p className="text-xl font-bold tracking-tighter">I already have an account</p>
            <p className="mt-2 text-md tracking-tighter">Sign In with your email and password</p>
          </div>
          <div className="p-4 flex flex-col mr-80">
            <p className="text-xl font-bold tracking-tighter">I do not have an account</p>
            <p className="mt-2 text-md tracking-tighter">Sign up with your email and password</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn;
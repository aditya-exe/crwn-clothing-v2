import { NextPage } from "next";
import Head from "next/head";
import { useForm, SubmitHandler } from "react-hook-form";
import TopNavigation from "@/components/top-navigation";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { Sign } from "crypto";

interface signInData {
  email: String;
  password: String;
};

interface signUpData {
  displayName: String;
  email: String;
  password: String;
  confirmPassword: String;
}

const SignIn: NextPage = () => {
  const { register: registerSignIn, handleSubmit: handleSubmitSignIn } = useForm<signInData>();
  const { register: registerSignUp, handleSubmit: handleSubmitSignUp } = useForm<signUpData>();
  const onSubmitSignIn = handleSubmitSignIn(data => console.log(data));
  const onSubmitSignUp = handleSubmitSignUp(data => console.log(data));

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
            <form className="flex flex-col items-start" onSubmit={onSubmitSignIn}>
              <input className="p-4 mt-12 ring-0" placeholder="Email" {...registerSignIn("email", { required: true })} />
              <input className="p-4 mt-8" type={"password"} placeholder="Password" {...registerSignIn("password", { required: true })} />
              <input className={"mt-8 cursor-pointer border-2 rounded-full p-3"} type="submit" />
            </form>
            <p className="text-lg mt-5">OR SIGN IN USING</p>
            <div className="flex mt-4">
              <img onClick={() => signIn("google")} className="h-8 cursor-pointer" src="./google.svg" alt="" />
              <img onClick={() => signIn("discord")} className="h-8 ml-4 cursor-pointer" src="./discord.svg" alt="" />
              <img onClick={() => signIn("github")} className="h-8 ml-4 cursor-pointer" src="./github.svg" alt="" />
            </div>
          </div>
          <div className="p-4 flex flex-col mr-[350px]">
            <p className="text-xl font-bold tracking-tighter">I do not have an account</p>
            <p className="mt-2 text-md tracking-tighter">Sign up with your email and password</p>
            <form className="flex flex-col items-start" onSubmit={onSubmitSignUp}>
              <input className="p-4 mt-12 ring-0" placeholder="Display Name" {...registerSignUp("displayName", { required: true })} />
              <input className="p-4 mt-8" placeholder="Email" {...registerSignUp("email", { required: true })} />
              <input className="p-4 mt-8" type={"password"} placeholder="Password" {...registerSignUp("password", { required: true })} />
              <input className="p-4 mt-8" type={"password"} placeholder="Confirm Password" {...registerSignUp("confirmPassword", { required: true })} />
              <input className={"mt-8 cursor-pointer border-2 rounded-full p-3"} type="submit" />
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn;
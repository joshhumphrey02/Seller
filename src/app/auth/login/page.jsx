"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GrClose } from "react-icons/gr";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const data = await Signin(email, password);
    // setIsLoading(false);
    // if (data?.err) {
    //   toast.error(data.err);
    // } else {
    //   toast.success(data.msg);
    //   return router.push("/");
    // }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className=" w-[30rem] p-2 rounded mx-auto seg_bg_primary shadow-2xl">
        <div className="mb-2 px-1 items-center flex justify-between">
          <h3>SIGN IN</h3>
          <GrClose onClick={() => router.push("/")} size={26} />
        </div>
        <form
          method="post"
          action={"/auth/login"}
          className="px-2 mt-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-3">
            <h2>Email address</h2>
            <div
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <h2>Password</h2>
            <div
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-center m-0">Sign in with google</p>
            <Button
              type="button"
              variant="success"
              size="sm"
              className="m-2 mx-auto w-fit px-2 py-1"
            >
              Google
            </Button>
          </div>
          <div className="px-3">
            <Button type="submit" className="mt-3 w-full">
              {isLoading ? "Loading..." : "Sign in"}
            </Button>
          </div>
          <p className="text-sm text-center mt-2">
            Dont have an account? <Link href="/auth/register">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;

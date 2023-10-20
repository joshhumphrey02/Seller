"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        setIsLoading(false);
        toast.success("Sign up successfull");
        router.push("/");
      } else {
        toast.error("Error occured");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className=" w-[30rem] p-2 rounded mx-auto bg_primary shadow-2xl">
        <div className="mb-2 px-1 items-center flex justify-between">
          <h3>SIGN UP</h3>
          <GrClose onClick={() => router.push("/")} size={26} />
        </div>
        <form
          method="post"
          action={"/auth/login"}
          ref={formRef}
          className="p-2 mt-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-3 border-2 border_color rounded px-1">
            <div className=" text-sm">Full Name</div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Fullname"
              className=" w-full"
              value={name}
              autoFocus
              required
            />
          </div>
          <div className="mb-3 border-2 border_color rounded px-1">
            <div className=" text-sm">Email address</div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              className="w-full"
              value={email}
              required
            />
          </div>
          <div className="mb-3 border-2 border_color rounded px-1">
            <div className=" text-sm">Password</div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className=" w-full"
              value={password}
              required
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-center m-0">Sign up with google</p>
            <Button
              type="button"
              variant="success"
              size="sm"
              className="m-2 mx-auto bg-green-500 w-fit px-2 py-1"
            >
              Google
            </Button>
          </div>
          <div className="px-3">
            <Button type="submit" className="mt-3 w-full bg-blue-500">
              {isLoading ? "Loading..." : "Sign up"}
            </Button>
          </div>
          <p className="text-sm text-center mt-2">
            Dont have an account? <Link href="/auth/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;

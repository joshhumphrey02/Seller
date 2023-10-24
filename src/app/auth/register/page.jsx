"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import "@/models/configs/firebase";
import { HandleRegister } from "@/models/auth/register";
import { GoogleRedirect, HandleGoogle } from "@/models/auth/google";

const Page = () => {
  const router = useRouter();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(()=> {
    GoogleRedirect(router);
  }, [router])

  return (
    <div className="flex md:items-center md:mt-0 mt-[10rem] justify-center w-full h-screen ">
      <div className=" md:w-[30rem] w-[18rem] h-fit pb-4 p-2 rounded mx-auto bg_primary shadow-2xl">
        <div className=" mb-2 px-1 items-center flex justify-between">
          <h3 className="md:text-2xl text-lg pl-2">SIGN UP</h3>
          <GrClose onClick={() => router.push("/")} size={26} />
        </div>
        <form
          method="post"
          action={"/auth/login"}
          ref={formRef}
          className="p-2 mt-1"
          onSubmit={(e) => HandleRegister(e, person, setIsLoading, router)}
        >
          <div className="mb-3 border-2 border_color rounded px-1">
            <div className=" text-sm">Full Name</div>
            <input
              type="text"
              onChange={(e) => setPerson({ ...person, name: e.target.value })}
              placeholder="Fullname"
              className=" w-full"
              value={person.name}
              autoFocus
              required
            />
          </div>
          <div className="mb-3 border-2 border_color rounded px-1">
            <div className=" text-sm">Email address</div>
            <input
              type="email"
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
              placeholder="name@gmail.com"
              className="w-full"
              value={person.email}
              required
            />
          </div>
          <div className="mb-3 border-2 border_color rounded px-1">
            <div className=" text-sm">Password</div>
            <input
              type="password"
              onChange={(e) =>
                setPerson({ ...person, password: e.target.value })
              }
              placeholder="Password"
              className=" w-full"
              value={person.password}
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
              <span onClick={HandleGoogle}>Google</span>
            </Button>
          </div>
          <div className="px-3">
            <Button
              type={isLoading ? "button" : "submit"}
              className="mt-3 w-full bg-blue-500"
            >
              {isLoading ? "Loading..." : "Sign up"}
            </Button>
          </div>
          <p className="text-sm text-center mt-2">
            Dont have an account?{" "}
            <Link href="/auth/login" className=" text-blue-500">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;

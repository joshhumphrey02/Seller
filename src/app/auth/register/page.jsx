"use client";
import { useState } from "react";
import Link from "next/link";
// import { Signup } from "@/models/sellers/Profile";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { GrClose } from "react-icons/gr";

const page = () => {
  const router = useRouter();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // const data = await Signup(email, password, name);
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className=" w-[30rem] p-2 rounded mx-auto seg_bg_primary shadow-2xl">
        <div className="mb-2 px-1 items-center flex justify-between">
          <h3>SIGN UP</h3>
          <GrClose onClick={() => router.push("/")} size={26} />
        </div>
        <form
          method="post"
          action={"/auth/login"}
          ref={formRef}
          className="px-2 mt-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-3">
            <div>Full Name</div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Fullname"
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <div>Email address</div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-3">
            <div>Password</div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-center m-0">Sign up with google</p>
            <button
              type="button"
              variant="success"
              size="sm"
              className="m-2 mx-auto w-fit px-2 py-1"
            >
              Google
            </button>
          </div>
          <div className="px-3">
            <button type="submit" className="mt-3 w-full">
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </div>
          <p className="text-sm text-center mt-2">
            Don't have an account? <Link href="/auth/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;

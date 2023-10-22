"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { GrClose } from "react-icons/gr";
import "@/models/configs/firebase_config";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

const Page = () => {
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState({
    email: "",
    password: "",
  });

  const handleGoogle = async () => {
    try {
      await signInWithRedirect(auth, provider);
      await getRedirectResult(auth);
    } catch (error) {
      return toast.error(error.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) return router.push("/");
    });
  }, [auth, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      let res = await signInWithEmailAndPassword(
        auth,
        person.email,
        person.password
      );
      if (res) {
        setIsLoading(false);
        toast.success("Sign in successfull");
        return router.push("/");
      }
    } catch (error) {
      setIsLoading(false);
      return toast.error(error.message);
    }
  };

  return (
    <div className="flex md:items-center md:mt-0 mt-[10rem] justify-center w-full h-screen ">
      <div className=" md:w-[30rem] w-[18rem] h-fit pb-4 p-2 rounded mx-auto bg_primary shadow-2xl">
        <div className=" mb-2 px-1 items-center flex justify-between">
          <h3>SIGN IN</h3>
          <GrClose onClick={() => router.push("/")} size={26} />
        </div>
        <form
          method="post"
          className="px-2 mt-1"
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="true"
        >
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
            <p className="text-sm text-center m-0">Sign in with google</p>
            <Button
              type="button"
              variant="success"
              size="sm"
              className="m-2 mx-auto bg-green-500 w-fit px-2 py-1"
            >
              <span onClick={handleGoogle}>Google</span>
            </Button>
          </div>
          <div className="px-3">
            <Button type="submit" className="mt-3 w-full bg-blue-500">
              {isLoading ? "Loading..." : "Sign up"}
            </Button>
          </div>
          <p className="text-sm text-center mt-2">
            Dont have an account?{" "}
            <Link href="/auth/register" className=" text-blue-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;

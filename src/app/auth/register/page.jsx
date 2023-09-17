"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Signup } from "@/models/sellers/Profile";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
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
    const data = await Signup(email, password, name);
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-800">
      <div className=" w-[30rem] p-2 rounded mx-auto seg_bg_primary shadow-2xl">
        <div className="mb-2 px-1 items-center flex justify-between">
          <h3>SIGN UP</h3>
          <GrClose onClick={() => router.push("/")} size={26} />
        </div>
        <Form
          method="post"
          action={"/auth/login"}
          ref={formRef}
          className="px-2 mt-1"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Fullname"
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@gmail.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </Form.Group>
          <div className="flex flex-col">
            <p className="text-sm text-center m-0">Sign up with google</p>
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
              {isLoading ? "Loading..." : "Sign up"}
            </Button>
          </div>
          <p className="text-sm text-center mt-2">
            Don't have an account? <Link href="/auth/login">Sign in</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default page;

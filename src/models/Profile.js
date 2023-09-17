"use client";
import { toast } from "react-toastify";

export const Signup = async (email, password, name, router) => {
  try {
    // const res = await fetch(`http://localhost:4000/sellers/signup`, {
    //   method: "post",
    //   headers: { "content-type": "application/json; charset=UTF-8" },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //     name: name,
    //   }),
    // });
    // const data = await res.json();
    // if (data.valid) {
    //   toast.success(msg);
    //   const verify = await fetch(
    //     `http://localhost:4000/sellers/emailVerification`
    //   );
    //   if (verify.valid) {
    //     toast.success(verify.msg);
    //     return router.push("/seller/auth/login");
    //   } else {
    //     return toast.warning("Please check email address");
    //   }
    // } else {
    //   return toast.error(data.err);
    // }
  } catch (err) {
    return toast.error(err.message);
  }
};
export const Signin = async (email, password, router) => {
  try {
    const res = await fetch(`http://localhost:4000/sellers/signin`, {
      method: "post",
      headers: { "content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await res.json();
    if (data.valid) {
      toast.success(data.msg);
      return router.push("/seller");
    }
    return toast.error(data?.err);
  } catch (err) {
    return toast.error(err.message);
  }
};

export const Logout = async () => {
  try {
    const res = await fetch(`http://localhost:4000/sellers/logout`);
    const data = await res.json();
    if (data.valid) {
      return;
    }
  } catch (err) {
    return;
  }
};

export const currentSeller = async (router) => {
  try {
    // const res = await fetch(`http://localhost:4000/sellers/currentUser`);
    // const data = await res.json();
    // if (data.valid) {
    let data = {};
    return data;
    // }
  } catch (error) {
    return console.error(err.message);
  }
};

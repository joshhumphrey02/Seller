import { toast } from "react-toastify";
import { auth } from "@/models/configs/firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export const HandleGoogle = async () => {
  try {
    signInWithRedirect(auth, provider);
  } catch (error) {
    return toast.error(error.message);
  }
};

export const GoogleRedirect = (router) => {
  getRedirectResult(auth).then((result) => {
    if (result?.user){
      toast.success("Sign in successfully");
      router.push("/")};
  }).catch(error=>{
    toast.error(error.message);
  })
};

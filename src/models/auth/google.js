import { toast } from "react-toastify";
import { auth } from "@/models/configs/firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";


export const HandleGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
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

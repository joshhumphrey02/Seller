import { toast } from "react-toastify";
import {auth} from "@/models/configs/firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";



export const HandleLogin = async (e, person, setIsLoading, router) => {
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

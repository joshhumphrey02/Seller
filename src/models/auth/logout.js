import { auth } from "@/models/configs/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'



export const Logout = (router) => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout !'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            toast.success("Logout successfully");
            router.push("/auth/login");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    })
  };
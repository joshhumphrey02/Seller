import "./firebase_config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserAuth = () => {
  const auth = getAuth();
  let user = auth.currentUser;
  const unsubscribe = onAuthStateChanged(
    auth,
    () => {
      user = auth.currentUser;
    },
    (error) => console.log(error)
  );

  return user;
};

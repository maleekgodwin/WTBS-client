import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { notify } from "../../components/alert";
import { getClient } from "../clients/getClient";

// import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export const signIn = async (payload) => {
  try {
    const res = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    localStorage.setItem("client", JSON.stringify(res?.user));
    const loggedInUserInfo = await getClient(res?.user?.uid);
    localStorage.setItem("user_client", JSON.stringify(loggedInUserInfo));
    loggedInUserInfo?.user_profile
      ? (window.location.href = `/session/${res?.user?.uid}`)
      : (window.location.href = `/profile/${res?.user?.uid}`);
  } catch (error) {
    // const errorMessage = error?.message;
    notify("error", "Invalid Credentials");
    return;
  }
};

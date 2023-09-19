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
    console.log(res.user.uid);
    await getClient(res.user.uid);
  } catch (error) {
    // const errorMessage = error?.message;
    notify("error", "Invalid Credentials");
    return;
  }
};

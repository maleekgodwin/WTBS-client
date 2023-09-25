import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { notify } from "../../components/alert";
import { createClient } from "../clients/createClient";

export const signUp = async (payload) => {
  let res;
  try {
    res = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.password
    );
    await createClient(res.user.uid, payload);
    notify("success", "Acccount created, proceeed to login");
    window.location.href = "/";
  } catch (error) {
    const errorMessage = error?.customData?._tokenResponse?.error?.message;
    notify("error", errorMessage);
    return;
  }
  return res.user.uid;
};

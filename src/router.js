import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Session from "./pages/session";
import Therapist from "./pages/therapist";
import TherapistProfile from "./pages/therapistProfile";
import Schedule from "./pages/schedule";
import ClientProfile from "./pages/clientProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/session/:id",
    element: <Session />,
  },
  {
    path: "/therapists",
    element: <Therapist />,
  },
  {
    path: "/therapists/:id",
    element: <TherapistProfile />,
  },
  {
    path: "/schedule/:id",
    element: <Schedule />,
  },
  {
    path: "/profile/:id",
    element: <ClientProfile />,
  },
]);

export { router };

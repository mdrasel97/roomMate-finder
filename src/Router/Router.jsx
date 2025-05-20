import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import AddToFindRooMate from "../pages/AddToFindRoomate";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import PrivateRoute from "../pages/Auth/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "addToFindRoommate",
        element: <AddToFindRooMate />,
      },
      {
        path: "browseListing",
        Component: BrowseListing,
      },
      {
        path: "myListing",
        Component: MyListing,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import BrowseListing from "../pages/BrowseListing";
import MyListing from "../pages/MyListing";
import PrivateRoute from "../pages/Auth/PrivateRoute";
import AddToFindRoomMate from "../pages/AddToFindRoomMate";
import RoommateDetails from "../pages/RoommateDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("http://localhost:3000/featured-roommates"),
      },
      {
        path: "browseListing",
        Component: BrowseListing,
        loader: () => fetch("http://localhost:3000/roommates"),
      },
      {
        path: "roommateDetails/:id",
        element: (
          <PrivateRoute>
            <RoommateDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/roommates/${params.id}`),
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
        element: (
          <PrivateRoute>
            <AddToFindRoomMate />
          </PrivateRoute>
        ),
      },
      {
        path: "myListing",
        Component: MyListing,
      },
    ],
  },
]);

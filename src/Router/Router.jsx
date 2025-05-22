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
import UpdateRoommate from "../pages/UpdateRoommate";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () =>
          fetch(
            "https://roommate-finder-server-mu.vercel.app/featured-roommates"
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "browseListing",
        Component: BrowseListing,
        loader: () =>
          fetch("https://roommate-finder-server-mu.vercel.app/roommates"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "roommateDetails/:id",
        element: (
          <PrivateRoute>
            <RoommateDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-mu.vercel.app/roommates/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
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
        element: (
          <PrivateRoute>
            <MyListing />
          </PrivateRoute>
        ),
      },
      {
        path: "updatedRoommate/:id",
        element: (
          <PrivateRoute>
            <UpdateRoommate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-mu.vercel.app/roommates/${params.id}`
          ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/new",
        element: <CreateUser />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "users/:id/edit",
        element: <EditUser />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
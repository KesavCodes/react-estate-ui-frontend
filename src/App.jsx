import { Layout, RequireAuth } from "./pages/layout/Layout.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ListPage } from "./pages/list/ListPage.jsx";
import DetailPage from "./pages/detailPage/DetailPage";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";
import Login from "./pages/login/Login.jsx";
import Signin from "./pages/register/Signin.jsx";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage.jsx";
import AddPostPage from "./pages/addPost/AddPostPage.jsx";
import {
  listDetailsLoader,
  listLoader,
  profilePostsLoader,
} from "./lib/loaders.js";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "list", element: <ListPage />, loader: listLoader },
        {
          path: "list/:id",
          element: <DetailPage />,
          loader: listDetailsLoader,
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Signin /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "profile",
          element: <ProfilePage />,
          loader: profilePostsLoader,
        },
        { path: "profile/update/:id", element: <ProfileUpdatePage /> },
        { path: "add", element: <AddPostPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

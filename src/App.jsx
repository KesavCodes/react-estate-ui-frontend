import Layout from "./pages/layout/Layout.jsx";
import HomePage from "./pages/homepage/HomePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ListPage } from "./pages/list/ListPage.jsx";
import DetailPage from "./pages/detailPage/DetailPage";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "list", element: <ListPage /> },
        { path: "list/:id", element: <DetailPage /> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

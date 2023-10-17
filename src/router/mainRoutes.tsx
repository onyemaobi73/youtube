import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/block/Layout";
import HomeScreen from "../pages/HomeScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);

export default router
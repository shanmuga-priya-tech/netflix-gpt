import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./browse/Browse";
import Login from "./Login";

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default Body;

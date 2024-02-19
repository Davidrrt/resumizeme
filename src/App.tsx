import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RoutesList from "./routes";

const router = createBrowserRouter(RoutesList);

const App = () => {
  return (
    <Suspense fallback="loading">
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;

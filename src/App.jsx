import { useRoutes } from "react-router-dom";

// Common Pages.
import HomePage from "./pages/home/HomePage";
import Backoffice from "./pages/backoffice/BackOffice";
import BOEmployees from "./pages/backoffice/BOEmployees/BOEmployees";

// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },

    {
      path: "/backoffice",
      element : <Backoffice></Backoffice>,
      children: [
        {
          path: "/backoffice/employees",
          element : <BOEmployees></BOEmployees>
        }
      ]
    },
    {
      path: "*",
      element : <div>404 NOT FOUND</div>
    },
  ]);

  return <>
    <div>
      {/* NAVIGATION */}
        <div>
            {routes}
        </div>
       {/* FOOTER */}
    </div>
  </>;

}

export default App;

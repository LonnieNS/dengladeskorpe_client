import { useRoutes } from "react-router-dom";

// Import Pages.
import HomePage from "./pages/home/HomePage";
import Backoffice from "./pages/backoffice/BackOffice";
import BOEmployees from "./pages/backoffice/BOEmployees/BOEmployees";
import EmployeesPage from "./pages/employees/EmployeesPage";
import ContactPage from "./pages/contact/ContactPage";
import BasketPage from "./pages/basket/BasketPage";

// App
const App = () => {

  // Routes
  const routes = useRoutes([
    {
      path: "/",
      element : <HomePage></HomePage>
    },
    {
      path: "/employees",
      element : <EmployeesPage></EmployeesPage>
    },
    {
      path: "/contact",
      element : <ContactPage></ContactPage>
    },
    {
      path: "/basket",
      element : <BasketPage></BasketPage>
    },

    {
      path: "/backoffice",
      element : <Backoffice></Backoffice>
    },

    {
      path: "/backoffice/employees",
      element : <BOEmployees></BOEmployees>
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

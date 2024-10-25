import { useRoutes } from "react-router-dom";

// Import Pages.
import HomePage from "./pages/home/HomePage";
import Backoffice from "./pages/backoffice/BackOffice";
import BOEmployees from "./pages/backoffice/BOEmployees/BOEmployees";
import EmployeesPage from "./pages/employees/EmployeesPage";
import ContactPage from "./pages/contact/ContactPage";
import BasketPage from "./pages/basket/BasketPage";
import DishPage from "./pages/dish/DishPage";
import FrontEndWrapper from "./pages/frontEndWrapper/frontEndWrapper";
import EditEmployee from "./components/backOfficeComponents/BoEmployees/EditEmployee/EditEmployee";
import SignInPage from "./pages/signin/SignInPage";

// App
const App = () => {

  // Routes
  const routes = useRoutes([
    {
      path: "/",
      element : <FrontEndWrapper></FrontEndWrapper>,
      children: [
        {
          path: "/",
          element : <HomePage></HomePage>
        },
        {
          path: "/dish/:id",
          element : <DishPage></DishPage>
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
      ]
    },

   
    {
      path: "/backoffice",
      element : <Backoffice></Backoffice>,
      children: [
        {
          path: "/backoffice/signin",
          element : <SignInPage></SignInPage>
        },
        {
          path: "/backoffice/employees",
          element : <BOEmployees></BOEmployees>
        },
        {
          path: "/backoffice/employees/edit/:id",
          element : <EditEmployee></EditEmployee>
        },
        
      ]
    },

    
  
    {
      path: "*",
      element : <div>404 NOT FOUND</div>
    },
  ]);


  return <>
    <div>
        <div>
            {routes}
        </div>
    </div>
  </>;

}

export default App;

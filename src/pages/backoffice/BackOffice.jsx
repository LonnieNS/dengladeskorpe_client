import { Outlet } from "react-router-dom";
import BoNav from "../../components/backOfficeComponents/BoNav/BoNav";

const Backoffice = () => {

    return (
        <div className="pageWrapper">
            <BoNav></BoNav>
            <Outlet />
        </div>
    );
};

export default Backoffice;
import { Outlet } from "react-router-dom";
import GlobalNav from "../../components/navigation/globalnav/globalnav";
import FooterComp from "../../components/footerComp/footerComp";

const FrontEndWrapper = () => {

    return(
        <>
        <GlobalNav></GlobalNav>
        <Outlet />
        <FooterComp></FooterComp>
        </>
    )
}

export default FrontEndWrapper;
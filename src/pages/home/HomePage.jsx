import { Outlet } from "react-router-dom";
import CategorySelection from "../../components/categorySelection/categorySelection";
import GridList from "../../components/gridList/gridList";
import BlurbComponent from "../../components/stylecomponents/blurbComponent/blurbComponent";
import PageHeader from "../../components/stylecomponents/PageHeader/PageHeader";

const HomePage = () => {

    //Indhold til komponenter, som const for at samle det redigerbare indhold et sted.

    //Pageheader indhold
    const subtitle='skorpe';

    //BlurbComponent
    const blurbHeading='Velkommen til Den Glade Skorpe!';
    const blurbParagraph ='Hos os handler det om den perfekte pizza med den sprødeste skorpe. Vi bruger kun de bedste råvarer til både klassiske favoritter og spændende specialiteter som "Parma Drama" og "Rabbit Royale". Uanset om du er til en lille, personlig pizza eller en stor familiedeling, så finder du det hos os. Kom forbi og nyd en pizza lavet med kærlighed, eller bestil den, hent den og nyd den derhjemme!';

    return (
        <div className="pageWrapper">
            <PageHeader subtitle={subtitle}></PageHeader>
            <BlurbComponent blurbHeading={blurbHeading} blurbParagraph={blurbParagraph}></BlurbComponent>
            <CategorySelection></CategorySelection>
            
        </div>
    );
};

export default HomePage;
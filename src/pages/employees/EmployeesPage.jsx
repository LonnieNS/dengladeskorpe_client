import EmployeesList from "../../components/employeesList/employeesList";
import BlurbComponent from "../../components/stylecomponents/blurbComponent/blurbComponent";
import PageHeader from "../../components/stylecomponents/PageHeader/PageHeader";

const EmployeesPage = () => {

        //Pageheader indhold
        const subtitle='skorpe';

        //BlurbComponent indhold
        const blurbHeading='Personalet hos Den Glade Skorpe!';
        const blurbParagraph ='Hos Den Glade Skorpe har vi et dedikeret og venligt personale, der altid går den ekstra mil for at sikre, at kunderne får den bedste oplevelse. Teamet består af erfarne pizzabagere, der med passion tilbereder lækre pizzaer med friske råvarer.';


    return (
        <div className="pageWrapper">
            <PageHeader subtitle={subtitle}></PageHeader>
            <BlurbComponent blurbHeading={blurbHeading} blurbParagraph={blurbParagraph}></BlurbComponent>
            <EmployeesList></EmployeesList>
        </div>
    );
};

export default EmployeesPage;
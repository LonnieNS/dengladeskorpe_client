import ContactForm from "../../components/contactForm/contactForm";
import BlurbComponent from "../../components/stylecomponents/blurbComponent/blurbComponent";
import PageHeader from "../../components/stylecomponents/PageHeader/PageHeader";

const ContactPage = () => {

     //Pageheader indhold
     const subtitle='skorpe';

     //BlurbComponent indhold
     const blurbHeading='Har du spørgsmål eller ønsker du at bestille din favoritpizza?';
     const blurbParagraph ='Udfyld formularen herunder, så vender vi hurtigt tilbage til dig. Vi glæder os til at høre fra dig!';

    return (
        <div>
            <PageHeader subtitle={subtitle}></PageHeader>
            <div className="responsiveFlex">
                <BlurbComponent blurbHeading={blurbHeading} blurbParagraph={blurbParagraph}></BlurbComponent>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactPage;
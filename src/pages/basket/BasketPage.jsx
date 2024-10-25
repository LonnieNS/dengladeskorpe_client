import BasketList from "../../components/basketList/basketList";
import PageHeader from "../../components/stylecomponents/PageHeader/PageHeader";

const BasketPage = () => {

    const subtitle='skorpe';

    return (
        <div>
            <PageHeader subtitle={subtitle}></PageHeader>

            <BasketList></BasketList>
        </div>
    );
};

export default BasketPage;
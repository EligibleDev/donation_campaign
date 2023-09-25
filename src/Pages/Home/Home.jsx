import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Campaigns from "../../Components/Campaigns/Campaigns";

const Home = () => {
    const data = useLoaderData();

    return (
        <>
            <Banner />
            <Campaigns data={data}/>
        </>
    );
};

export default Home;
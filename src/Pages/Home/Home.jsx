import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Campaigns from "../../Components/Campaigns/Campaigns";

const Home = () => {
    const data = useLoaderData();



    const handleSearch = (event) => {
        event.preventDefault();
        const searchInput = event.target.search;
        console.log(searchInput.value);

        searchInput.value = '';
    }



    return (
        <>
            <Banner handleSearch={handleSearch} />
            <Campaigns  data={data} />
        </>
    );
};

export default Home;
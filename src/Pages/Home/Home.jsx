import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Campaigns from "../../Components/Campaigns/Campaigns";
import { useState } from "react";

const Home = () => {
    const data = useLoaderData();
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (event) => {
        event.preventDefault();
        let search = event.target.search.value;
        setSearchInput(search);

        search = '';
    }

    return (
        <>
            <Banner handleSearch={handleSearch} />
            <Campaigns searchInput={searchInput} data={data} />
        </>
    );
};

export default Home;
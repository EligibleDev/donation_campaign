import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
    const [donation, setDonation] = useState([]);

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));

        if (donatedItems) {
            setDonation(donatedItems);
        }
    }, []);
    console.log(donation)

    const data = [
        ["Donation", "Donation Value"],
        ["Your Donation", donation?.length],
        ["Total Donation", 12]
    ];

    const options = {
        legend: 'bottom',
        colors: ['#00C49F', '#FF444A']
    };

    return (
        <>
            {<div className="-mt-8 bg-transparent">
                <Chart chartType="PieChart" data={data} width={"100%"} height={"800px"} options={options} />
            </div>}
        </>
    );
};

export default Statistics;
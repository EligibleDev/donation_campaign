import { useState, useEffect } from "react"
import DonatedBox from "../../Components/DonatedBox/DonatedBox";

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState('');
    const [show, setShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donations'));

        if (donatedItems) {
            setDonations(donatedItems);

            const total = donatedItems.reduce((previous, current) => parseInt(previous)
                + parseInt(current.price), 0);

            console.log(total)
            setTotalPrice(total);
        } else {
            setNotFound(`You Didn't Donated Yet`)
        }
    }, [])

    console.log(totalPrice);

    return (
        <>
            {notFound
                ? <p className="text-5xl flex justify-center items-center h-96 font-extrabold">{notFound}</p>
                : <>
                    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto py-8 px-6 xl:px-0 gap-6">
                        {show
                            ? donations.map(campaign => <DonatedBox campaign={campaign} key={campaign.id} />)
                            : donations.slice(0, 4).map(campaign => <DonatedBox campaign={campaign} key={campaign.id} />)
                        }
                    </div>

                    {donations.length > 4 && !show
                        ? <button style={{ background: `#ff444a` }} onClick={() => setShow(!show)}
                            className="mx-auto flex btn text-white border-none mb-8">
                            Show All</button>
                        : ''}
                </>
            }
        </>
    );
};

export default Donations;
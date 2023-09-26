import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const CampaignDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();


    const handleDonate = () => {
        const donatedArray = [];

        const donatedItems = JSON.parse(localStorage.getItem('donations'));

        if (!donatedItems) {
            donatedArray.push(currentCampaign);
            localStorage.setItem('donations', JSON.stringify(donatedArray));
            swal("Done", "Successfully Donated on this Campaign", "success");
        } else {
            const isExist = donatedItems.find(item => item.id === id);
            if (!isExist) {
                donatedArray.push(...donatedItems, currentCampaign);
                localStorage.setItem('donations', JSON.stringify(donatedArray))
                swal("Done", "Successfully Donated on this Campaign", "success");
            } else {
                swal("Error", "Already Donated on this Campaign", "error");
            }


        }

    }

    const currentCampaign = data.find(item => item.id === id);
    const { price, title, image, description, primaryColor, } = currentCampaign;

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 pb-12">
            <div className="w-full lg:h-[44rem] sm:h-96 h-56 rounded-xl relative " style={{
                backgroundImage: ` url('${image}')`,
                backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center center`
            }}>
                <div className="absolute bottom-0 left-0 right-0 bg-black rounded-b-xl opacity-70 w-full h-20 sm:h-32"></div>

                <button onClick={handleDonate} style={{ background: `${primaryColor}` }} className="btn border-none text-white rounded absolute bottom-4 sm:bottom-10 sm:left-10 left-4"
                >Donate ${price}</button>
            </div>

            <h1 className="text-4xl text-black font-extrabold py-8">{title}</h1>

            <p className="text-base font-normal">{description}</p>
        </div>
    );
};

export default CampaignDetails;
import CampaignBox from "./CampaignBox/CampaignBox";

/* eslint-disable react/prop-types */
const Campaigns = ({ data }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto px-6 xl:px-0 py-8 lg:py-24 gap-6">
            {data.map(campaign => <CampaignBox key={campaign.id} campaign={campaign} />)}
        </div>
    );
};

export default Campaigns;
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const CampaignBox = ({ campaign }) => {
    const { id, title, image, category, primaryColor, secondaryColor, tertiaryColor } = campaign;

    return (
        <div style={{ backgroundColor: `${tertiaryColor}` }} className="rounded-lg text-left">
            <img className="rounded-t-lg w-full" src={image} alt="" />
            <div className="p-4 flex flex-col gap-3">
                <p style={{backgroundColor: `${secondaryColor}`, color: `${primaryColor}`}}
                className="w-fit text-sm font-medium px-2 rounded-md py-0.5">{category}</p>
                <h3 style={{color: `${primaryColor}`}} className="text-xl font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default CampaignBox;
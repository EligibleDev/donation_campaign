/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const DonatedBox = ({ campaign }) => {
    const { price, id, title, image, category, primaryColor, secondaryColor, tertiaryColor } = campaign;


    return (
        <div style={{ backgroundColor: `${tertiaryColor}` }} className="flex text-left justify-start items-center rounded-md">
            <div style={{ backgroundImage: `url('${image}')`, backgroundPosition: `center center`, backgroundSize: `cover`, backgroundRepeat: `no-repeat` }} className="w-1/3 h-full rounded-l-md"></div>

            <div className="p-6 flex flex-col items-start justify-between gap-2">
                <p style={{ backgroundColor: `${secondaryColor}`, color: `${primaryColor}` }}
                    className="w-fit text-sm font-medium px-2 rounded-md py-0.5">{category}</p>

                <h3 className="text-xl sm:text-2xl font-semibold text-black">{title}</h3>

                <p style={{ color: `${primaryColor}` }} className="text-base font-semibold">${price}.00</p>

                <Link style={{backgroundColor: `${primaryColor}`}} className="btn text-white border-none" to={`/campaigns/${id}`}>View Details</Link>
            </div>
        </div>
    );
};

export default DonatedBox;
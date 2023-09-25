import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <NavLink className="text-base font-medium" to="/">Home</NavLink>
            <NavLink className="text-base font-medium" to="/donations">Donations</NavLink>
            <NavLink className="text-base font-medium" to="/statistics">Statistics</NavLink>
        </>
    );
};

export default Menu;
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/"><img className="sm:w-56 w-48 " src="../../../public/Logo.png" alt="" /></Link>
    );
};

export default Logo;
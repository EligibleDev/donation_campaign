import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
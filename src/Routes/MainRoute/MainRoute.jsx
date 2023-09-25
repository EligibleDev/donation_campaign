import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Donations from "../../Pages/Donations/Donations";
import Statistics from "../../Pages/Statistics/Statistics";
import CampaignDetails from "../../Pages/CampaignDetails/CampaignDetails";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('../../../public/data.json')
            },
            {
                path: "/donations",
                element: <Donations/>
            },
            {
                path: "/statistics",
                element: <Statistics/>
            },
            {
                path: "/campaigns/:id",
                element: <CampaignDetails/>,
                loader: () => fetch('../../../public/data.json')
            }
        ]
    }
])

export default MainRoute;
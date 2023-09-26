import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import Donations from "../../Pages/Donations/Donations";
import Statistics from "../../Pages/Statistics/Statistics";
import CampaignDetails from "../../Pages/CampaignDetails/CampaignDetails";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/donations",
                element: <Donations/>
            },
            {
                path: "/statistics",
                element: <Statistics/>,
            },
            {
                path: "/campaigns/:id",
                element: <CampaignDetails/>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default MainRoute;
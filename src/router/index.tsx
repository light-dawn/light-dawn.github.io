import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import App from "../pages/App";
import PaperPage from "../pages/PaperPage"
import RouterSample from "../pages/RouterSample";
import NotFound from "../pages/404";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: 'app', 
                element: <App></App>,
            },
            {
                index: true,
                element: <PaperPage></PaperPage>,
            },
            {
                path: 'paper', 
                element: <PaperPage></PaperPage>,
            },
            {
                path: 'router',
                element: <RouterSample></RouterSample>,
            }
        ],
        errorElement: <MainLayout><NotFound></NotFound></MainLayout>,
    },
])
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Navigation from "./components/Chapter12/Navigation.jsx";
import App from './App.jsx'
import Home from "./components/Chapter12/Home.jsx";
import FindWeather from "./components/Chapter12/FindWeather.jsx";
import CityWeather from "./components/Chapter12/CityWeather.jsx";
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigation />,
        children: [
            {
                path: "",
                element: <App />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "findweather",
                element: <FindWeather />,
            },
            {
                path: "cityweather/:city",
                element: <CityWeather />,
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <RouterProvider router={router} />
  //</StrictMode>,
)

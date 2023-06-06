import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Componenets/Main";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {

            }
        ]
    },
]);
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Componenets/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {

            }
        ]
    },
]);
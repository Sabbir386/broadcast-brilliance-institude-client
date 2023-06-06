import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Componenets/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../UserAuthenticate/Login";
import Registration from "../UserAuthenticate/Registration";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "login",
                element: <Login></Login>,

            },
            {
                path: "registration",
                element: <Registration></Registration>

            },

        ]
    },
]);
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Componenets/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../UserAuthenticate/Login";
import Registration from "../UserAuthenticate/Registration";
import Dashboard from "../Componenets/Dashboard/Dashboard";
import MySelectedClass from "../Componenets/StudentDashboard/MySelectedClass";
import MyEnrollMentClass from "../Componenets/StudentDashboard/MyEnrollMentClass";
import InstructorPage from "../Pages/InstructorsPage/InstructorPage";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import PrivateRoute from "./PrivateRoutes";
import ManageClasses from "../Componenets/AdminDashboard/ManageClasses";
import ManageUsers from "../Componenets/AdminDashboard/ManageUsers";
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
                path: "/login",
                element: <Login></Login>,

            },
            {
                path: "/registration",
                element: <Registration></Registration>

            },
            {
                path: "/instructorspage",
                element: <InstructorPage></InstructorPage>

            },
            {
                path: "/classespage",
                element: <ClassesPage></ClassesPage>

            },

        ]
    },
    {

        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myselectedclass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: '/dashboard/myenrolledclasses',
                element: <MyEnrollMentClass></MyEnrollMentClass>
            },
            {
                path: '/dashboard/manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: '/dashboard/manageusers',
                element: <ManageUsers></ManageUsers>
            },
        ]



    }
]);
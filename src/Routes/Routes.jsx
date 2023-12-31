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
import AddAClass from "../InstructorDashboard/AddAClass";
import MyClasses from "../InstructorDashboard/MyClasses";
import FeedbackClassByAdmin from "../Componenets/AdminDashboard/feedbackClassByAdmin";
import Payment from "../Componenets/StudentDashboard/Payment";
import PaymentHistory from "../Componenets/StudentDashboard/PaymentHistory";

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
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://broadcast-brilliance-institude-server-side.vercel.app/bookingClass/payment/${params.id}`)
            },
            {
                path: '/dashboard/paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: '/dashboard/manageClasses/:id',
                element: <FeedbackClassByAdmin></FeedbackClassByAdmin>,
                loader: ({ params }) => fetch(`https://broadcast-brilliance-institude-server-side.vercel.app/allClasses/feedback/${params.id}`)
            },
            {
                path: '/dashboard/manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path: '/dashboard/myclasses',
                element: <MyClasses></MyClasses>
            },
        ]



    }
]);
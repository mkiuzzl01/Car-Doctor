import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";
import CheckOut from "../components/CheckOut/CheckOut";
import Booking from "../components/Booking/Booking";

const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/Login',
            element:<Login></Login>
        },
        {
            path:'/Registration',
            element:<Registration></Registration>
        },
        {
            path:'/CheckOut/:id',
            loader:({params})=> fetch(`http://localhost:5000/Services/${params.id}`),
            element:<CheckOut></CheckOut>
        },
        {
            path:'/Booking',
            element:<Booking></Booking>
        }
    ]
}])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Login from "../components/Authentication/Login";
import Registration from "../components/Authentication/Registration";
import CheckOut from "../components/CheckOut/CheckOut";

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
            element:<CheckOut></CheckOut>
        }
    ]
}])

export default router;
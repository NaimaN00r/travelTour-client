import AddServices from "../Addservices/AddServices";
import Blog from "../Blog/Blog";
import EditProduct from "../EditProduct/EditProduct";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import MyReview from "../MyReview/MyReview";
import Home from "../Pages/Home/Home/Home";
import Servicesall from "../Pages/Servicesall/Servicesall";
import SignUp from "../SignUp/SignUp";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/servicessall',
                element:<Servicesall></Servicesall>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
              },
            {
                path:'/addservices',
                element:<AddServices></AddServices>
            },
            {
                path:'/servicedetails/:id',
                element:<ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`https://photo-mania-server.vercel.app/services/${params.id}`)
            },
            {
                path: "myreviews/reviews/edit/:id",
                element: <EditProduct />,
              },
              {
                path:'/blogs',
                element:<Blog></Blog>
            },
            
        ]

    }

  ]);

  export default router;
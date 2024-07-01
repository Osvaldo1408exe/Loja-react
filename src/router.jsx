import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import Layout from "./Pages/items/Layout";
import ListItems from "./Pages/items/ListItems";
 import ShowItem from "./Pages/items/ShowItem";
import About from "./Pages/About";
import Contact from "./Pages/items/Contact";
import Login from "./Pages/user/Login";
import Register from "./Pages/user/Register";
import Cart from "./Pages/Cart/Index";
 
const router = createBrowserRouter([
    {
        path:"/",
        element: <RouteLayout />,
        children:[
            {path: "carrinho", element: <Cart />},
            {path: "sobre", element: <About />},
            {path: "contato", element: <Contact />},
            {path: "entrar", element: <Login />},
            {path: "registrar", element: <Register />},
            


            {index: true, element: <Home/>},
           
            {
                path: "items",
                element: <Layout/>,
                children: [
                    {index:true, element: <ListItems/>},
                    {path: ":id", element: <ShowItem/>},
                ]  
            }

        ]
    }
])

export default router;
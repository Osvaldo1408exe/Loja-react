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
import Checkout from "./Pages/Cart/Checkout";
 
const router = createBrowserRouter([
    {
        path:"/",
        element: <RouteLayout />,
        children:[
            {index: true, element: <Home/>},

            {path: "carrinho", element: <Cart />},
            {path: "pagamento", element: <Checkout />},
            {path: "sobre", element: <About />},
            {path: "contato", element: <Contact />},
            {path: "entrar", element: <Login />},
            {path: "registrar", element: <Register />},
           
             
            {path: "items", element: <ListItems/>},
            {path: "items/:id", element: <ShowItem/>},
        
            

        ]
    }
])

export default router;
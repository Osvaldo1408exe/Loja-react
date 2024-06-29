import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import Layout from "./Pages/items/Layout";
import ListItems from "./Pages/items/ListItems";
import CreateItem from "./Pages/items/CreateItem";
import ShowItem from "./Pages/items/ShowItem";
import UpdateItem from "./Pages/items/UpdateItem";

const router = createBrowserRouter([
    {
        path:"/",
        element: <RouteLayout />,
        children:[
           {index: true, element: <Home/>},
           {
                path: "items",
                element: <Layout/>,
                children: [
                    {index:true, element: <ListItems/>},
                    {path: "new", element: <CreateItem/>},
                    {path: ":id", element: <ShowItem/>},
                    {path: ":id/update", element: <UpdateItem/>}


                ]    
           }

        ]
    }
])

export default router;
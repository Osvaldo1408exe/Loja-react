import {   Outlet  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Layout(){
 
    return (
      <main>
         
        <Outlet />
      </main>
    )
}
import { createBrowserRouter, redirect, } from "react-router-dom";
import App from "../App";
import home from '../views/home';
import test from "../views/test";
function redirctRoute() {
    redirect('/react-app/index')
}
export const router: any = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children:[
            {
                path:'/test',
                Component:test
            }
        ]
    },
    {
        path: '/index',
        index: true,
        Component: home
    },
    {
        path: '*',
        element: <div>404</div>
    }

])
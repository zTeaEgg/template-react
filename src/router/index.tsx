import App from "@/App";
import home from '@/views/home';
import test from "@/views/test";
import { createBrowserRouter } from "react-router-dom";

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
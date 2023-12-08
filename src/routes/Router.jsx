import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AddChocolate from "../pages/AddChocolate";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async() => fetch('http://localhost:5000/chocolates')
            },
            {
                path: '/addChocolate',
                element: <AddChocolate></AddChocolate>
            }
        ]
    }
])
import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/products",
                element: <h1>this is a products page</h1>
            }
        ]
    },
]);

export default router
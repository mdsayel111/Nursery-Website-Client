import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import AddProduct from "../pages/add-product/AddProduct";
import Cart from "../pages/cart/Cart";
import Error from "../pages/eoor/Error";
import Home from "../pages/home/Home";
import ManageProducts from "../pages/manage-products/ManageProducts";
import Payment from "../pages/payment/Payment";
import ProductDetails from "../pages/product-details/ProductDetails";
import Products from "../pages/products/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/manage-products",
                element: <ManageProducts />
            },
            {
                path: "/add-product",
                element: <AddProduct />
            },
            {
                path: "/payment",
                element: <Payment />
            },
        ]
    },
]);

export default router
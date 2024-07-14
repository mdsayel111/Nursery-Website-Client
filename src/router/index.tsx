import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/product-details/ProductDetails";
import Cart from "../pages/cart/Cart";
import ManageProducts from "../pages/manage-products/ManageProducts";
import AddProduct from "../pages/add-product/AddProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
        ]
    },
]);

export default router
import { Button } from "@mui/material";
import BasicTable from "../../components/manage-products/table/table";
import Title from "../../components/shared/title/Title";
import { primary, secondary } from "../../constants/color";
import { NavLink } from "react-router-dom";
import { useGetAllproductsQuery } from "../../lib/redux/apis/products-api";
import Loader from "../../components/shared/loader/Loader";
import { useEffect } from "react";
import { selectProducts, setProduct } from "../../lib/redux/slices/products-slice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";

const ManageProducts = () => {
    const products = useAppSelector(selectProducts)
    const dispatch = useAppDispatch()

    // get all products
    const { data, isLoading } = useGetAllproductsQuery(undefined)

    useEffect(() => {
        if (data) {
            dispatch(setProduct(data.data.data))
        }
    }, [data])

    // if isLoading === true
    if (isLoading) {
        return <div className="md:w-96 w-30 h-96 mx-auto">
            <Loader />
        </div>
    }
    return (
        <div className="mt-16">
            <Title name="Manage Products" />
            <div className="my-8 w-fit ml-auto">
                <NavLink to={"/add-product"}>
                    <Button sx={{
                        background: primary.main, color: "white", "&:hover": {
                            backgroundColor: secondary.main
                        }
                    }}>Add New Product</Button>
                </NavLink>
            </div>
            <div>
                <BasicTable data={products} />
            </div>
        </div>
    );
};

export default ManageProducts;
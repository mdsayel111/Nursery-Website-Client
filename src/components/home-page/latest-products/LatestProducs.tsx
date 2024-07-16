import { useEffect } from "react";
import { useLatestProductsQuery } from "../../../lib/redux/apis/products-api";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { selectLatestProducts, setLatestProduct } from "../../../lib/redux/slices/latest-product";
import { TProduct } from "../../../types";
import Loader from "../../shared/loader/Loader";
import ProductCard from "../../shared/product-card/ProductCard";
import Title from "../../shared/title/Title";


const LatestProducts = () => {
    const { isLoading, data } = useLatestProductsQuery(undefined)
    const disPatch = useAppDispatch()
    const latestProducts = useAppSelector(selectLatestProducts)


    useEffect(() => {
        if (data) {
            disPatch(setLatestProduct(data?.data?.data))
        }
    }, [data])

    // if isLoading === true
    if (isLoading) {
        return (<div className="md:w-96 w-30 h-96 mx-auto">
            <Loader />
        </div>)
    }


    return (
        <div className="mt-16">
            <Title name="Latest Products" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
                {latestProducts?.map((data: TProduct) => (<ProductCard {...data} key={data._id} />))}
            </div>
        </div>
    );
};

export default LatestProducts;
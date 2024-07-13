import { ReactNode } from "react";
import { useLatestProductsQuery } from "../../../lib/redux/apis/products-api";
import { TCart } from "../../../types";
import Loader from "../../shared/loader/Loader";
import ProductCard from "../../shared/product-card/ProductCard";
import Title from "../../shared/title/Title";


const LatestProducts = () => {
    const { isLoading, data } = useLatestProductsQuery(undefined)
    // create children for dinamicaly render loader or card
    let children: ReactNode;

    // if isLoading === true
    if (isLoading) {
        children = (<div className="w-96 h-96">
            <Loader />
        </div>)
    }
    // if loading false
    else {
        children = data?.data?.map((data: TCart) => (<ProductCard {...data} key={data._id} />))
    }

    return (
        <div className="mt-16">
            <Title name="Latest Products" />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 ">
                {children}
            </div>
        </div>
    );
};

export default LatestProducts;
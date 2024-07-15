import { useEffect, useState } from "react";
import { FaMoneyBillWave, FaTruck } from "react-icons/fa6";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import Loader from "../../components/shared/loader/Loader";
import QuantityManage from "../../components/shared/quantity-mange/QuantityManage";
import HalfRating from "../../components/shared/rating/Rating";
import Title from "../../components/shared/title/Title";
import { useGetSingleProductQuery } from "../../lib/redux/apis/products-api";
import { TProduct } from "../../types";
import "./product-details.css";
import Button from "../../components/shared/Button/Button";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { addToCart, selectCart } from "../../lib/redux/slices/cart-slice";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const { id } = useParams();

    // get data from server
    const { data, isLoading } = useGetSingleProductQuery(id as string);

    // get carts
    const carts = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    // State to manage image URLs
    const [currentImg, setCurrentImg] = useState<string | undefined>(undefined);

    const [newImgUrls, setNewImgUrls] = useState<string[]>([]);

    // order quantity
    const [orderQuantity, setOrderQuantity] = useState(1)

    // handle decrement order quantity
    const handleDecremantOrderQuantity = () => {
        if (orderQuantity > 1) {
            setOrderQuantity(orderQuantity - 1)
        }
    }

    // handle incriment order quantity
    const handleIncremantOrderQuantity = () => {
        if (orderQuantity <= quantity) {
            setOrderQuantity(orderQuantity + 1)
        }
    }

    useEffect(() => {
        if (data?.data) {
            const { imgUrl, imgList } = data.data;
            setNewImgUrls(imgList);
            setCurrentImg(imgUrl);
        }
    }, [data]);




    // if isLoading === true return loader
    if (isLoading) {
        return <div className="md:w-96 w-30 h-96 mx-auto"><Loader /></div>;
    }


    // handle add to cart
    const handleAddToCart = (e: MouseEvent) => {
        e.preventDefault()
        // get single cart from carts
        const singleCart = carts.find(item => item._id === data.data?._id)
        // if cart quantity + 1 > product quantity
        if (singleCart && singleCart.quantity + 1 > quantity) {

            return toast.error(`You can't add to cart more then ${quantity}!`)

        }
        // add to cart 
        dispatch(addToCart({ _id: data?.data?._id, quantity: orderQuantity, price }))
        return toast.success("Product added to cart!")
    }

    const { title, category, description, price, quantity, rating } = data?.data as TProduct;

    return (
        <div className="mt-16">
            <Title name="Product Details" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <img src={currentImg} alt="" className="bg-red-600 w-full h-80 rounded-lg" ></img>
                    </div>
                    <div className="flex w-fit mx-auto gap-4">
                        {newImgUrls.map((img, index) => (
                            <img key={index} src={img} className="rounded-lg bg-green-400 w-16 h-16 cursor-pointer"
                                onClick={() => {
                                    setCurrentImg(img);
                                    setNewImgUrls(
                                        [...newImgUrls.filter(singleImg => img !== singleImg), currentImg as string]
                                    )
                                }} />
                        ))}
                    </div>
                </div>
                <div className="border-[1px] border-gray-300 p-6 space-y-4">
                    <h2 className="text-3xl text-gray-500 font-light ">{title}</h2>
                    <p className="text-gray-400 text-xl">{description}</p>
                    <p className="text-gray-400 text-xl">category : {category}</p>
                    <HalfRating value={rating} />
                    <div className="flex gap-8 items-center">
                        <p className="text-6xl font-bold text-primary">${price}</p>
                        <div className="bg-red-500 p-8 rounded-full relative">
                            <span className="text-xl text-white absolute top-4 right-2">-20%</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-8 items-center">
                            <p className="font-semibold text-gray-400 text-lg">Qty</p>
                            <div className="flex items-center gap-4">
                                <QuantityManage handleDecremantOrderQuantity={handleDecremantOrderQuantity} handleIncremantOrderQuantity={handleIncremantOrderQuantity} orderQuantity={orderQuantity} productQuantity={quantity} />
                            </div>

                        </div>
                        <Button className="mt-8" onClick={handleAddToCart}>Add To Cart</Button>
                    </div>
                    <hr className="border-t-[1px] border-gray-400" />
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center gap-2">
                            <FaTruck className="text-primary text-6xl" />
                            <h5 className="text-gray-400 text-md text-center">
                                Free Shipping
                                Ships Today
                            </h5>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <IoArrowUndoSharp className="text-primary text-6xl" />
                            <h5 className="text-gray-400 text-md text-center">
                                Easy
                                Returns
                            </h5>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <FaMoneyBillWave className="text-primary text-6xl" />
                            <h5 className="text-gray-400 text-md text-center">
                                Free Shipping
                                Ships Today
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

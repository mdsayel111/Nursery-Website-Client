import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from "../../components/order/order-form/OrderForm";
import Button from "../../components/shared/Button/Button";
import Loader from "../../components/shared/loader/Loader";
import BasicModal from "../../components/shared/modal/Modal";
import ProductView from "../../components/shared/product-view/ProductView";
import Title from "../../components/shared/title/Title";
import { useGetProductsByIdsArrQuery } from "../../lib/redux/apis/products-api";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { selectCart } from "../../lib/redux/slices/cart-slice";
import { addOrder } from "../../lib/redux/slices/order-slice";
import { TOrder, TProduct } from "../../types";
import { handleDebounce } from "../../utils/handle-debounce";

const Cart = () => {
    // get all carts from local state
    const carts = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    // navigate hook
    const navigate = useNavigate()


    // create array all carts id for fetch product
    const productIds = carts.map(cart => cart._id)

    // get total price from carts
    const totalPriceFromCarts = carts.reduce((prevValue, currentCart) => prevValue += currentCart.price * currentCart.quantity, 0)

    // creat total price state
    const [totalPrice, setTotalPrice] = useState(totalPriceFromCarts)

    const { data, isLoading } = useGetProductsByIdsArrQuery(productIds)


    // modal state
    const [openForm, setOpenForm] = useState(false);

    // if isLoading is true 
    if (isLoading) {
        return <div className="md:w-96 w-30 h-96 mx-auto">
            <Loader />
        </div>
    }

    // modal open and close handler
    const handleOpenForm = () => setOpenForm(true);
    const handleCloseForm = () => setOpenForm(false);

    // form event handler
    const handleSubmit = handleDebounce(async (event: React.FormEvent<HTMLFormElement>) => {
        console.log(carts)
        // create product obj for creat product
        const orderObj: TOrder = {
            name: (event.target as any).name?.value,
            email: (event.target as any).email?.value,
            phone: (event.target as any).phone?.value,
            address: (event.target as any).adress?.value,
            cart: carts,
            totalPrice: totalPrice
        }
        // add order to local state
        dispatch(addOrder(orderObj))

        // close form
        handleCloseForm()

        // navigate to payment page
        navigate("/payment")
    })




    return (
        <div className="mt-16">

            <div>
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">

                    <div className="w-full lg:col-span-2">
                        <Title name="My Cart" />
                        {
                            // crate array of cart items UI
                            data?.data?.map((singleData: TProduct) =>
                                // create single cart item UI
                                <ProductView
                                    key={singleData._id}
                                    // call from cart page
                                    callFrom="cart"
                                    // data = product
                                    data={singleData}
                                    // quantity will be the quantity of a cart which _id === product._id, because that quantity is the quantity of this product 
                                    quantity={carts.find((cart) => cart._id === singleData._id)?.quantity}
                                    // setTotal price for update total price if product quantity changes in cart page
                                    setTotalPrice={setTotalPrice}
                                    className="flex-col lg:flex-row"
                                />)
                        }

                        {
                            data?.data?.length === 0 && <h1 className="text-secondary text-2xl text-center">Please Add product to cart</h1>
                        }
                    </div>

                    <div className="w-[100%] md:sticky md:top-8 mx-auto space-y-4 lg:mt-16 border-[1px] border-gray-400 h-fit p-6">
                        <div className="flex justify-between">
                            <h2 className="text-secondary text-lg">Shopping Cost</h2>
                            <span>${totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-secondary text-lg">Discount</h2>
                            <span>- $0</span>
                        </div>
                        <div className="flex justify-between">
                            <h2 className="text-secondary text-lg font-bold">Estimated Total</h2>
                            <span className="text-orange-500 font-bold text-lg">${totalPrice}</span>
                        </div>
                        <div className="w-fit mx-auto">
                            <Button disabled={carts.length <= 0} onClick={handleOpenForm}>Check Out</Button>
                        </div>
                    </div>
                </div>

                {/* modal for collect user info */}
                <BasicModal handleClose={handleCloseForm} handleOpen={handleOpenForm} open={openForm}>
                    <OrderForm handleSubmit={handleSubmit}
                        title="Create Order" />
                </BasicModal>
            </div>
        </div>
    );
};

export default Cart;
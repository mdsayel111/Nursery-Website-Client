import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaNfcDirectional } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import { useAddOrderMutation } from "../../lib/redux/apis/order-api";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { removeAllCart } from "../../lib/redux/slices/cart-slice";
import { selectOrder } from "../../lib/redux/slices/order-slice";
import { handleDebounce } from "../../utils/handle-debounce";
import "./payment.css";


const Payment = () => {
    // C.O.D payment method checked state
    const [isCheked, setIsCheked] = useState(false)

    // navigate hook
    const navigate = useNavigate()

    // add order mutation hook
    const [addOrder, res] = useAddOrderMutation()

    // const get orderObj
    const orderObj = useAppSelector(selectOrder)

    // handle order
    const handleOrder = handleDebounce(async () => {
        try {

            // cheked if payment method cheked or not
            if (!isCheked) {
                return toast.error("Please select a payment method")

            }
            // create product
            const res = await addOrder(orderObj);

            // show a toast
            if (res.data) {
                toast.success(res.data.message)
                dispatch(removeAllCart())

                // navigate to cart page
                navigate("/cart")
            } else {
                toast.error((res.error as any).data.message)
            }
        } catch (err) {
            if (err instanceof AxiosError && err.response?.data?.error?.code === 310) {
                toast.error("Img file is not valid! Please input valid file!")
            } else {
                toast.error("something went wrong!")
            }
        }
    })

    // get dispatch
    const dispatch = useAppDispatch()

    // handle before reload
    const handleBeforeUnload = (event: any) => {
        event.preventDefault();
        event.returnValue = true;
    };

    // handle page reload
    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            {/* modal for confirm order */}
            <div className="h-[70vh] w-fit mx-auto flex items-center">
                <div className="p-8 space-y-4">
                    <h4 className="text-secondary text-2xl mt-4">Please Select Payment Method</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <input
                                onClick={() => setIsCheked(!isCheked)}
                                checked={isCheked}
                                className="cursor-pointer custom-radio" type="radio" /> Cash On Delevery
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                disabled
                                className="cursor-pointer disabled:bg-gray-400 w-5 h-5" type="radio" />
                            Payment Online (not Available)
                        </div>
                        <Button onClick={handleOrder}>{res.isLoading ? <FaNfcDirectional className='text-xl animate-spin text-white' /> : "Confirm Order"}</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;
import React, { useState } from 'react';
import QuantityManage from '../quantity-mange/QuantityManage';
import { TProduct } from '../../../types';

// create product view type
type TProductView = {
    quantity?: number
    callFrom: "cart" | "search";
    data: TProduct
    className?: string
    setTotalPrice?: any
}

const ProductView = ({ callFrom, className, quantity: quantityFromCart, data, setTotalPrice }: TProductView) => {
    // create quantity state for manage quantity
    const [quantity, setQuantity] = useState(quantityFromCart)

    const [total, setTotal] = useState(quantity ? quantity * data.price : 0)

    // handle incriment quantity
    const handleIncrimentQuantity = () => {
        // incriment quantity
        setQuantity(quantity! <= data.quantity ? quantity! + 1 : quantity)

        // update tital price in parent total price state
        quantity! <= data.quantity && setTotalPrice((totalPrice: number) => totalPrice + ((((quantity! + 1) - quantityFromCart!)) * data.price))

        quantityFromCart = quantity

        quantity! <= data.quantity && setTotal((quantity! + 1) * data.price)


    }

    // handle incriment quantity
    const handleDecrementQuantity = () => {
        // incriment quantity
        setQuantity(quantity! > 0 ? quantity! - 1 : quantity)

        // update tital price in parent total price state
        quantity! > 0 && setTotalPrice((totalPrice: number) => totalPrice - (((quantityFromCart! - (quantity! - 1))) * data.price))

        quantityFromCart = quantity

        quantity! > 0 && setTotal((quantity! - 1) * data.price)
    }
    return (
        <div className={`${className} flex col-span-2 justify-between border-y-2 py-4 px-8 flex-col md:flex-row space-y-4`}>
            <div className='min-w-20 min-h-20 lg:w-32 lg:h-32'>
                <img className="" src={data.imgUrl} alt="" />
            </div>
            <div className="flex gap-2 lg:gap-8 items-center flex-row md:flex-col w-32">
                <p className="text-md text-secondary">Title</p><span className='md:hidden'>:</span>
                <span className="text-md text-gray-500">{data.title}</span>
            </div>
            <div className="flex gap-2 lg:gap-8 items-center flex-row md:flex-col w-32">
                <p className="text-md text-secondary">Price</p><span className='md:hidden'>:</span>
                <span className="text-xl text-orange-600">${data.price}</span>
            </div>
            <div className=" flex gap-2 lg:gap-8 items-center flex-row md:flex-col w-32">
                <p className="text-md text-secondary">Quantity</p><span className='md:hidden'>:</span>
                {callFrom === "cart" ?
                    // quantity manage UI
                    <QuantityManage
                        // decrement quantity
                        handleDecremantOrderQuantity={handleDecrementQuantity}
                        // incriment quantity
                        handleIncremantOrderQuantity={handleIncrimentQuantity}
                        // prop for display quantity in UI
                        orderQuantity={quantity || 0}
                        // prop fox max quantity
                        productQuantity={data.quantity}
                    />
                    : data.quantity}
            </div>
            {
                callFrom === "cart" ? <div className="flex gap-2 lg:gap-8 items-center flex-row md:flex-col ">
                    <p className="text-md text-secondary">Total</p><span className='md:hidden'>:</span>
                    <span className="text-xl text-primary-30">{total}</span>
                </div> : ""
            }
        </div>
    );
};

export default ProductView;
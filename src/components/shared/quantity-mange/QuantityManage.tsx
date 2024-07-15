// create quantity management type
type TQuantityManagement = {
    handleDecremantOrderQuantity: any;
    handleIncremantOrderQuantity: any;
    productQuantity: number;
    orderQuantity: number;
}

const QuantityManage = ({ handleDecremantOrderQuantity, handleIncremantOrderQuantity, orderQuantity, productQuantity }: TQuantityManagement) => {
    return (
        <div className="flex items-center gap-4">
            <button onClick={handleDecremantOrderQuantity} className="text-4xl hover:text-primary">-</button>
            <input readOnly value={orderQuantity} type="number" maxLength={productQuantity} max={productQuantity} className="border-primary border-2 outline-1 outline-primary box-border w-16 h-8 pl-[20px]" />
            <button onClick={handleIncremantOrderQuantity} className="text-3xl hover:text-primary">+</button>
        </div>
    );
};

export default QuantityManage;
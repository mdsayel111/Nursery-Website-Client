import toast from "react-hot-toast";
import ProductForm from "../../components/shared/product-form/ProdctForm";
import { uploadMultipleImg, uploadSingleImg } from "../../lib/imgBB";
import { useAddProductMutation } from "../../lib/redux/apis/products-api";
import { AxiosError } from "axios";


const AddProduct = () => {

    const [addproduct, res] = useAddProductMutation()

    // form event handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);

            // upload img to imgBB
            const imgUrl = await uploadSingleImg(data.get("img") as File)
            const imgList = await uploadMultipleImg(data.getAll("imgList") as File[])

            // create product obj for creat product
            const product = {
                title: data.get("title"),
                category: data.get("category"),
                description: data.get("description"),
                imgUrl,
                imgList,
                quantity: Number(data.get('quantity')),
                price: Number(data.get('price')),
                rating: Number(data.get('rating')),
            }

            // create product
            const res = await addproduct(product);

            // show a toast
            if (res.data) {
                toast.success(res.data.message)
            } else {
                toast.error((res.error as any).data.message)
            }
        } catch (err) {
            if (err instanceof AxiosError) {
                console.log(err)
                toast.error("Img file is not valid! Please input valid file!")
            }
        }
    };

    return (
        <div className="mt-16">
            {/* <Title name="Add Product" /> */}
            <ProductForm isLoading={res.isLoading} handleSubmit={handleSubmit} type="create" title="Add Product" />
        </div>
    );
};

export default AddProduct;
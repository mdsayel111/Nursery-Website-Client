import toast from "react-hot-toast";
import ProductForm from "../../components/shared/product-form/ProdctForm";
import { uploadMultipleImg, uploadSingleImg } from "../../lib/imgBB";
import { useAddProductMutation } from "../../lib/redux/apis/products-api";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { handleDebounce } from "../../utils/handle-debounce";


const AddProduct = () => {

    const [addproduct, res] = useAddProductMutation()

    // form event handler
    const handleSubmit = handleDebounce(async (event: React.FormEvent) => {
        try {
            const data = new FormData(event.target as HTMLFormElement);

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
                // event.target.reset()
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
    });

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
        <div className="mt-16">
            {/* <Title name="Add Product" /> */}
            <ProductForm isLoading={res.isLoading} handleSubmit={handleSubmit} type="create" title="Add Product" />
        </div>
    );
};

export default AddProduct;
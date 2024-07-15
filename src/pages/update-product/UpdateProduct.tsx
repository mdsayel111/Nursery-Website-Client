import { AxiosError } from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import BasicModal from "../../components/shared/modal/Modal";
import ProductForm from "../../components/shared/product-form/ProdctForm";
import { uploadMultipleImg, uploadSingleImg } from "../../lib/imgBB";
import { useUpdateProductMutation } from "../../lib/redux/apis/products-api";
import { TProduct } from "../../types";
import { handleDebounce } from "../../utils/handle-debounce";


const UpdateProduct = () => {
    const { id } = useParams()
    const [updateProduct, res] = useUpdateProductMutation()

    // modal state
    const [open, setOpen] = React.useState(false);

    // modal open and close handler
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // form event handler
    const handleSubmit = handleDebounce(async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);

            const imgFileName = (data.get("img") as File).name
            const imgListArr = (data.getAll("imgList") as File[])
            console.log(imgListArr)

            // upload img to imgBB
            const imgUrl = imgFileName && await uploadSingleImg(data.get("img") as File)
            const imgList = imgListArr[0].name && imgListArr.length > 0 && await uploadMultipleImg(data.getAll("imgList") as File[])

            // create product obj for update product
            const product: Partial<TProduct> = { _id: id }

            // create product obj for creat product
            const title = data.get("title")
            const category = data.get("category")
            const description = data.get("description")
            const quantity = Number(data.get('quantity'))
            const price = Number(data.get('price'))
            const rating = Number(data.get('rating'))

            // dainamically add product obj feild
            if (title) {
                product.title = title as string
            }
            if (description) {
                product.description = description as string
            }
            if (quantity) {
                product.quantity = quantity as number
            }
            if (price) {
                product.price = price as number
            }
            if (rating) {
                product.rating = rating as number
            }
            if (imgUrl) {
                product.imgUrl = imgUrl as string
            }
            if (imgList) {
                product.imgList = imgList as string[]
            }
            if (category) {
                product.category = category as string
            }


            // create product
            const res = await updateProduct(product);

            // show a toast
            if (res.data) {
                toast.success(res.data.message)
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


    return (
        <div>
            <BasicModal handleClose={handleClose} handleOpen={handleOpen} open={open}>
                <ProductForm isLoading={res.isLoading} handleSubmit={handleSubmit} title="Update product" type="update" />
            </BasicModal>
        </div>
    );
};

export default UpdateProduct;
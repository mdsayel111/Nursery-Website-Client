import React, { useState } from 'react';
import { TProduct } from '../../../types';
import BasicModal from '../modal/Modal';
import ProductForm from '../product-form/ProdctForm';
import { TableCell, TableRow } from '@mui/material';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { uploadMultipleImg, uploadSingleImg } from '../../../lib/imgBB';
import { useDeleteProductMutation, useUpdateProductMutation } from '../../../lib/redux/apis/products-api';
import { MdDelete, MdEditSquare } from 'react-icons/md';
import { removeProduct } from '../../../lib/redux/slices/products-slice';
import { useAppDispatch } from '../../../lib/redux/hooks';

const BasicTableRow = ({ data: singleData }: { data: TProduct }) => {
    const [updateProduct, res] = useUpdateProductMutation()

    // delete hook
    const [deleteProduct] = useDeleteProductMutation()

    const dispatch = useAppDispatch()

    // modal state
    const [open, setOpen] = React.useState(false);

    const [isUpdate, setIsUpdate] = useState(true)

    // modal open and close handler
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // handle delete product
    const handleDelete = async () => {
        // delete product from DB
        const res = await deleteProduct(singleData._id);

        if (res.data) {
            toast.success((res.data as any).message)
            // delete product from local state
            dispatch(removeProduct(singleData._id))

        }
        handleClose()
    }

    // form event handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
            const product: Partial<TProduct> = { _id: singleData._id }

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

            // close modal
            handleClose()
        } catch (err) {
            if (err instanceof AxiosError) {
                toast.error("Img file is not valid! Please input valid file!")
            }
        }
    };
    return (
        <TableRow
            key={singleData._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img src={singleData.imgUrl} alt="" />
            </TableCell>
            <TableCell align="left">{singleData.title}</TableCell>
            <TableCell align="left">{singleData.category}</TableCell>
            <TableCell align="left">{singleData.price}</TableCell>
            <TableCell align="left">{singleData.quantity}</TableCell>
            <TableCell align="left">{singleData.rating}</TableCell>
            <TableCell align="right" >
                <div className='space-x-2 w-fit ml-auto !flex flex-row h-full'>
                    <button onClick={() => { handleOpen(); setIsUpdate(true) }} className='bg-secondary text-white p-4 rounded-lg text-2xl'><MdEditSquare /></button>
                    <button onClick={() => { handleOpen(); setIsUpdate(false) }} className='bg-red-500 text-white p-4 rounded-lg text-2xl'><MdDelete /></button>
                </div>

            </TableCell>

            {/* modal for update and delete product */}
            <div>

                <BasicModal handleClose={handleClose} handleOpen={handleOpen} open={open}>
                    {
                        isUpdate ? <ProductForm isLoading={res.isLoading} handleSubmit={handleSubmit} title="Update product" type="update" /> :
                            <div className='p-8'>
                                <h2 className='text-secondary text-4xl mb-8'>Are you sure?</h2>
                                <div className='w-fit mx-auto space-x-4'>
                                    <button
                                        onClick={handleClose}
                                        className='text-xl bg-red-500 text-white py-2 px-4 rounded-lg'>No</button>
                                    <button
                                        onClick={handleDelete} className='text-xl bg-primary text-white py-2 px-4 rounded-lg'>Yes</button>
                                </div>
                            </div>
                    }
                </BasicModal>
            </div >
        </TableRow >
    );
};

export default BasicTableRow;
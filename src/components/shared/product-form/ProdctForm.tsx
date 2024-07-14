// form prop types
type TForm = {
    title: string;
    type: "update" | "create"
}

// react-hook-form types
export type TFormValue = {
    title: string;
    description: string;
    category: string
    price: string;
    quantity: string;
    img: any;
    imgList: any
    rating: number
}

import { Rating } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IoGiftSharp } from 'react-icons/io5';
import { primary, secondary } from '../../../constants/color';
import FileInput from '../file-input/FileInput';
import TextInput from '../text-input/TextInput';
import { uploadMultipleImg, uploadSingleImg } from '../../../lib/imgBB';
import { useAddProductMutation } from '../../../lib/redux/apis/products-api';
import toast from 'react-hot-toast';


export default function ProductForm({ title, type }: TForm) {
    const [value, setValue] = React.useState<number | null>(2);

    const [addproduct] = useAddProductMutation()

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
                // category: "fruit",
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
            console.log(err)
        }
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: primary.main }}>
                    <IoGiftSharp />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextInput name='title' type='text' required fullWidth label='Title' id='title' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextInput name='title' type='text' required fullWidth label='Title' id='title' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='flex justify-between gap-4 !flex-col lg:flex-row min-w-full'>
                            <FileInput multiple={false} name='img' title='Upload Image' />
                            <FileInput multiple={true} name='imgList' title='Upload Image List' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput name='description' type='text' required fullWidth label='Description' id='description' />
                        </Grid>
                        <Grid className='flex gap-2 flex-col md:flex-row' item xs={12}>
                            <TextInput fullWidth id='quantity' label='Quantity' name='quantity' required type='number' />
                            <TextInput fullWidth id='price' label='Price' name='price' required type='number' />
                        </Grid>
                    </Grid>
                    <Grid className='my-4'>
                        <h3 className='text-primary text-center'>Rating</h3>
                        <div className='w-fit mx-auto'>
                            <Rating
                                name="rating"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            bgcolor: primary.main, "&:hover ": {
                                backgroundColor: secondary.main
                            }
                        }}
                    >
                        Add Product
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

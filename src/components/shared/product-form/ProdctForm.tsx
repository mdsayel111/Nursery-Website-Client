import { Rating } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { IoGiftSharp } from 'react-icons/io5';
import { primary, secondary } from '../../../constants/color';
import FileInput from '../file-input/FileInput';
import TextInput from '../text-input/TextInput';
import { FaNfcDirectional } from 'react-icons/fa6';
import SelectBox from '../select-box/SelectBox';
import { category } from '../../../constants/filter-arr';

// form prop types
type TForm = {
    title: string;
    type: "update" | "create"
    handleSubmit: React.FormEventHandler;
    isLoading: boolean
}


export default function ProductForm({ title, type, isLoading, handleSubmit }: TForm) {
    const [value, setValue] = React.useState<number | null>(0);

    // create isOptional variable for optional feild
    const isOptional = type && type === "update" ? false : true

    // handle before reload
    const handleBeforeUnload = (event: any) => {
        event.preventDefault();
        event.returnValue = true;
    };

    // handle page reload
    React.useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    paddingBottom: 4,
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
                            <TextInput maxLength={15} name='title' type='text' required={isOptional} fullWidth label='Title' id='title' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SelectBox data={category} title='Category' name='category' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='flex justify-between gap-4 !flex-col lg:flex-row min-w-full'>
                            <FileInput multiple={false} name='img' title='Upload Image' />
                            <FileInput multiple={true} name='imgList' title='Upload Image List' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput name='description' type='text' required={isOptional} fullWidth label='Description' id='description' />
                        </Grid>
                        <Grid className='flex gap-2 flex-col md:flex-row' item xs={12}>
                            <TextInput fullWidth id='quantity' label='Quantity' name='quantity' required={isOptional} type='number' />
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
                                    event
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
                        {
                            isLoading ? <FaNfcDirectional className='text-xl animate-spin text-white' /> : title
                        }

                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

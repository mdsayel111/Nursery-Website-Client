import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FaNfcDirectional } from 'react-icons/fa6';
import { IoGiftSharp } from 'react-icons/io5';
import { primary, secondary } from '../../../constants/color';
import TextInput from '../../shared/text-input/TextInput';

// form prop types
type TForm = {
    title: string;
    handleSubmit: React.FormEventHandler;
    isLoading?: boolean
}


export default function OrderForm({ title, isLoading, handleSubmit }: TForm) {
    console.log(isLoading)
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
                        <Grid item xs={12}>
                            <TextInput name='name' type='text' required fullWidth label='Name' id='name' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput name='email' type='text' required fullWidth label='Email' id='email' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput name='phone' type='text' required fullWidth label='Phone' id='phone' />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput name='adress' type='text' required fullWidth label='Adress' id='adress' />
                        </Grid>
                    </Grid>
                    <Button
                        className='!mt-8'
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

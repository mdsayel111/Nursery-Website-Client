import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { TCart } from '../../../types';
import HalfRating from '../rating/Rating';

export default function ProductCard({ title, description, imgUrl, category, price, rating, quantity, _id }: TCart) {
  return (
    <NavLink to={`/products/${_id}`}>
      <Card sx={{ maxWidth: 345 }} className='cursor-pointer'>
        <div>
          <CardMedia
            sx={{ height: 120 }}
            image={imgUrl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <div className='flex justify-between items-center p-4'>
            <span className='text-xl text-orange-500'>${price}</span>
            <span>In Stock: {quantity}</span>
          </div>
          <div className='w-fit mx-auto'>
            <HalfRating value={rating} />
          </div>
        </div>
        <CardActions>
          <button className='py-2 px-4 font-bold bg-primary hover:bg-secondary mx-auto mt-4 w-full text-white'>Add To Cart</button>
        </CardActions>
      </Card>
    </NavLink>
  );
}

// <FaCartShopping className='text-2xl text-primary h-8 w-8' />

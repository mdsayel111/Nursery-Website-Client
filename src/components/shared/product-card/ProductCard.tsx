import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../lib/redux/hooks';
import { addToCart, selectCart } from '../../../lib/redux/slices/cart-slice';
import { TProduct } from '../../../types';
import Button from '../Button/Button';
import HalfRating from '../rating/Rating';
import toast from 'react-hot-toast';

export default function ProductCard({ title, description, imgUrl, price, rating, quantity, _id }: TProduct) {
  const dispatch = useAppDispatch()
  const carts = useAppSelector(selectCart)

  // handle add to cart
  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault()

    // get single cart from carts
    const singleCart = carts.find(item => item._id === _id)
    // if cart quantity + 1 > product quantity
    if (singleCart && singleCart.quantity + 1 > quantity) {

      return toast.error(`You can't add to cart more then ${quantity}!`)

    }
    // add to cart 
    dispatch(addToCart({ _id, quantity: 1, price }))
    return toast.success("Product added to cart!")


  }
  return (
    <NavLink to={`/products/${_id}`}>
      <Card sx={{ maxWidth: 350 }} className='cursor-pointer rounded-lg !pt-0'>
        <div>
          <CardMedia
            sx={{ minHeight: 200, maxHeight: 200 }}
            image={imgUrl}
            title="green iguana"
            className='rounded-t-lg'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.length > 20 ? description.slice(0, 20) + '... see more' : description}
            </Typography>
          </CardContent>
          <div className='flex justify-between items-center p-4'>
            <span className='text-xl text-orange-500'>${price}</span>
            <span>In Stock: {quantity}</span>
          </div>
          <div className='w-fit mx-auto'>
            <HalfRating value={rating}  />
          </div>
        </div>
        <CardActions>
          <Button onClick={handleAddToCart} className='w-full rounded-none'>Add To Cart</Button>
        </CardActions>
      </Card>
    </NavLink>
  );
}

// <FaCartShopping className='text-2xl text-primary h-8 w-8' />

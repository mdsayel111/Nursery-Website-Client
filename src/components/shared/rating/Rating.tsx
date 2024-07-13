import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating({value}: {value:number}) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={value} precision={0.5} readOnly />
    </Stack>
  );
}

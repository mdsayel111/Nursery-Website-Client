// create TProductCard type
export type TProduct = {
  _id: string;
  title: string,
  imgUrl: string;
  imgList: string[];
  description: string,
  quantity: number,
  price: number,
  rating: number,
  category: string
}

// create TCart type
export type TCart = {
  _id: string,
  quantity: number
}
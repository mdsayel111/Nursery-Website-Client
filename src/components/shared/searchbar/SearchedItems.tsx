import { MenuItem } from '@mui/material';
import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import { TProduct } from '../../../types';
import ProductView from '../product-view/ProductView';

// create search items type
type TSearchItems = { onClick: MouseEventHandler, anchorElUser: boolean, className?: string; data: TProduct[]; handleClose: Function }

const SearchedItems = ({ onClick, className, data, handleClose }: TSearchItems) => {
    return (
        <div className={`h-[100vh] overflow-scroll text-gray-400 bg-white min-w-64 top-[122px] right-0 ${className} block`}>
            {data && data?.map((item) => (
                <div className='w-full'>
                    <MenuItem sx={{ width: "100%" }} key={item._id} onClick={onClick}>

                        {/* create single product for searched item */}
                        <NavLink to={`/products/${item._id}`} className={"w-full"} onClick={handleClose as MouseEventHandler}>
                            <ProductView callFrom='search' data={item} className='w-full' />
                        </NavLink>
                    </MenuItem>
                </div>
            ))}
        </div>
    );
};

export default SearchedItems;
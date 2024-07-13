import { MenuItem, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';

const SearchedItems = ({ items, onClick, className }: { items: any[], onClick: MouseEventHandler, anchorElUser: boolean, className?: string }) => {
    return (
        <div className={`absolute text-gray-400 bg-white min-w-64 top-14 right-0 ${className}`}>
            {items.map((item) => (
                <MenuItem key={item} onClick={onClick}>
                    <Typography textAlign="center">{item}</Typography>
                </MenuItem>
            ))}
        </div>
    );
};

export default SearchedItems;
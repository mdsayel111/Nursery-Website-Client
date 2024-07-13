import { alpha, IconButton, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState } from 'react';
import { primary } from '../../../constants/color';
import SearchIcon from './SearchIcon';

// serarch styled component
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

// searchIconWraper styled component
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// StyledInputBase styled component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

// props type
interface TSearchbarProps {
    handleSearchDiv?: FocusEventHandler<HTMLDivElement>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    display?: Record<string, string>;
    setSearch: any;
}

const Searchbar = ({ handleSearchDiv, onClick, display, setSearch }: TSearchbarProps) => {
    const [value, setValue] = useState("")

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const valueFromField = e.target.value;
        setValue(valueFromField);
        setSearch(valueFromField); // Update the parent state if needed
    };
    return (
        <IconButton sx={{ p: 0, borderRadius: "5px", border: `2px solid`, borderColor: primary.main, display: display }} onClick={onClick}>
            {/* add medium device search bar */}
            <div>
                <Search onFocus={handleSearchDiv} onBlur={handleSearchDiv} onChange={handleOnChange}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        className='text-gray-500'
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </div>
        </IconButton>
    );
};

export default Searchbar;
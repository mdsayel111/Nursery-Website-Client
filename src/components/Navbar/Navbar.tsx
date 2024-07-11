import { alpha, Drawer, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FaSearchengin } from "react-icons/fa6";
import { RiMenu2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { primary, text } from '../../constants/color';

const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" }
] as const;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// union type of pages array
type TPages = typeof pages[number]['name'];

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

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<boolean>(false);
    const [active, setActive] = React.useState<TPages>("Home")

    // useRef for smaller device searchbar
    const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false)


    // handle smaller device searchbar 
    const handleSmallerDeviceSearchBar = () => {
        setIsSearchBarOpen(!isSearchBarOpen)
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log("click")
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: any) => {
        // if input element on focused anchorElUser will be true
        if (document.activeElement === event.target) {
            return setAnchorElUser(true);
        }
        event.stopPropagation()
        setAnchorElUser(!anchorElUser);
    };

    const handleCloseNavMenu = (page: TPages) => {
        setActive(page)
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(false);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavLink className='lg:order-1 order-2 sm:flex-grow lg:flex-grow-0 md:block hidden' to={"/"}>
                        <div className='cursor-pointer flex items-center gap-4'>
                            <img src="/logo.png" alt="LOGO" className='w-16 h-16' />
                            <h2 className='text-2xl font-bold text-black'>Tree <span className='text-primary'>Hub</span></h2>
                        </div>
                    </NavLink>

                    {/* smaller device nav icon */}
                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, order: { xs: 1 }, flexGrow: { xs: 1 } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <RiMenu2Fill className="text-gray-500" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                            }}
                        >
                            {/* add navbar for smaller device by loop */}
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={() => handleCloseNavMenu(page.name)}>
                                    <Typography textAlign="center" ><span className='text-gray-500'>{page.name}</span></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, justifyContent: "center", order: { md: 2 } }}>
                        {/* add navbar for larger device by loop */}
                        {pages.map((page) => (
                            <NavLink key={page.name} to={page.path}>
                                <Button
                                    onClick={() => handleCloseNavMenu(page.name)}
                                    sx={{ my: 2, color: `${page.name === active ? primary.main : text.gray}`, display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, order: 3, display: { xs: "hidden" } }}>
                        <Tooltip title="Open settings">
                            <IconButton className='border-white lg:border-primary' sx={{ p: 0, borderRadius: "5px", border: `2px solid`, borderColor: { xs: "white", md: primary.main } }} onClick={handleOpenUserMenu}>
                                {/* add medium device search bar */}
                                <div className='hidden md:block'>
                                    <Search onBlur={handleOpenUserMenu}>
                                        <SearchIconWrapper>
                                            <FaSearchengin className='text-primary' />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            className='text-gray-500'
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </Search>
                                </div>
                            </IconButton>
                        </Tooltip>

                        {/* add smaller device search bar */}
                        <div className='text-2xl cursor-pointer' onClick={handleSmallerDeviceSearchBar}>
                            <FaSearchengin className='text-primary md:hidden' />
                        </div>

                        {/* searchbar for smaller device */}
                        <Drawer
                        className='h-20'
                            anchor='top'
                            open={isSearchBarOpen}
                            onClose={handleSmallerDeviceSearchBar}
                        >
                            {/* {list(anchor)} */}
                            <h1>drawer</h1>
                        </Drawer>

                        <div className='absolute text-gray-400 bg-white min-w-64' style={{ display: `${anchorElUser ? "block" : "none"}` }}>
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;

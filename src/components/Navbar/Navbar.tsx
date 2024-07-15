import { Drawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import queryString from 'query-string';
import * as React from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useGetSearchProductsQuery } from '../../lib/redux/apis/products-api';
import Logo from '../logo/Logo';
import SearchIcon from '../shared/searchbar/SearchIcon';
import Searchbar from '../shared/searchbar/Searchbar';
import SearchedItems from '../shared/searchbar/SearchedItems';
import "./navbar.css";
import SelectBox from '../shared/select-box/SelectBox';
import { category, sort } from '../../constants/filter-arr';
import { MdCancel } from 'react-icons/md';

const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
    { name: "Manage Products", path: "/manage-products" },
] as const;

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<boolean>(false);
    // const [active, setActive] = React.useState<TPages>("Home")

    // filter state
    const [searchObj, setSearchObj] = React.useState<Record<string, string>>({})

    // create query string for search product based on searchObj
    const queryStr = queryString.stringify(searchObj)

    // get product by searchObj
    const { data } = useGetSearchProductsQuery(queryStr)

    // useRef for smaller device searchbar
    const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false)


    // handle smaller device searchbar 
    const handleSmallerDeviceSearchBar = () => {
        setIsSearchBarOpen(!isSearchBarOpen)
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
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

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(false);
    };

    // set filter in search obj
    const setSearchStr = (value: string) => {
        setSearchObj(prevSearchObj => ({ ...prevSearchObj, search: value }))
    }

    // set filter in search obj
    const setFilter = (value: string) => {
        setSearchObj(prevSearchObj => ({ ...prevSearchObj, filter: value }))
    }

    // set sort in search obj
    const setSort = (value: string) => {
        setSearchObj(prevSearchObj => ({ ...prevSearchObj, sort: value }))
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NavLink className='lg:order-1 order-2 sm:flex-grow lg:flex-grow-0 md:block hidden' to={"/"}>
                        {/* website logo with name */}
                        <Logo />
                    </NavLink>

                    {/* smaller device navbar */}
                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, order: { xs: 1 }, flexGrow: { xs: 1 } }}>
                        {/* smaller device nav icon */}
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

                        {/* smaller device nav links */}
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
                            {/* add nav links for smaller device by loop */}
                            {pages.map((page) => (
                                <NavLink key={page.name} to={page.path} className={({ isActive }) => isActive ? "active" : "navlink"
                                }>
                                    <MenuItem key={page.name} onClick={() => handleCloseNavMenu()}>
                                        <Typography textAlign="center" ><span>{page.name}</span></Typography>
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>

                    {/* larger device navbar */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, justifyContent: "center", order: { md: 2 } }}>
                        {/* add navbar for larger device by loop */}
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => handleCloseNavMenu()}
                                sx={{ my: 2, fontWeight: 700 }}
                            >
                                <NavLink className={({ isActive }) => isActive ? "active" : "navlink"
                                } key={page.name} to={page.path}>
                                    {page.name}
                                </NavLink>
                            </Button>
                        ))}
                    </Box>

                    {/* serach components */}
                    <Box sx={{ flexGrow: 0, order: 3, display: { xs: "hidden", position: "relative" } }}>
                        <div title="Open settings" className='flex justify-center items-center gap-2'>
                            {/* add search bar icon */}
                            <div className='text-2xl cursor-pointer ml-20 p-4 bg-primary-90 hover:bg-secondary rounded-full text-primary hover:text-white' onClick={handleSmallerDeviceSearchBar}>
                                <SearchIcon />
                            </div>

                            {/* searchbar */}
                            <Drawer
                                className='h-20'
                                anchor='top'
                                open={isSearchBarOpen}
                                onClose={handleSmallerDeviceSearchBar}
                                sx={{ overflow: "initial" }}
                            >
                                <div>
                                    <div className='w-fit ml-auto mb-8'>
                                        <button onClick={handleSmallerDeviceSearchBar} className='bg-red-600 text-white  p-2  rounded-full mr-4'><MdCancel /></button>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-2 w-[100vw] justify-between'>

                                        {/* search filter, sort options */}
                                        {/* search bar */}
                                        <Searchbar display={{ xs: "block", lg: "hiddden", flexGrow: "1" }} handleSearchDiv={handleOpenUserMenu} setSearch={setSearchStr} />

                                        {/* filter box */}
                                        <SelectBox id='filter' title='Filter' data={category} setSelectValue={setFilter} />

                                        {/* sort box */}
                                        <SelectBox id='sort' title='Sort' data={sort} setSelectValue={setSort} />
                                    </div>

                                    {/* searched items display div */}
                                    <SearchedItems handleClose={handleSmallerDeviceSearchBar} anchorElUser={anchorElUser} data={data?.data?.data} onClick={handleCloseUserMenu} className={`w-full`} />
                                </div>

                            </Drawer>
                        </div>

                        {/* searched items display div for larger device */}
                        {/* <SearchedItems onClick={handleCloseUserMenu} items={["products"]} anchorElUser={anchorElUser} className={`${anchorElUser ? "md:block hidden" : "hidden"}`} /> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { MdMenu } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import '../styles/style.css';
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const pages = ['DEMOS', 'HOME', 'POST', 'FEATURES', 'CATEGORIES', 'SHOP'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    return (
        <AppBar position="static" className='navbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <MdMenu style={{ margin: '0px 10px', fontSize: '30px', color: 'black' }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'grey',
                            textDecoration: 'none',
                        }}
                    >
                        THE AFFAIR
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'grey',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                className='grey'
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'grey', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button className='grey' sx={{ my: 2, color: 'grey', display: 'block' }}>BUY NOW
                            <span
                                style={{
                                    backgroundColor: 'black',
                                    borderRadius: '20px',
                                    padding: '3px 6px',
                                    margin: '0px 3px',
                                    color: 'white'
                                }}>$59</span>
                        </Button>

                        <Button className='grey' sx={{ my: 2, mx: 2, color: 'grey', display: 'block' }}>
                            <MdFacebook
                                style={{
                                    color: 'black',
                                    fontSize: '22px',
                                    margin: '0px 3px',
                                    marginBottom: '-5px',
                                }}
                            />
                            38
                        </Button>

                        <Button className='grey' sx={{ my: 2, mx: 2, color: 'grey', display: 'block' }}>
                            <BsTwitter
                                style={{
                                    color: 'black',
                                    fontSize: '22px',
                                    margin: '0px 3px',
                                    marginBottom: '-5px',
                                }}
                            />
                            71K
                        </Button>
                        <Button className='grey' sx={{ my: 2, mx: 2, color: 'grey', display: 'block' }}>
                            <BsInstagram
                                style={{
                                    color: 'black',
                                    fontSize: '22px',
                                    margin: '0px 3px',
                                    marginBottom: '-5px',
                                }}
                            />
                            46
                        </Button>
                        <MdOutlineShoppingBag className='cart-btn'
                            style={{
                                color: 'black',
                                fontSize: '22px',
                                margin: '17px 14px',
                                marginBottom: '-5px',
                                padding: '5px',
                                borderRadius: '50px',
                                backgroundColor: 'lightgrey'
                            }}
                        />
                        <BsSearch className='cart-btn'
                            style={{
                                color: 'black',
                                fontSize: '22px',
                                fontWeight: 'bold',
                                margin: '22px 35px',
                                marginRight: '0',
                            }}
                        />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;

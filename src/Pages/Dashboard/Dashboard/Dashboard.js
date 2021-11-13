import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonIcon from '@mui/icons-material/Person';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../../MyOrders/MyOrders';
import { MenuItem } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import DashboardReview from '../DashboardReview/DashboardReview';
import useAuth from '../../../hooks/useAuth/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Shared/Login/AdminRoute/AdminRoute';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Payment from '../Payment/Payment';
const drawerWidth = 240;
// dashboard all route here
const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box style={{ backgroundColor: '#0a1929', height: '164%' }}>
            <Typography sx={{ textAlign: 'center', my: 2, color: 'white' }} variant="h5">
                Dashboard
            </Typography>
            {/* <Toolbar /> */}
            <Divider sx={{ color: 'white' }} />
            <List>
                {!admin ? <Box>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/home">
                            Home
                        </NavLink>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}`}>My Orders</NavLink>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}/payment`}>Payment</NavLink>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ color: 'white' }}>
                            <ReviewsIcon />
                        </ListItemIcon>
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}/review`}>Review</NavLink>
                        <ListItemText />
                    </ListItem>
                </Box>
                    :
                    <Box>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <HomeIcon />
                            </ListItemIcon>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                                Home
                            </NavLink>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}/make admin`}>Make Admin</NavLink>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}/manage orders`}>Manage All Orders</NavLink>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <AddCircleIcon />
                            </ListItemIcon>
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}/add product`}>Add Product</NavLink>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ color: 'white' }}>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            <NavLink style={{ color: 'white', textDecoration: 'none' }} to={`${url}/manage products`}>Manage Products</NavLink>
                            <ListItemText />
                        </ListItem>
                    </Box>}
                <ListItem>
                    <MenuItem>
                        <ListItemIcon sx={{ color: 'red' }}>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <Button sx={{ color: 'red' }} onClick={logOut}>
                            Logout
                        </Button>
                    </MenuItem>
                </ListItem>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    color: '#0a1929',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ color: 'white' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <DashboardReview />
                    </Route>
                    <AdminRoute path={`${path}/make admin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <Route path={`${path}/manage orders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/add product`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/manage products`}>
                        <ManageProducts />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,

};

export default Dashboard;
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
import { Link } from 'react-router-dom';
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


const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Typography sx={{ textAlign: 'center', my: 2 }} variant="h5">
                <Link to="/home">
                    Home
                </Link>
            </Typography>
            {/* <Toolbar /> */}
            <Divider />
            <List>
                {!admin ? <Box>
                    <ListItem>
                        <ListItemIcon>
                            <ShoppingCartIcon />
                        </ListItemIcon>
                        <Link style={{ textDecoration: 'none' }} to={`${url}`}>My Orders</Link>
                        <ListItemText />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ReviewsIcon />
                        </ListItemIcon>
                        <Link to={`${url}/review`}>Review</Link>
                        <ListItemText />
                    </ListItem>
                </Box>
                    :
                    <Box>
                        <ListItem>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <Link to={`${url}/make admin`}>Make Admin</Link>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <Link to={`${url}/manage orders`}>Manage All Orders</Link>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <Link to={`${url}/add product`}>Add Product</Link>
                            <ListItemText />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <Link to={`${url}/manage products`}>Manage Products</Link>
                            <ListItemText />
                        </ListItem>
                    </Box>}
                <ListItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        <Button onClick={logOut}>
                            Logout
                        </Button>
                    </MenuItem>
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
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
                    <Typography variant="h6" noWrap component="div">
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
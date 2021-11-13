import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import useAuth from '../../../hooks/useAuth/useAuth';

const UserMenu = () => {
    const { user, logOut } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {user.email ? <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                            <Avatar sx={{ width: 42, height: 42 }}>
                                <img src={user?.photoURL} alt="" />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            backgroundColor: '#001e3c',
                            color: 'white',
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },

                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <Box sx={{ margin: 'auto' }}>
                        <MenuItem>
                            <img style={{ width: '50px', height: '50px', margin: 'auto', borderRadius: '50%' }} src={user?.photoURL} alt="" />
                        </MenuItem>
                        <MenuItem>
                            <Typography style={{ margin: 'auto' }} >{user?.displayName}</Typography>
                        </MenuItem>
                    </Box>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <PersonAdd sx={{ color: 'white' }} fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings sx={{ color: 'white' }} fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout sx={{ color: 'red' }} fontSize="small" />
                        </ListItemIcon>
                        <Button sx={{ color: 'red' }} onClick={logOut}>
                            Logout
                        </Button>
                    </MenuItem>
                </Menu>
            </React.Fragment>
                : <MenuItem>
                    <Avatar />
                </MenuItem>

            }
        </>
    );
};

export default UserMenu;
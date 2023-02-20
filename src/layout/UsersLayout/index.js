import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LoadingButton from '@material-ui/lab/LoadingButton';
import {CardContent} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from '../UsersLayout/index.module.css';

const UsersLayout = (props) => {
    const [open, setOpen] = React.useState(false);
    const [IsLoading, setIsLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const LoginClick = () => {
        setIsLoading(true);
    };

    const history = useHistory();

    const pages = [
        {page: 'Clubs', link: '/Clubs'},
        {page: 'Leagues/Cups', link: '/Leagues'},
        {page: 'News', link: '/News'},
        {page: 'History', link: '/History'},
        {page: 'Trophy Centre', link: '/TrophyCentre'}
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (link) => {
        setAnchorElNav(null);
        if (link) {
            history.push(link);
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <FontAwesomeIcon
                            icon={faTrophy}
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'}
                            }}
                        />
                        &nbsp;
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/SuperLeague/home"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'Century Gothic',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            SuperLeague
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={() => handleCloseNavMenu(null)}
                                sx={{
                                    display: {xs: 'block', md: 'none'}
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.page} onClick={() => handleCloseNavMenu(page.link)}>
                                        <Typography textAlign="center" href={page.link}>
                                            {page.page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/SuperLeague/home"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'Century Gothic',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            SuperLeague
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.page}
                                    onClick={() => history.push(page.link)}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Users">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem
                                    key={'login'}
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        handleClickOpen();
                                    }}
                                >
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="lg">{props.children}</Container>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogContent style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                    <Card variant="outlined" style={{width: '100%'}} className={styles.Decent}>
                        <CardHeader title="Login" sx={{textAlign: 'center', fontSize: 20}}></CardHeader>
                        <CardContent>
                            <Grid container direction="column" sx={{mt: 2}} spacing={2}>
                                <Grid item xs={12}>
                                    <TextField id="outlined-basic" placeholder="Email" variant="outlined" sx={{width: '100%'}} />
                                </Grid>
                                <Grid item xs={12}>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        sx={{width: '100%'}}
                                        placeholder="Password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <LoadingButton
                                        loading={IsLoading}
                                        loadingIndicator="Loading…"
                                        variant="contained"
                                        color="primary"
                                        style={{width: '100%'}}
                                        onClick={() => {
                                            LoginClick();
                                        }}
                                    >
                                        Login
                                    </LoadingButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default UsersLayout;

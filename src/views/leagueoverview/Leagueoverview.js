import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import {useHistory} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

function Leagueoverview() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory();

    function createData(pos, club, Pl, GS, Pts, logo) {
        return {pos, club, Pl, GS, Pts, logo};
    }

    const rows = [
        createData(
            1,
            'Arsenal',
            21,
            28,
            51,
            'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/640px-Arsenal_FC.svg.png'
        ),
        createData(
            2,
            'Manchester City',
            21,
            28,
            45,
            'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png'
        ),
        createData(
            3,
            'Manchester United',
            21,
            8,
            43,
            'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png'
        ),
        createData(4, 'Newcastle', 22, 22, 41, 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg'),
        createData(
            5,
            'Spurs',
            23,
            7,
            39,
            'https://cdne-totv8-prod.azureedge.net/media/40307/spurs-blue-compressed.png?anchor=center&mode=crop&quality=100&width=500'
        ),
        createData(
            6,
            'Brighton',
            21,
            11,
            35,
            'https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/640px-Brighton_%26_Hove_Albion_logo.svg.png'
        ),
        createData(7, 'Fulham', 23, 4, 35, 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg')
    ];

    return (
        <>
            <Card variant="outlined" sx={{mt: 1}}>
                <CardHeader title="League overview"></CardHeader>
                <CardContent>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} md={3} direction="column">
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Card>
                                        <CardContent>
                                            <Grid container direction="column" spacing={1} alignItems="center" justify="center">
                                                <Grid item>
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                        loading="lazy"
                                                        style={{width: '70px', height: '70px'}}
                                                        alt=""
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <b>Manchester United</b>
                                                </Grid>
                                                <Grid item>
                                                    <Chip label="Summer 2021" />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardContent>
                                            <List
                                                sx={{width: '100%', bgcolor: 'background.paper'}}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                                subheader={
                                                    <ListSubheader component="div" id="nested-list-subheader">
                                                        Next fixtures
                                                    </ListSubheader>
                                                }
                                            >
                                                <ListItemButton
                                                    onClick={
                                                        //navigate('/session-timed-out');
                                                        () => history.push('/matchday/1')
                                                    }
                                                >
                                                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                                                        <Grid
                                                            item
                                                            xs={5}
                                                            direction="column"
                                                            style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}
                                                        >
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <Stack>
                                                                <p style={{textAlign: 'center', fontSize: 13}}>
                                                                    v/s <br />
                                                                    <span>12.02.2023</span>
                                                                </p>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                                <Divider />
                                                <ListItemButton>
                                                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <Stack>
                                                                <p style={{textAlign: 'center', fontSize: 13}}>
                                                                    v/s <br />
                                                                    <span>12.02.2023</span>
                                                                </p>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                                <Divider />
                                                <ListItemButton>
                                                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <Stack>
                                                                <p style={{textAlign: 'center', fontSize: 13}}>
                                                                    v/s <br />
                                                                    <span>12.02.2023</span>
                                                                </p>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                                <Divider />
                                                <ListItemButton>
                                                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <Stack>
                                                                <p style={{textAlign: 'center', fontSize: 13}}>
                                                                    v/s <br />
                                                                    <span>12.02.2023</span>
                                                                </p>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                                <Divider />
                                                <ListItemButton>
                                                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={2} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <Stack>
                                                                <p style={{textAlign: 'center', fontSize: 13}}>
                                                                    v/s <br />
                                                                    <span>12.02.2023</span>
                                                                </p>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={5} style={{justifyContent: 'center', display: 'flex'}}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png"
                                                                loading="lazy"
                                                                style={{width: '30px', height: '30px'}}
                                                                alt=""
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </ListItemButton>
                                                <Divider />
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={9} direction="column">
                            <Card>
                                <CardHeader title="Standing"></CardHeader>
                                <TableContainer component={Paper}>
                                    <Table sx={{minWidth: 650}} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Pos.</TableCell>
                                                <TableCell>Club</TableCell>
                                                <TableCell align="right">Pl</TableCell>
                                                <TableCell align="right">GS</TableCell>
                                                <TableCell align="right">Pts</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.pos} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                    <TableCell component="th" scope="row">
                                                        {row.pos}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <img src={row.logo} loading="lazy" style={{width: '30px', height: '30px'}} alt="" />{' '}
                                                        &nbsp;
                                                        <span>{row.club}</span>
                                                    </TableCell>
                                                    <TableCell align="right">{row.Pl}</TableCell>
                                                    <TableCell align="right">{row.GS}</TableCell>
                                                    <TableCell align="right">{row.Pts}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} direction="column">
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Card>
                                        <CardHeader title="Player Stats"></CardHeader>
                                        <CardContent>
                                            <Grid container direction="row" spacing={2}>
                                                <Grid item xs={12} md={6} direction="column">
                                                    <Grid container direction="column" spacing={2}>
                                                        <Grid item>
                                                            <Card>
                                                                <CardHeader
                                                                    title="Top scorers"
                                                                    action={
                                                                        <Tooltip title="View more">
                                                                            <IconButton aria-label="View more" onClick={handleClickOpen}>
                                                                                <EastIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    }
                                                                ></CardHeader>
                                                                <CardContent>
                                                                    <List>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText
                                                                                primary="James Rodriguez"
                                                                                secondary="Real Madrid"
                                                                            />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText
                                                                                primary="Single-line item"
                                                                                secondary="Secondary text"
                                                                            />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText
                                                                                primary="Single-line item"
                                                                                secondary="Secondary text"
                                                                            />
                                                                        </ListItem>
                                                                    </List>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} md={6} direction="column">
                                                    <Grid container direction="column" spacing={2}>
                                                        <Grid item>
                                                            <Card>
                                                                <CardHeader
                                                                    title="Clean sheets"
                                                                    action={
                                                                        <Tooltip title="View more">
                                                                            <IconButton aria-label="View more">
                                                                                <EastIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    }
                                                                ></CardHeader>
                                                                <CardContent>
                                                                    <List>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText
                                                                                primary="James Rodriguez"
                                                                                secondary="Real Madrid"
                                                                            />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText
                                                                                primary="Single-line item"
                                                                                secondary="Secondary text"
                                                                            />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText
                                                                                primary="Single-line item"
                                                                                secondary="Secondary text"
                                                                            />
                                                                        </ListItem>
                                                                    </List>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardHeader title="Team Stats"></CardHeader>
                                        <CardContent>
                                            <Grid container direction="row" spacing={2}>
                                                <Grid item xs={12} md={6} direction="column">
                                                    <Grid container direction="column" spacing={2}>
                                                        <Grid item>
                                                            <Card>
                                                                <CardHeader
                                                                    title="Top scorers"
                                                                    action={
                                                                        <Tooltip title="View more">
                                                                            <IconButton aria-label="View more">
                                                                                <EastIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    }
                                                                ></CardHeader>
                                                                <CardContent>
                                                                    <List>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary="Manchester United" />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary="Manchester United" />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary="Manchester United" />
                                                                        </ListItem>
                                                                    </List>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12} md={6} direction="column">
                                                    <Grid container direction="column" spacing={2}>
                                                        <Grid item>
                                                            <Card>
                                                                <CardHeader
                                                                    title="Clean sheets"
                                                                    action={
                                                                        <Tooltip title="View more">
                                                                            <IconButton aria-label="View more">
                                                                                <EastIcon />
                                                                            </IconButton>
                                                                        </Tooltip>
                                                                    }
                                                                ></CardHeader>
                                                                <CardContent>
                                                                    <List>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary="Manchester United" />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary="Manchester United" />
                                                                        </ListItem>
                                                                        <ListItem secondaryAction={<b>10</b>}>
                                                                            <ListItemAvatar>
                                                                                <Avatar
                                                                                    alt="Remy Sharp"
                                                                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                                                                />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary="Manchester United" />
                                                                        </ListItem>
                                                                    </List>
                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title" sx={{textAlign: 'center', fontSize: 20}}>
                    {'Player detail'}
                </DialogTitle>
                <DialogContent>
                    <List>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="James Rodriguez" secondary="Real Madrid" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                        <ListItem secondaryAction={<b>10</b>}>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://cdn.vox-cdn.com/thumbor/_kK9DUT13AIQrymS5QU72F5LLVY=/0x0:2934x1956/1200x800/filters:focal(1195x464:1663x932)/cdn.vox-cdn.com/uploads/chorus_image/image/66667488/1204620648.jpg.0.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Single-line item" secondary="Secondary text" />
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default Leagueoverview;

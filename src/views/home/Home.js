import React from 'react';
import CarouselBanner from '../../componentUI/CarouselBanner/CarouselBanner';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();

    const ImgArr = [
        {
            name: 'Vini Jr',
            image: 'https://media.npr.org/assets/img/2022/12/07/gettyimages-1245321824_custom-87a2cabc85441ec402efe28ea6c45370c516c05b-s1100-c50.jpg'
        },
        {name: 'League one', image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/-1x-1.jpg'},
        {
            name: 'Mbappe',
            image: 'https://imageio.forbes.com/specials-images/imageserve/633b6c847b304297ba78b209/Kylian-Mbappe-of-Paris-Saint-Germain-reacts-after-scoring-during-match-against-OGC/0x0.jpg?format=jpg&crop=3261,1331,x0,y489,safe&height=1331&width=3261'
        }
    ];

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
            {/* <div style={{borderRadius: 100}}>
                <CarouselBanner data={ImgArr} />
            </div> */}
            <br />
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={3}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Latest result
                            </Typography>
                        </CardContent>

                        <List
                            sx={{width: '100%', bgcolor: 'background.paper'}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    Nested List Items
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
                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ranking
                            </Typography>
                        </CardContent>
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
                                                <img src={row.logo} loading="lazy" style={{width: '30px', height: '30px'}} alt="" /> &nbsp;
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
            </Grid>
            <br />
            <Card>
                <CardHeader
                    title="Recent News"
                    action={
                        <Tooltip title="View more">
                            <IconButton aria-label="View more">
                                <EastIcon />
                            </IconButton>
                        </Tooltip>
                    }
                ></CardHeader>
                <CardContent>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader
                                    avatar={
                                        <img
                                            src="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
                                            loading="lazy"
                                            style={{width: '30px', height: '30px', borderRadius: '100%'}}
                                            alt=""
                                        />
                                    }
                                    title="SuperLeague Community"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://i.guim.co.uk/img/media/59e244757ea28642744acc0e776de0e525a8f78f/250_0_7500_4500/master/7500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=72b287c8deea1236fd9d3c2f943eec5d"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                                        1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader
                                    avatar={
                                        <img
                                            src="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
                                            loading="lazy"
                                            style={{width: '30px', height: '30px', borderRadius: '100%'}}
                                            alt=""
                                        />
                                    }
                                    title="SuperLeague Community"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://i.guim.co.uk/img/media/59e244757ea28642744acc0e776de0e525a8f78f/250_0_7500_4500/master/7500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=72b287c8deea1236fd9d3c2f943eec5d"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                                        1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader
                                    avatar={
                                        <img
                                            src="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
                                            loading="lazy"
                                            style={{width: '30px', height: '30px', borderRadius: '100%'}}
                                            alt=""
                                        />
                                    }
                                    title="SuperLeague Community"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://i.guim.co.uk/img/media/59e244757ea28642744acc0e776de0e525a8f78f/250_0_7500_4500/master/7500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=72b287c8deea1236fd9d3c2f943eec5d"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                                        1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardHeader
                                    avatar={
                                        <img
                                            src="https://b.fssta.com/uploads/application/soccer/competition-logos/EnglishPremierLeague.png"
                                            loading="lazy"
                                            style={{width: '30px', height: '30px', borderRadius: '100%'}}
                                            alt=""
                                        />
                                    }
                                    title="SuperLeague Community"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://i.guim.co.uk/img/media/59e244757ea28642744acc0e776de0e525a8f78f/250_0_7500_4500/master/7500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=72b287c8deea1236fd9d3c2f943eec5d"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                                        1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br />
        </>
    );
}

export default Home;

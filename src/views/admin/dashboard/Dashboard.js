import React from 'react';
import {Grid} from '@material-ui/core';
import {gridSpacing} from '../../../store/constant';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const Dashboard = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Card variant="outlined">
                            <CardContent>
                                <List
                                    sx={{width: '100%', bgcolor: 'background.paper'}}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            Fixtures
                                        </ListSubheader>
                                    }
                                >
                                    <ListItem>
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
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
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
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
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
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
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
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
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
                                    </ListItem>
                                    <Divider />
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Card>
                            <CardHeader title="Top scorers"></CardHeader>
                            <CardContent>
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
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Card>
                            <CardHeader title="Clean sheets"></CardHeader>
                            <CardContent>
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
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
        </Grid>
    );
};

export default Dashboard;

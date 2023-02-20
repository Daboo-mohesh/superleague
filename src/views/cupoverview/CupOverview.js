import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';

function CupOverview() {
    return (
        <>
            <Card variant="outlined" sx={{mt: 1}}>
                <CardHeader title="Anahitta Cup"></CardHeader>
            </Card>
            <Card variant="outlined" sx={{mt: 1}}>
                <CardContent>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} md={3} direction="column">
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Card>
                                        <CardContent>
                                            <List
                                                sx={{width: '100%', bgcolor: 'background.paper'}}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                                subheader={
                                                    <ListSubheader component="div" id="nested-list-subheader">
                                                        Round 16
                                                    </ListSubheader>
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
                                                <Divider />
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
                                                <Divider />
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
                                                <Divider />
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
                                                <Divider />
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
                                                <Divider />
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3} direction="column">
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Card>
                                        <CardContent>
                                            <List
                                                sx={{width: '100%', bgcolor: 'background.paper'}}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                                subheader={
                                                    <ListSubheader component="div" id="nested-list-subheader">
                                                        Round 16
                                                    </ListSubheader>
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
                                                <Divider />
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
                                                            <br/>
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
                                                <Divider />
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
                                                <Divider />
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
                                                <Divider />
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
                                                            <br/>
                                                            <p style={{textAlign: 'center', fontSize: 13}}>
                                                                <b>1 - 1</b> <br />
                                                               
                                                                <span>12.02.2023</span>
                                                            </p>
                                                        </Stack>

                                                        {/* <Grid item xs={6} direction={'row'}>
                                                                <Card sx={{padding: 2}}>1</Card>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                <Card sx={{padding: 2}}>1</Card>
                                                            </Grid> */}
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
                                                <Divider />
                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default CupOverview;

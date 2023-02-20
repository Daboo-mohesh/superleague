import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import {CardActionArea} from '@mui/material';
import {useHistory} from 'react-router-dom';

function Clubs() {
    const history = useHistory();

    return (
        <Card variant="outlined" sx={{mt: 1}}>
            <CardHeader title="Clubs"></CardHeader>
            <CardContent>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={6} md={3} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <Card>
                            <CardActionArea onClick={() => history.push('/team/1')}>
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
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <Card>
                            <CardActionArea>
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
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <Card>
                            <CardActionArea>
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
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <Card>
                            <CardActionArea>
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
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <Card>
                            <CardActionArea>
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
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <Card>
                            <CardActionArea>
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
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Clubs;

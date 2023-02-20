import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function News() {
    return (
        <Card sx={{mt: 2}}>
            <CardHeader title="News"></CardHeader>
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

                            <iframe title="xyz" width="100%" height="194" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                                    cup of frozen peas along with the mussels, if you like.
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
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                                    cup of frozen peas along with the mussels, if you like.
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
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                                    cup of frozen peas along with the mussels, if you like.
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
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                                    cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default News;

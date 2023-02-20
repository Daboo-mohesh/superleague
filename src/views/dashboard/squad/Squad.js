import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent} from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Squad() {
    return (
        <Card variant="outlined" sx={{mt: 1}}>
            <CardContent>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://m.media-amazon.com/images/S/pv-target-images/d86c1fac8f6993ba17132a394e439e43b4541f7c7757b22ca28ea51e8e4ceb10.jpg"
                                alt="green iguana"
                            />
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goalkeeper
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://i.bundesliga.com/player/dfl-obj-0000i4-dfl-clu-00000g-dfl-sea-0001k6.png"
                                alt="green iguana"
                            />
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goalkeeper
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://www.realmadrid.com/img/vertical_380px/clc-james_1vc1870_20220619072920.jpg"
                                alt="green iguana"
                            />
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goalkeeper
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://resources.premierleague.com/premierleague/photos/players/250x250/p221820.png"
                                alt="green iguana"
                            />
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goalkeeper
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="250"
                                image="https://cdn.resfu.com/img_data/players/big/64511.jpg"
                                alt="green iguana"
                            />
                            <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goalkeeper
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Squad;

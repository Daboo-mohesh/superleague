import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

function Trophycentre() {
    return (
        <Card variant="outlined" sx={{mt: 1}}>
            <CardHeader title="Trophy centre"></CardHeader>
            <CardContent>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={3} direction="row">
                        <Grid item>
                            <Card variant="outlined" sx={{mt: 1}}>
                                <CardContent>
                                    <Grid container direction="column" spacing={2} alignItems="center" justify="center">
                                        <Grid
                                            item
                                            xs={3}
                                            direction="column"
                                            style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}
                                        >
                                            <img
                                                src="https://www.seekpng.com/png/detail/922-9224938_champion-league-trophy.png"
                                                loading="lazy"
                                                style={{width: '100%', height: '230px'}}
                                                alt=""
                                            />
                                        </Grid>
                                        <Grid item>Champions League</Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} direction="row">
                        <Grid item>
                            <Card variant="outlined" sx={{mt: 1}}>
                                <CardContent>
                                    <Grid container direction="column" spacing={2} alignItems="center" justify="center">
                                        <Grid
                                            item
                                            xs={3}
                                            direction="column"
                                            style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}
                                        >
                                            <img
                                                src="https://fifpro.org/media/50ukxy3p/world-cup-trophy.jpg?center=0.18066237927585291,0.50542495479204341&mode=crop&heightratio=0.64&width=1600&rnd=133129144183130000"
                                                loading="lazy"
                                                style={{width: '100%', height: '230px'}}
                                                alt=""
                                            />
                                        </Grid>
                                        <Grid item>Champions League</Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Trophycentre;

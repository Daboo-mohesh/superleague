import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import styles from '../leagues/League.module.css';
import {CardActionArea} from '@mui/material';
import {useHistory} from 'react-router-dom';

function Leagues() {
    const history = useHistory();

    return (
        <>
            <Card sx={{mt: 2}}>
                <CardHeader title="Leagues"></CardHeader>
                <CardContent>
                    <Grid container direction="row" spacing={5} alignItems="center" justify="center" sx={{mt: 1}}>
                        <Grid item direction="column" xs={12} md={3}>
                            <Card className={styles.portrait} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <CardActionArea onClick={() => history.push('/Leagueoverview/1')}>
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
                        <Grid item direction="column" xs={12} md={3}>
                            <Card className={styles.unity} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
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
            <Card sx={{mt: 2}}>
                <CardHeader title="Cups"></CardHeader>
                <CardContent>
                    <Grid container direction="row" spacing={5} alignItems="center" justify="center" sx={{mt: 1}}>
                        <Grid item direction="column" xs={12} md={3}>
                            <Card className={styles.portrait} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <CardActionArea onClick={() => history.push('/Cupoverview/1')}>
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
                        <Grid item direction="column" xs={12} md={3}>
                            <Card className={styles.unity} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
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
        </>
    );
}

export default Leagues;

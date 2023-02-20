import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import styles from '../history/History.module.css';
import Confetti from 'react-confetti';

function History() {
    const [IsConfettiActive, setIsConfettiActive] = useState(true);

    const w = window.innerWidth;
    const h = window.innerHeight;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsConfettiActive(false);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {IsConfettiActive && <Confetti numberOfPieces={300} width={w} recycle={'false'} height={h} gravity={0.1} />}
            <Card sx={{mt: 2}}>
                <CardHeader title="History"></CardHeader>
                <CardContent>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="https://imageio.forbes.com/specials-images/imageserve//62893c914156f9e51e4281a7/0x0.jpg?format=jpg&width=1200"
                                    alt="Paella dish"
                                />
                                <CardHeader title="Sporting Lisbon" subheader="Season 2021 Summer (01 Jan 2022 - 31 Jul 2022)" />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_27/3490343/210711-euro-2020-italy-ew-637p.jpg"
                                    alt="Paella dish"
                                />
                                <CardHeader title="Sporting Lisbon" subheader="Season 2021 Summer (01 Jan 2022 - 31 Jul 2022)" />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="https://www.independent.ie/incoming/6aeeb/38869217.ece/AUTOCROP/w620/PL41209351Champions%20League.jpg"
                                    alt="Paella dish"
                                />
                                <CardHeader title="Sporting Lisbon" subheader="Season 2021 Summer (01 Jan 2022 - 31 Jul 2022)" />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card variant="outlined">
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="https://www.fcbarcelona.com/photo-resources/2019/03/12/410ec76b-b35c-4d0a-b203-724d2ea8b836/migiQMGS.jpg?width=1200&height=750"
                                    alt="Paella dish"
                                />
                                <CardHeader title="Sporting Lisbon" subheader="Season 2021 Summer (01 Jan 2022 - 31 Jul 2022)" />
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}

export default History;

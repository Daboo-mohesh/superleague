import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent, CardHeader} from '@mui/material';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

function Team() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={12} md={3} direction="column">
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
                                            src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                            loading="lazy"
                                            style={{width: '70px', height: '70px'}}
                                            alt=""
                                        />
                                        <br />
                                        <b>Manchester United</b>
                                    </Grid>
                                    <Grid item xs={5} direction="column">
                                        <Grid item>
                                            <Chip label="Bel air, Flacq, Mauritius" />
                                        </Grid>
                                        {/* <br />
                                        <Grid item>
                                            <Chip label="Manchester United" />
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item direction="row">
                        <Card variant="outlined" sx={{mt: 1}}>
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
                </Grid>
                <Grid item xs={12} md={9} direction="column">
                    <Card variant="outlined" sx={{mt: 1}}>
                        <CardHeader title="Squad"></CardHeader>
                        <CardContent>
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={6} md={3}>
                                    <Card>
                                        <CardActionArea onClick={() => handleClickOpen()}>
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
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card>
                                        <CardActionArea onClick={() => handleClickOpen()}>
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
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card>
                                        <CardActionArea onClick={() => handleClickOpen()}>
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
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card>
                                        <CardActionArea onClick={() => handleClickOpen()}>
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
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <Card>
                                        <CardActionArea onClick={() => handleClickOpen()}>
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
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title" sx={{textAlign: 'center', fontSize: 20}}>
                    {'Player detail'}
                </DialogTitle>
                <DialogContent>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12} style={{justifyContent: 'center', display: 'flex'}}>
                            <img
                                src="https://cdn.resfu.com/img_data/players/big/64511.jpg"
                                loading="lazy"
                                style={{width: '100px', height: '100px', borderRadius: 100}}
                                alt=""
                            />
                        </Grid>
                        <br />
                        <Grid item xs={12}>
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" disabled="true" label="First name" value={'Neymar'} variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" disabled="true" label="Last name" value={'Neymar'} variant="outlined" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                disabled="true"
                                label="Nationality"
                                value={'Mauritian'}
                                variant="outlined"
                                sx={{width: '100%'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic" disabled="true" label="Goal scored" value={'10'} variant="outlined" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-basic"
                                        disabled="true"
                                        label="Games involvement"
                                        value={'25'}
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
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

export default Team;

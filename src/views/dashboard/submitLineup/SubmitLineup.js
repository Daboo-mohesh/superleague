import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent} from '@mui/material';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faPerson} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import ListSubheader from '@mui/material/ListSubheader';
import LoadingButton from '@material-ui/lab/LoadingButton';
import CardActions from '@mui/material/CardActions';

function SubmitLineup() {
    const [checked, setChecked] = React.useState([]);
    const [IsLoading, setIsLoading] = React.useState(false);

    const SubmitClick = () => {
        setIsLoading(true);
    };

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (newChecked.length !== 2) {
            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }
        } else {
            alert('Limit reached');
            console.log(newChecked);
        }

        setChecked(newChecked);
    };

    return (
        <Card variant="outlined" sx={{mt: 1}}>
            <CardContent>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
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
                                            style={{width: '50px', height: '50px'}}
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
                                            style={{width: '50px', height: '50px'}}
                                            alt=""
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" spacing={2} sx={{mt: 2}}>
                                    <Grid item xs={12} direction="column">
                                        <span style={{fontSize: 20}}>
                                            <FontAwesomeIcon icon={faCalendarDays} sx={{mr: 2}} />
                                            &nbsp; <Chip label="12 Febuary 2023, 18:00" />
                                        </span>
                                    </Grid>
                                    <Grid item xs={12} direction="column">
                                        <span style={{fontSize: 20}}>
                                            <FontAwesomeIcon icon={faTrophy} sx={{mr: 2}} />
                                            &nbsp;
                                            <Chip label="Bel Air Super League" />
                                        </span>
                                    </Grid>
                                    <Grid item xs={12} direction="column">
                                        <span style={{fontSize: 20}}>
                                            <FontAwesomeIcon icon={faLocationDot} sx={{mr: 2}} />
                                            &nbsp;
                                            <Chip label="Bel air, Mauritius" />
                                        </span>
                                    </Grid>
                                    <Grid item xs={12} direction="column">
                                        <span style={{fontSize: 20}}>
                                            <FontAwesomeIcon icon={faPerson} sx={{mr: 2}} />
                                            &nbsp; <Chip label="M.Daboo" />
                                        </span>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <List dense sx={{width: '100%', bgcolor: 'background.paper'}}>
                                    {[0, 1, 2, 3].map((value) => {
                                        const labelId = `checkbox-list-secondary-label-${value}`;
                                        return (
                                            <>
                                                <ListSubheader>Goalkeeper</ListSubheader>
                                                <ListItem
                                                    key={value}
                                                    secondaryAction={
                                                        <Checkbox
                                                            edge="end"
                                                            onChange={handleToggle(value)}
                                                            checked={checked.indexOf(value) !== -1}
                                                            inputProps={{'aria-labelledby': labelId}}
                                                        />
                                                    }
                                                    disablePadding
                                                >
                                                    <ListItemButton>
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                alt={`Avatar n°${value + 1}`}
                                                                src={`/static/images/avatar/${value + 1}.jpg`}
                                                            />
                                                        </ListItemAvatar>
                                                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                                    </ListItemButton>
                                                </ListItem>
                                            </>
                                        );
                                    })}
                                </List>
                            </CardContent>
                            <CardActions>
                                <LoadingButton
                                    loading={IsLoading}
                                    loadingIndicator="Loading…"
                                    variant="contained"
                                    color="primary"
                                    style={{width: '100%'}}
                                    onClick={() => {
                                        SubmitClick();
                                    }}
                                >
                                    Submit Lineup
                                </LoadingButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SubmitLineup;

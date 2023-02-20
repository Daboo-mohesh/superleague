import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from '../matchday/Matchday.module.css';
import CardHeader from '@mui/material/CardHeader';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFutbol} from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faTrophy} from '@fortawesome/free-solid-svg-icons';
import {faPerson} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';

function Matchday() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Card variant="outlined" sx={{mt: 1}} className={styles.background}>
                <CardHeader title="Matchday" sx={{textAlign: 'center'}}></CardHeader>
                <CardContent>
                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                        <Grid item xs={5} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/800px-Manchester_United_FC_crest.svg.png"
                                loading="lazy"
                                style={{width: '70px', height: '70px'}}
                                alt=""
                            />
                        </Grid>
                        <Grid item xs={2} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <Card sx={{padding: 2}}>1</Card>&nbsp;<Card sx={{padding: 2}}>1</Card>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Leeds_United_F.C._logo.svg/1200px-Leeds_United_F.C._logo.svg.png"
                                loading="lazy"
                                style={{width: '70px', height: '70px'}}
                                alt=""
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container direction="row" spacing={2} alignItems="center" justify="center">
                        <Grid item xs={5} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>
                                    <FontAwesomeIcon icon={faFutbol} sx={{mr: 2}} /> &nbsp; M.Daboo
                                </span>
                            </Grid>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>
                                    <FontAwesomeIcon icon={faFutbol} sx={{mr: 2}} /> &nbsp; M.Daboo
                                </span>
                            </Grid>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>
                                    <FontAwesomeIcon icon={faFutbol} sx={{mr: 2}} /> &nbsp; M.Daboo
                                </span>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            direction="column"
                            style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}
                        ></Grid>
                        <Grid item xs={5} direction="column" style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>
                                    <FontAwesomeIcon icon={faFutbol} sx={{mr: 2}} /> &nbsp; M.Daboo
                                </span>
                            </Grid>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>
                                    <FontAwesomeIcon icon={faFutbol} sx={{mr: 2}} /> &nbsp; M.Daboo
                                </span>
                            </Grid>
                            <Grid item xs={2} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                                <span style={{fontSize: 12}}>
                                    <FontAwesomeIcon icon={faFutbol} sx={{mr: 2}} /> &nbsp; M.Daboo
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <br />
            <Card variant="outlined">
                <CardContent>
                    <TabContext value={value}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Facts" value="1" />
                                <Tab label="Lineup" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Grid container direction="row" spacing={2}>
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
                        </TabPanel>
                        <TabPanel value="2">
                            <Grid container direction="row" spacing={2}>
                                <Grid item xs={12} md={6} direction="column">
                                    <List
                                        sx={{width: '100%', bgcolor: 'background.paper'}}
                                        aria-label="contacts"
                                        subheader={<ListSubheader>Manchester United</ListSubheader>}
                                    >
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="GK" />
                                                <ListItemText primary="C.Otakansdsdsdsdsdsdd" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="GK" />
                                                <ListItemText primary="Chelsea Otakan" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    direction="column"
                                    style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}
                                >
                                    <List
                                        sx={{width: '100%', bgcolor: 'background.paper'}}
                                        aria-label="contacts"
                                        subheader={<ListSubheader>Leeds</ListSubheader>}
                                    >
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="GK" />
                                                <ListItemText primary="C.Otakansdsdsdsdsdsdd" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="GK" />
                                                <ListItemText primary="Chelsea Otakan" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </TabContext>
                </CardContent>
            </Card>
        </>
    );
}

export default Matchday;

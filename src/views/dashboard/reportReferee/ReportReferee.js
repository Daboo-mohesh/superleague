import * as React from 'react';
import LoadingButton from '@material-ui/lab/LoadingButton';
import {CardContent} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ReportReferee() {
    const [IsLoading, setIsLoading] = React.useState(false);

    const SubmitClick = () => {
        setIsLoading(true);
    };

    return (
        <Grid container direction="row" spacing={2} alignItems="center" justify="center">
            <Grid item xs={12} md={6} style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                <Card variant="outlined" style={{width: '100%'}}>
                    <CardHeader title="Report form" sx={{textAlign: 'center', fontSize: 20}}></CardHeader>
                    <CardContent>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <FormControl sx={{width: '100%'}}>
                                    <InputLabel id="demo-simple-select-helper-label">Choose referee</InputLabel>
                                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="Age">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Reason"
                                    multiline
                                    rows={4}
                                    sx={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    Submit
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default ReportReferee;

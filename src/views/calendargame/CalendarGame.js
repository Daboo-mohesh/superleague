import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function CalendarGame() {
    const events = [{title: 'Match day', start: new Date('02/14/2023')}];

    return (
        <Grid container direction="row" spacing={2} sx={{mt: 2}}>
            <Grid item xs={12} direction="column">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    weekends={true}
                    events={events}
                    eventClick={(info) => {
                        alert(info.event.title);
                    }}
                    eventContent={renderEventContent}
                    handleWindowResize={true}
                />
            </Grid>
        </Grid>
    );
}

function renderEventContent(eventInfo) {
    return <b>{eventInfo.event.title}</b>;
}

export default CalendarGame;

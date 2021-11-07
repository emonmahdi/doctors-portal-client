import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const  bookings = [
    {
        id:'1',
        name: 'Teeth Orthodontics',
        time: '8:00 AM to 9:00 AM',
        space: 10,
    },
    {
        id: '2',
        name : 'Cosmetic Dentistry',
        time: '10:05 AM to 11:30 AM',
        space: 5
    },
    {
        id: '3',
        name: 'Teeth Cleaning',
        time: '5:00 PM to 6:00 PM',
        space: 10
    },
    {
        id: '4',
        name:'Cavity Potection',
        time: '7:30 AM to 8:00 AM',
        space: 6
    },
    {
        id: '5',
        name: 'Teeth Orthodontics',
        time: '8:30 AM to 9:30 AM',
        space: 10
    },
    {
        id: '6',
        name: 'Cosmetic Dentistry',
        time: '8:00 AM to 9:00 AM',
        space: 10
    },
]


const AvailableAppointments = ({date}) => {
    return (
        <div>
            <Typography variant='h5' sx={{color:'info.main', fontWeight:'bold', my:3}}>
            Available Appoinment{date.toDateString()}
            </Typography> 
            <Container>
                <Grid container spacing={2}>
                    {
                        bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        ></Booking>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default AvailableAppointments;
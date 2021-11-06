import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`, 
    marginTop: 175,
    backgroundColor: 'rgb(45, 58, 74,.7)',
    backgroundBlendMode:'darken, luminosity'

}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
             <img
            style={{width: 400, marginTop: '-110px'}}
             src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} 
          sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center', 
              textAlign:'left'
              }}>
            <Box sx={{ alignContent: 'flex-start'}}>
                <Typography variant='h6' sx={{mb:3}} style={{color:'#0BBC96' , fontWeight:600}}>
                    Appoinment 
                </Typography>
                <Typography sx={{mb:2}}  variant='h4' style={{color:'#fff' , fontWeight:600}}>
                Make an Appoiuntement <br /> Today
                </Typography>
                <Typography variant='p' style={{color:'#fff', marginBottom:'20px'}}>
                It is a long stablished fact that a reader will be distracted by the <br /> 
                </Typography>  <br />
                <Button style={{marginTop: '20px',backgroundColor:'#0BBC96'}} variant="contained">Learn More</Button>
            </Box>
          </Grid>
           
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png' 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container } from '@mui/material';


const bannerBg = {
    background:`url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}


const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height:450,

}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container >
                <Grid container spacing={2}>
                <Grid style={verticalAlign} sx={{textAlign: 'left'}} item xs={12} md={6}>
                   <Box>
                   <Typography style={{ fontWeight:600}} variant='h3'>
                            Your New Smile <br />
                            Starts Here
                    </Typography>
                    <Typography style={{color:'gray', fontWeight:'300'}} variant='p'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fugit perspiciatis sapiente, exercitationem earum repellat ea cum dicta quidem quos. <br />
                    </Typography> 
                    <Button style={{marginTop: '20px',backgroundColor:'#0BBC96'}} variant="contained">Get Appointment</Button>
                   </Box>
                </Grid>
                <Grid style={verticalAlign} item xs={12} md={6}>
                    <img style={{width:'400px'}} src={chair} alt="" />
                </Grid>
                
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
import React from 'react';
import fetures from '../../../images/treatment.png'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
const Features = () => {
    return (
        <Box sx={{ flexGrow: 1, py:5 }}>
            <Container>
                <Grid sx={{display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',}}  container spacing={2}>  
                    <Grid item xs={5} md={5}>
                        <img style={{width: 330}} src={fetures} alt="" />
                    </Grid>
                    <Grid sx={{
                        textAlign:'left',
                        paddingLeft:'30px',
                        
                        }} item xs={7} md={7}>
                        <Typography sx={{fontWeight:'700', marginBottom: '20px'}} variant='h4'>
                                Exceptional Dental Care, On your terms
                        </Typography>
                        <Typography variant='p'>
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque praesentium totam possimus laboriosam hic numquam harum ad aliquid incidunt, ipsa cum! Necessitatibus atque cupiditate minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque praesentium totam possimus laboriosam hic numquam harum ad aliquid incidunt, ipsa cum! Necessitatibus atque cupiditate minima. <br />
                        </Typography> 
                        <Button style={{marginTop: '20px',backgroundColor:'#0BBC96'}} variant="contained">Learn More</Button>
                    </Grid>
                </Grid>
            </Container>
      </Box>
      
    );
};

export default Features;
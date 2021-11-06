import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import flourida from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import treath from '../../../images/whitening.png';

const services = [
    {
        name: "Flouride Treatment",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque praesentium totam possimus laboriosam hic numquam harum ad aliquid incidunt, ipsa cum! Necessitatibus atque cupiditate minima',
        img:flourida
    },
    {
        name: "Cavity Fealing",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque praesentium totam possimus laboriosam hic numquam harum ad aliquid incidunt, ipsa cum! Necessitatibus atque cupiditate minima',
        img:cavity
    },
    {
        name: "Treath Whitining",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque praesentium totam possimus laboriosam hic numquam harum ad aliquid incidunt, ipsa cum! Necessitatibus atque cupiditate minima',
        img:treath
    }
]
 

const Services = () => {
    return (
        <div>  
            <Box sx={{ flexGrow: 1 }}>
               <Container>
               <Typography sx={{ fontWeight: 'medium', color: 'text.success',m: 2 }} variant="h5" component="div">
                     Our Services
                </Typography> 
               <Typography  sx={{ fontWeight: 'bold', m: 4 }} variant="h4" component="div">
                     Services We Provide
                </Typography> 
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
                </Container>
            </Box>
        
           
        </div>
    );
};

export default Services;
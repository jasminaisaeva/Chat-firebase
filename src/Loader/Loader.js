import React from 'react'
import './Loader.css'
import {Container, Grid} from "@material-ui/core";

export const Loader = () => {
    return <div>
         <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
        
      >
        <Grid 
        container 
         alignItems={'center'}
         direction={'column'}
        >
            <div className="lds-hourglass"></div>
         
        </Grid>
      </Grid>
    </Container>
    </div>
}
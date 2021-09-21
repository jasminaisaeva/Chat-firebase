import { Box,  Button, Container, Grid} from "@material-ui/core";
import React, { useContext } from "react";
import {Context} from '../../index'
import firebase from 'firebase';




export const Login = () => {
const {auth} = useContext(Context)


const login = async () => {
const provider = new firebase.auth.GoogleAuthProvider()
const {user} =  await auth.signInWithPopup(provider)
console.log(user)

}
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
        
      >
        <Grid container style={{width: 400 ,background:'lightgray'}}
         alignItems={'center'}
         direction={'column'}
        >
            <Box p={8}>
           <Button onClick={login} variant={'outlined'}>Sign in with Google</Button>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

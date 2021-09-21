import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../conts";
import { useContext } from 'react';
import {  Context } from "../../index";
import {useAuthState} from 'react-firebase-hooks/auth'




export const Navbar = () => {
  const {auth} = useContext(Context)
   const [user] = useAuthState(auth)

  
  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant={'dense'}>
        <Grid container justify={"flex-end"}>
          {user ? 
            <Button onClick={() => auth.signOut()}  variant={"outlined"}>ВЫЙТИ</Button>
           : 
            <Link to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>ЛОГИН</Button>
            </Link>
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './AppRoute/AppRouter';
import { Navbar } from './components/Navbar/Navbar';
import {  Context } from "./index";
import {useAuthState} from 'react-firebase-hooks/auth'
import {Loader} from './Loader/Loader'


function App() {

  const {auth} = useContext(Context)
  const [user,loading , error] = useAuthState(auth)

  if(loading){
    return <Loader/>
  }
 

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

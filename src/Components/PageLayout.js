import React from 'react'
import './PageLayout.css';
import ScriptsCard from './SubComponents/ScriptsCard';
import FullScript from './SubComponents/FullScript';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LeftMenue from './SubComponents/LeftMenue';
import RightMenue from './SubComponents/RightMenue';



export default function PageLayout() {
  return (
    <>
    <Router>
<div className="Page">


  <div className="left">
    <LeftMenue/>
  </div>


  <div className="center">

  <Switch>
          <Route path="/ScriptsCard">
            <ScriptsCard writername="Ankit Kumar" /><hr/>
            <ScriptsCard writername="Nishant Mishra" /><hr/>
            <ScriptsCard writername="Hardik kumar" /><hr/>
            <ScriptsCard writername="Ritikh bhardwaj"/><hr/>
            <ScriptsCard writername="himanshu goyal"/><hr/>
            <ScriptsCard writername="Priyansh saxena"/><hr/>
            <ScriptsCard writername="Harshit ruwali"/><hr/>
            <ScriptsCard writername="harshvardhan maske"/><hr/>
            <ScriptsCard writername="Hemant rajput"/><hr/>
            <ScriptsCard writername="Akhil sahukar"/><hr/>   
          </Route>

          <Route path="/FullScript">
             <FullScript writername="Akhil sahukar" />
          </Route>

  </Switch>



  

  </div>


  <div className="right">
    <RightMenue/>
  </div>

</div>

</Router>




    </>
  )
}

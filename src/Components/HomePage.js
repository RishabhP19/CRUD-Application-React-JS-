import React from 'react'
import { ToastContainer } from "react-toastify";
// import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";


const HomePage = () => {
  return (
    <div >
        <ToastContainer />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </div>
  )
}

export default HomePage
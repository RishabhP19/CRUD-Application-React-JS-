

import { ToastContainer } from "react-toastify";
// import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Add from "./Components/Add";

// import SideBar from "./Components/SideBar";
function App() {
  return (
    <div className="App">
     
      {/* <Navbar /> */}
       
      {/* <MiniDiv/> */}
      <ToastContainer />
 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/edit/:id">
          <Edit/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

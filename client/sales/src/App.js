import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Navigation from "./component/layout/Navigation"
import Main from "./component/layout/Main"
import Footer from "./component/layout/Footer"
import Register from "./component/form/Register"
import Login from "./component/form/Login"
import View from "./component/form/ViewCustomer"
import store from "./store/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store = { store }>
         <Router>
      <div className="App">
      <header className="App-header">
       <Navigation/>
       <Route exact path ="/" component={Main}/>
       <Route exact path ="/api/register" component={Register}/>
       <Route exact path ="/api/login" component={Login}/>
       <Route exact path ="/api/view" component={View}/>
       <Footer/>
      </header>
    </div>
    </Router>
    </Provider>
   
  );
}

export default App;

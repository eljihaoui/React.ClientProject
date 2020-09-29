import React from 'react';
import './App.css';
import NavBar2 from './components/navbar2/NavBar2';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContacts from './components/Contact/ListContacts';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from './components/Contact/context';
import AddContact from './components/Contact/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import EditContact from './components/Contact/EditContact';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <div className="container">
            <NavBar2 title="G.Contact" />
            <Switch>
              <Route exact path='/' component={ListContacts}></Route> {/*segement static*/}
              <Route exact path='/Contact/add' component={AddContact}></Route>{/*segement static*/}
              <Route exact path='/Contact/edit/:id' component={EditContact}></Route>{/*segement dynamic path='/about/:id/:name' */}
              <Route exact path='/about/:id' component={About}></Route>{/*segement dynamic path='/about/:id/:name' */}
              <Route component={NotFound}></Route>{/*segement static*/}
            </Switch>
          </div>
        </div >
      </Router>
    </Provider>
  );
}
export default App;

import React from 'react';
import './App.css';
import NavBar2 from './components/navbar2/NavBar2';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContacts from './components/Contact/ListContacts';

import 'font-awesome/css/font-awesome.min.css';
import { Provider } from './components/Contact/context';
import AddContact from './components/Contact/AddContact';
function App() {

  return (
    <Provider>
      <div className="App">
        <div className="container">
          <NavBar2 title="App Client" />
          <div className="row">
            <div className="col-4">
              <AddContact />
            </div>
            <div className="col-8">
              <ListContacts />
            </div>
          </div>
        </div>
      </div >
    </Provider>
  );
}
export default App;

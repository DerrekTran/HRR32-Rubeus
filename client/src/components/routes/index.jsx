import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TownHallContainer from '../townhall/TownHallContainer.jsx';
import MapContainer from '../MapContainer.jsx';
import ZipForm from '../ZipForm.jsx';
import LoginForm from '../LoginForm.jsx';
import Chat from '../Chat.jsx';

const Routes = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Main</Link>
          <Chat />
        </li>
        <li>
          <Link to="/townhall">TownHall</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/login">Login/Signup</Link>
        </li>
        <li>
          <Link to="/zip">Zip</Link>
        </li>
      </ul>
      <Route path="/map" component={MapContainer} />
      <Route path="/townhall" component={TownHallContainer} />
      <Route path="/zip" component={ZipForm} />
      <Route path="/login" component={LoginForm} />

    </div>
  </BrowserRouter>

)
//<Route exact path="/" component={App} />

export default Routes;
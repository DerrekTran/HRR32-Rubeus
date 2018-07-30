import React, { Component } from 'react';
import CreateTownHall from './CreateTownHall.jsx';
import ViewAllTownHalls from './ViewAllTownHalls.jsx';
import ViewTownHall from './ViewTownHall.jsx'


export default class TownHallContainer extends Component {
  render() {
    return (
      <div style={{border:"dashed red 2px"}}>
        This is the Town Hall Container. This is the parent component of the Town Hall Feature. When users click on the Town Hall in the nav panel, they will see this.
        <CreateTownHall />
        <ViewAllTownHalls />
      </div>
    )
  }
}

//        <ViewTownHall />



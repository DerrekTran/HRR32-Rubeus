import React, { Component } from 'react';
import OfficialCreateTownHall from './OfficialCreateTownHall.jsx';
import UserCreateTownHall from './UserCreateTownHall.jsx';
import ViewTownHall from './ViewTownHall.jsx'


export default class CreateTownHall extends Component {

  constructor(props){
    super(props);
    this.state = {
      userType : 'official'
    }
  }

  renderView() {
    console.log('renderview called ')
    if (this.state.userType === 'user') {
      return <UserCreateTownHall />
    } else if (this.state.userType === 'official') {
      return <OfficialCreateTownHall />
    }
  }

  render() {
    return (
      <div style={{border:"dotted purple 2px"}}>
        This is the Create Town Hall Component. This will display either a question form or a create town hall form, depending on the user status. In this example, both views are shown.
        <button
          onClick={()=>{this.setState({userType: 'user'})}}>
          Change type to User
        </button>
        <button
          onClick={()=>{this.setState({userType: 'official'})}}>
          Change type to Official
        </button>
        {this.renderView()}

      </div>
    )
  }
}
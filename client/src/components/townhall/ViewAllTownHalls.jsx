import React, { Component } from 'react';
import axios from 'axios';
import ViewTownHall from './ViewTownHall.jsx'

const fakeData = [
  {
    townHallName: "Senator Jeff's town hall",
    closesAt: "somedate here."
  },
  {
    townHallName: "Governor Fred's town hall",
    closesAt: "somedate here."
  },
  {
    townHallName: "House James's town hall",
    closesAt: "somedate here."
  }
];

export default class ViewAllTownHalls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      townHalls : [],
      townHall: '',
      questions: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getTownHalls();
  }

  getTownHalls() {
    //send get request to server
    axios.get('/alltownhalls').then(halls => {
      //console.log(halls.data);
      this.setState({townHalls: halls.data})
    })
  }


  handleClick(e) {
    this.setState({ townHall: e.target.textContent})

    axios.get('/questions', {
      params: {
        townHall: this.state.townHall
      }
    })
    .then(questionsAnswers => {
      let qData = questionsAnswers.data.slice();
      console.log('new question data', qData);
      this.setState({questions: qData})
    })
  }

  render() {
    return (
      <div style={{ border: "dotted blue 2px" }}>
        This is the ViewAllTownHalls View<br />
        DONE: This will need to RETRIEVE the CURRENT TOWN HALLS.<br />
        When users click on a town hall, they will see the questions within it.<br />
        This will send to the ViewTownHall component the name as a PROP. <br />
        Depending on whether we query all the data or some, we can make one or two AJAX calls.

        { this.state.townHalls.length > 0 ? this.state.townHalls.map((hall, i) =>
          <div key={i}> <span onClick={this.handleClick}>{hall}</span></div>) : ''}

        <ViewTownHall townHallName={this.state.townHall} questions={this.state.questions}/>

      </div>
    )
  }
}
//http://derpturkey.com/react-pass-value-with-onclick/

//
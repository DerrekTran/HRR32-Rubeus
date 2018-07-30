import React, { Component } from 'react';
import TownHallQuestion from './TownHallQuestion.jsx';
import axios from 'axios';

export default class ViewTownHall extends Component {

  constructor(props) {
    super(props)

    //props should contain info on which town hall it is.
    this.state = {
      userType: 'official',
      townHallName: '',
      questions: []
    }
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    //query list of questions for this particular town hall
    //console.log('viewtownhall mounted, current TownHall is:  ', this.props.townHall)
    //this.getQuestions(this.props.townHallName);
  }


  getQuestions(hallName) {
    console.log('axios called');
    axios.get('/questions', {
      params: {
        townHall: hallName
      }
    })
    .then(questionsAnswers => {

      let qData = questionsAnswers.data.slice();
      qData.length > 0 ?
        this.setState({questions: qData})
        : null
    })
  }




  //render
    render() {
    return (
      <div style={{ border: "dotted blue 2px" }}>
        This is the View (individual town hall) component. <br/>
        This is a child of ViewAllTownHalls<br/>
        This will map the list of questions to a list of elements.
        This will RETRIEVE a list of QUESTIONS for the SELECTED TOWN HALL, and map them to components.


        { this.props.questions.length > 0 ? this.props.questions.map((qData, i) =>
          <div key={i}>
            <div> Question: {qData.question} </div>
            <div> Answer:   {qData.answer ? qData.answer : 'ANSWER PENDING'} </div>
            <div> TownHall: {qData.townHallName} </div>
            <div> Created On: {qData.createDate} </div>
          </div>) : ''
        }

      </div>
    )
  }
}



  // //render
  //   render() {
  //   return (
  //     <div style={{ border: "dotted blue 2px" }}>
  //       This is the View (individual town hall) component. <br/>
  //       This is a child of ViewAllTownHalls<br/>
  //       This will map the list of questions to a list of elements.
  //       This will RETRIEVE a list of QUESTIONS for the SELECTED TOWN HALL, and map them to components.

  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //       <TownHallQuestion />
  //     </div>
  //   )
  // }


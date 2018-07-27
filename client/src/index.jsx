import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ZipForm from './components/ZipForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import ListView from './components/ListView.jsx';
import Chat from './components/Chat.jsx';

const styles = {
  master: {
    alignContent: "center",
    fontFamily: "Verdana, Geneva, sans-serif"
  },
  headers: {
    backgroundColor: "red",
    alignContent: "center",
    color: "white",
    margin: 0,
    padding: 10
  },
  zip: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 40,
    paddingTop: 100
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      tier: 'state',
      currentView: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOAuth = this.handleOAuth.bind(this);
  }

  handleSubmit(inputZip, inputRegion) {
    event.preventDefault();
    console.log('current state:', inputZip, inputRegion);

    axios.post('/saveUser', {
      zip: inputZip,
      region: inputRegion
    })
    .then(response => {
      if (typeof(response.data) === 'String') {
        console.log(response.data);
      } else {
        this.setState({ data: response.data })
      }
    })
  }

  handleOAuth() {
    console.log('handleOAuth called');

  }

  render () {
    return <div style={styles.master}>
        <div className="nav" style={styles.headers}>
          <h1>App v1.1</h1>
          <a href="auth/google">Login with Google</a>

        </div>
        <ZipForm onSubmit={(zip, region) => this.handleSubmit(zip, region)} />
        <LoginForm />
        <ListView data={this.state.data} />
        <Chat />
      </div>;
  }
}







ReactDOM.render(<App/>, document.getElementById('app'));
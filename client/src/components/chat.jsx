import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
//socket.io-client for front end
class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: [],
            isLoggedIn: false,
        };
    
        this.socket = io('localhost:3000');
        //when receivess data from server, adds message to message array to be displayed.
        this.socket.on('receive_message', (data) => {
            console.log('client received message from server')
            addMessage(data);
        });
        /***********************************
         Function: addMessage
         Input: data
         output: adds message to message array that is being received from server
         ***********************************/
        const addMessage = (data) => {
            console.log('data:', data);
            this.setState({messages: [...this.state.messages, data]});
            console.log('this.state.messages', this.state.messages);
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }

    /***********************************
    axios call to see if authenticated. If authenticated then will set username to name from userData 
    ***********************************/
    componentDidMount () {
      console.log('mounted', this.state.username)
      axios.get('/checkuser')
        .then(userData => {
          console.log(userData);
          if (userData.data[0].username) {
            this.setState({
              username: `${userData.data[0].username} 🇺🇸`,
              isLoggedIn: true,
            })
          }
        })
    }
     /***********************************
        sends message and username to server to be delivered to all others connected to the socket
    ***********************************/
    sendMessage (e) {
        e.preventDefault();
        console.log('message sent to server, this.state:', this.state);
        this.socket.emit('send_message', {
            author: this.state.username,
            message: this.state.message
        });
        
    }

    setUsername (e) {
        console.log('username target value', e.target.value)
        this.setState({
            username: e.target.value
        });
    }

    setMessage (e) {
        console.log('message target value', e.target.value)
        this.setState({
            message: e.target.value
        });
    }

    render () {
        return (
          <div className="container">
              <div className="row">
                  <div className="col-8">
                      <div className="card">
                        <div className="card-body">
                  <h4>User Chat:</h4>
                  <div className="card-title"> {this.state.username ? `Chatting as: ${this.state.username}` : ''}</div>
                            <hr/>
                            <div className="messages">
                                {this.state.messages.map(message => {
                                    return (
                                        <div>
                                        <strong>{message.author}:</strong> {message.message}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="card-footer">
                                {!this.state.isLoggedIn ? <input type="text" placeholder="Username" className="form-control" onChange={this.setUsername} /> : ''}
                                <br/>
                                <input type="text" placeholder="Message" className="form-control" onChange={this.setMessage}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      );
    
    }
}

export default Chat;
import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };
     
        this.socket = io('localhost:3000');
        
        this.socket.on('receive_message', (data) => {
            console.log('client received message from server')
            addMessage(data);
        });
        
        const addMessage = (data) => {
            console.log('data:', data);
            this.setState({messages: [...this.state.messages, data]});
            console.log('this.state.messages', this.state.messages);
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setMessage = this.setMessage.bind(this);
    }
    componentDidMount () {
        console.log('mounted')
        axios.get('/auth/currentUser', function(userData) {
            console.log(userData);
        })
    }

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
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Users Chat</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="card-footer">
                                    <input type="text" placeholder="Username" className="form-control" onChange={this.setUsername} />
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
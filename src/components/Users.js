import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import UserItem from './UserItem';
import axios from 'axios';
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users').then((result)=> {
            console.log(result.data);
            this.setState(() => (
                {
                 users:  [...result.data]
                }
            ));
        });
    }

    render() {
        return(
            <div className='row align-items-center mx-3'>
                    {
                        (this.state.users.length !== 0 ) &&  this.state.users.map((user) =>  <UserItem key={user.id} user = {user} />)
                    }  
            </div>
            
        );
    }
}
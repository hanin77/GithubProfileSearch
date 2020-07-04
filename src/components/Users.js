import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import UserItem from './UserItem';
export default class Users extends Component {
    constructor(props) {
        super(props);

    }
    

    render() {
        return(
            <div className='row align-items-center mx-3'>
                    {
                        (this.props.users.length !== 0 ) &&  this.props.users.map((user) =>  <UserItem key={user.id} user = {user} />)
                    }  
            </div>
            
        );
    }
}
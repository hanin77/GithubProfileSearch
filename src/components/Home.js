import React, {Component, Fragement} from 'react';
import Users from './Users';
import axios from 'axios';

import {Button, Spinner, FormData, FormControl, Form, FormGroup} from 'react-bootstrap';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            users: [],
            textSearch: 'hanin',
            searchOrNot: false,
            loading: false
        }
    }

    onTextSearchChange = (e) => {
        const textSearch = e.target.value;
        this.setState(() => ({textSearch, searchOrNot: false}));
        
    }
    getUesrs = () => {
        axios.get(`https://api.github.com/search/users?q=${this.state.textSearch}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`).then((result)=> {
            this.setState((prevState) => ({searchOrNot: true, users: [...result.data.items]}));
        });
    }
    
    onSubmitForm = (e) => {
        e.preventDefault();
        this.getUesrs();
        
       
    }


    render() {
        return (
            <div>
                <Form onSubmit = {this.onSubmitForm} >
                    <FormGroup role='form' className="mx-3">
                        <FormControl required className="form-control my-2" name='textSearch' type='text' placeholder='Search for a User' onChange={this.onTextSearchChange}></FormControl>
                        <Button className='btn btn-success btn-block' type="submit">Search</Button>
                    </FormGroup>
                </Form>
                {<Users users={this.state.users} />}
            </div>
        );
    }
}

export default Home;


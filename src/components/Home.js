import React, {Component, Fragement} from 'react';
import Users from './Users';
import {Button, FormControl, Form, FormGroup} from 'react-bootstrap';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }

    onTextSearchChange = (e) => {
        const textSearch = e.target.value;
        this.setState(() => ({textSearch}));
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log('ok');
        this.setState(() => ({textSearch: ''}));
    }

    render() {
        return (
            <div>
                <Form onSubmit = {this.onSubmitForm} >
                    <FormGroup role='form' className="mx-3">
                        <FormControl required className="form-control my-2" type='text' placeholder='Search for a User' onChange={this.onTextSearchChange}></FormControl>
                        <Button className='btn btn-success btn-block' type="submit">Search</Button>
                    </FormGroup>
                </Form>
                <Users />
            </div>
        );
    }
}

export default Home;


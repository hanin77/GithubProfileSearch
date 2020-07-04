import React, {Component, Fragement} from 'react';
import Users from './Users';
import axios from 'axios';
import {Button, Spinner, FormData, FormControl, Form, FormGroup} from 'react-bootstrap';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            textSearch: 'hanin',
            searchOrNot: false,
            loading: false
        }
    }

    onTextSearchChange = (e) => {
        const textSearch = e.target.value;
        this.setState(() => ({textSearch}));
        
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        console.log("ok");
        this.setState((prevState) => ({searchOrNot: true, loading: true}));
    }



    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextstate',nextState.textSearch);
        console.log('curentstate',this.state.textSearch);
        return(this.state.searchOrNot);
    }
   
    componentDidUpdate() { 
        axios.get(`https://api.github.com/search/users?q=${this.state.textSearch}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`).then((result)=> {
            console.log(result.data.items);
            this.setState(() => (
                {
                 users:  [...result.data.items],
                 searchOrNot: false,
                 loading: false
                }
            ));
        });
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
                {this.state.loading? <div className='d-flex justify-content-center'><Spinner className='p-2' animation="border" /></div>: <Users users={this.state.users} />}
            </div>
        );
    }
}

export default Home;


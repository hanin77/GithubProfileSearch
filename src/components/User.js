import React, {Component, Fragement} from 'react';
import axios from 'axios';
import {Button, Badge, Card} from 'react-bootstrap';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.login);
        this.getUesr(this.props.match.params.login);
    }
    getUesr = (username) => {
        axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`).then((result)=> {
            this.setState((prevState) => ({user: {...result.data}}));
            console.log(result.data);
        });
    }
    render() {
        return (
                <div className="row align-items-center mx-1" >
                    <div className ="col-2-lg col-12-sm text-center my-1 mx-1">
                        <Card  style={{ width: '12rem' }}>
                            <Card.Img variant="top" className="rounded-circle" alt="Profile's Avatar" src={this.state.user.avatar_url} />
                            <Card.Body>
                                <Card.Title className ='font-weight-bold'>{this.state.user.login}</Card.Title>
                                <Card.Subtitle >{this.state.user.location} </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className ="col-10-lg col-12-sm text-center">
                        {this.state.user.bio && <div className ="row align-items-center mx-2">
                            <p className ="display-4">Biographie:</p>
                            <p>{this.state.user.bio}</p>
                            <Button className ='btn btn-dark btn-block' href={this.state.user.html_url} >Visit Profile</Button>
                        </div>
                        }
                        <div className ="row align-items-center my-2 mx-2">
                            <Badge className ='col mx-1' variant ='danger'>Followers {this.state.user.followers} </Badge>
                            <Badge className ='col mx-1' variant ='success'>Following {this.state.user.following} </Badge>
                            <Badge className ='col mx-1' variant ='dark'>Public repos {this.state.user.public_repos} </Badge>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default User;
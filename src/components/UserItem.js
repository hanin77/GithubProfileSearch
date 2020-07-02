import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';

const UserItem = ({user:{id, login, avatar_url, html_url}}) => {
        return (
            <div className='col text-center mt-2'>
                <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" className="rounded-circle" alt="Profile's Avatar" src={avatar_url} />
                    <Card.Body>
                        <Card.Title className ='font-weight-bold'>{login}</Card.Title>
                        <a className='btn btn-sm btn-dark text-light' variant="primary">More</a>
                    </Card.Body>
                </Card>
            </div>
        )
}
export default UserItem;

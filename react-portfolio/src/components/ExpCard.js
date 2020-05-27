import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export class ExpCard extends Component {
    render() {
    return (
        <div>
            <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src={this.props.imgsrc} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                {this.props.role}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{this.props.description}</ListGroupItem>
                {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
            </ListGroup>
            <Card.Body>
                <Card.Link href={this.props.link}>Learn More</Card.Link>
            </Card.Body>
            </Card>
        </div>
    )
    }
}
export default ExpCard;


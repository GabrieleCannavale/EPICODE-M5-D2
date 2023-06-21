import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './SingleCard.css';

const SingleCard = ({ img, title, price }) => {

    const [isSelected, setIsSelected] = useState(false);

    const toggleSelected = () => setIsSelected(!isSelected);

    return(
     //""
        <Col className="d-flex flex-wrap gap-2">
        <Card className={`${isSelected ? 'border border-4 border-danger shadow-lg card-book' : 'card-book border-4'}`} style={{ width: '18rem' }}>
            <Card.Img variant="top" className="card-image" src={img} />
            <Card.Body>
                <Card.Title className="text-light"> {title} </Card.Title>
                <Card.Text className="text-light">
                    € {price}
                </Card.Text>
                <Button onClick={toggleSelected}   variant="primary">Do Something</Button>
            </Card.Body>
        </Card>
    </Col>
    )

}

export default SingleCard;


/* class SingleCard extends Component {
    render() {
        return (
            <Col className="d-flex flex-wrap gap-2">
                <Card className="card-book"  style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="card-image" src={this.props.img} />
                    <Card.Body>
                        <Card.Title className="text-light"> {this.props.title} </Card.Title>
                        <Card.Text className="text-light">
                            € {this.props.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    };
}

export default SingleCard; */
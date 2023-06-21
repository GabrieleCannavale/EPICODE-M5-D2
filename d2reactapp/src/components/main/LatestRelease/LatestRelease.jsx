import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleCard from "../SingleCard/SingleCard";
import SciFiBooks from '../../../data/scifi.json';
import './LatestRelease.css';

const LatestRelease = ({ searchValue }) => {

    return (
        <div className="main-div py-5">
            <Container>
                <Row className="d-flex gap-2">

                    
                    {
                        searchValue === '' || searchValue === undefined ? // il valore SearchValue è vuoto?

                            //SE SI:
                            SciFiBooks.map((book) => (
                                <SingleCard
                                    key={book.asin}
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                />
                            ))

                            //SE NO:
                            : SciFiBooks.filter((book) =>
                                book.title.toLowerCase().includes(searchValue.toLowerCase())
                            ).map((book) => (
                                <SingleCard
                                    key={book.asin}
                                    img={book.img}
                                    title={book.title}
                                    price={book.price}
                                />
                            ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default LatestRelease;

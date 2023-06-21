import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const NavigationBar = ({ onSearch }) => { // Aggiungi una prop onSearch per gestire la ricerca

    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        onSearch(searchValue); // Richiama la funzione onSearch passando il valore di ricerca
    };

    return (
        <Navbar bg="dark" className='mb-4 fixed-top' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">scifi BOOKS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Browse</Nav.Link>
                    <div className='align-self-end'>
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button type="button" onClick={handleSearch}>Search</button>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;

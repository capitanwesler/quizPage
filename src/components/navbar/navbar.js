import React from 'react';
import './navbar.css';

class Navbar extends React.Component {

    render() {
        return(
            <nav id="navbar-container">
                <span>Welcome to the QuizPage !</span>
                <p>Made by @Guillermo Rivas</p>
            </nav>
        );
    }
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <h1>Antonio Musto</h1>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cv">CV</Link></li>
                    <li><Link to="/publications">Projects and Pubs</Link></li>
                    <li><Link to="/dh-projects">Digital Humanities</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

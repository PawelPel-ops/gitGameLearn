import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <h1>Git Game Learn</h1>
            <nav>
                <ul>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Link 1</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Link 2</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Link 3</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#">Link 4</a></li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;
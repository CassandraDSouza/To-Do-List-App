import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={HeaderStyle}>
            <h1>To-Do List</h1>
            <Link style={linkStyle} to= "/">Home</Link> | 
            <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}

const HeaderStyle = {
    background: '#ffc0cb',
    border: '#ff8095 solid', 
    color: '#FF1493',
    textAlign: 'center',
    padding: '10px'
}


const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;
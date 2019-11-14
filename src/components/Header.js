import React from 'react';
import moment from 'moment';

const Header = () => {
    return (
        <div className="container">
            <header style={headerStyle}>
                <br />
                <h1>Team To-Do List</h1>
                <h4>{moment(new Date()).format('dddd DD MMMM YYYY')}</h4>
            </header>
        </div>
    )
};

const headerStyle = {
    background: "#7000d9",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};


export default Header;